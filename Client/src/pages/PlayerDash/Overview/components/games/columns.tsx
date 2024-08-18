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
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "stl",
    header: "Steals",
  },
  {
    accessorKey: "fantasyPoints",
    header: "Fantasy Points",
  },
];