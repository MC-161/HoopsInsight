import { ColumnDef } from "@tanstack/react-table"
import { PlayerGameStats } from "@/types/Dash/PlayerDash"

export const columns: ColumnDef<PlayerGameStats>[] = [
  {
    accessorKey: "gameID",
    header: "Matchup",
    cell: (info) => {
      const gameID = info.getValue() as string;
      const teams = gameID.split("_")[1].split("@");
      return `${teams[0]} vs ${teams[1]}`;
    },
  },
  {
    accessorKey: "gameID",
    header: "Date",
    cell: (info) => {
      const gameID = info.getValue() as string;
      const dateStr = gameID.split("_")[0]; // Extract the date part
      
      // Convert the extracted date string to numbers
      const year = parseInt(dateStr.slice(0, 4), 10);
      const month = parseInt(dateStr.slice(4, 6), 10) - 1; // Months are 0-indexed
      const day = parseInt(dateStr.slice(6, 8), 10);

      // Create a Date object and format it
      const date = new Date(year, month, day);
      return date.toLocaleDateString(); // Format date as 'MM/DD/YYYY'
    },
  },
  {
    accessorKey: "mins",
    header: "Mins",
  },
  {
    accessorKey: "plusMinus",
    header: "+/-",
  },
  {
    accessorKey: "pts",
    header: "PTS",
  },
  {
    accessorKey: "ast",
    header: "AST",
  },
  {
    accessorKey: "reb",
    header: "REB",
  },
  {
    accessorKey: "fgp",
    header: "FGP",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "tptfgp",
    header: "TPP",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "TOV",
    header: "TOV",
    cell: (info) => `${info.getValue()}`, // Format as a percentage
  },
  {
    accessorKey: "stl",
    header: "Steals",
  },
  {
    accessorKey: "fga",
    header: "FGA",
  },
  {
    accessorKey: "fantasyPoints",
    header: "Fantasy Points",
  },
];