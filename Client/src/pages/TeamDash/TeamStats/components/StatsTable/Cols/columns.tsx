import { ColumnDef } from "@tanstack/react-table";
import { SeasonStats } from "@/types/Dash/TeamDash";

export const columns: ColumnDef<SeasonStats>[] = [
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "w",
    header: "Wins",
  },
  {
    accessorKey: "l",
    header: "Losses",
  },
  {
    accessorKey: "pw",
    header: "Projected Wins",
  },
  {
    accessorKey: "pl",
    header: "Projected Losses",
  },
  {
    accessorKey: "mov",
    header: "Margin of Victory",
  },
  {
    accessorKey: "sos",
    header: "Strength of Schedule",
  },
  {
    accessorKey: "srs",
    header: "Simple Rating System",
  },
  {
    accessorKey: "ortg",
    header: "Offensive Rating",
  },
  {
    accessorKey: "drtg",
    header: "Defensive Rating",
  },
  {
    accessorKey: "nrtg",
    header: "Net Rating",
  },
  {
    accessorKey: "pace",
    header: "Pace",
  },
  {
    accessorKey: "ftr",
    header: "Free Throw Rate",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "3par",
    header: "3-Point Attempt Rate",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "ts_pct",
    header: "True Shooting %",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "efg_pct",
    header: "Effective FG %",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "tov_pct",
    header: "Turnover %",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "orb_pct",
    header: "Offensive Rebound %",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "ft_fga",
    header: "FT/FGA",
  },
  {
    accessorKey: "efg_pct_opponent",
    header: "Opponent eFG%",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "tov_pct_opponent",
    header: "Opponent TOV%",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "drb_pct",
    header: "Defensive Rebound %",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
  {
    accessorKey: "ft_fga_opponent",
    header: "Opponent FT/FGA",
  },
  {
    accessorKey: "arena",
    header: "Arena",
  },
  {
    accessorKey: "attend",
    header: "Total Attendance",
  },
  {
    accessorKey: "attend_per_game",
    header: "Attendance per Game",
  },
];
