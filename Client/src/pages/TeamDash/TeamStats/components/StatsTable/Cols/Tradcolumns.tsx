import { ColumnDef } from "@tanstack/react-table";
import { SeasonStats } from "@/types/Dash/TeamDash";

export const Tradcolumns: ColumnDef<SeasonStats>[] = [
  {
    accessorKey: "year",
    header: "Year",
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
    accessorKey: "mov",
    header: "Margin of Victory",
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
    accessorKey: "drb_pct",
    header: "Defensive Rebound %",
    cell: (info) => `${info.getValue()}%`, // Format as a percentage
  },
];
