import { ColumnDef } from "@tanstack/react-table";
import { SeasonStats } from "@/types/Dash/TeamDash";

export const ArenaColumns: ColumnDef<SeasonStats>[] = [
  {
    accessorKey: "year",
    header: "Year",
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
