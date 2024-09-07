import { ColumnDef } from "@tanstack/react-table";
import { SeasonStats } from "@/types/Dash/TeamDash";

export const Shootingcolumns: ColumnDef<SeasonStats>[] = [
  {
    accessorKey: "year",
    header: "Year",
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
];
