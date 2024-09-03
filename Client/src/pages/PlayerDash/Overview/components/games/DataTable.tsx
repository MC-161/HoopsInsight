import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  // Create table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Check if data is empty
  const isEmpty = data.length === 0;

  return (
    <div className="">
      {isEmpty ? (
        <div className="h-24 text-center text-gray-600">
          No results available.
        </div>
      ) : (
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                className="hover:bg-transparent bg-background-dashalt"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    className="text-primary-main text-center font-bold text-sm"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={
                    index % 2 === 0
                      ? "bg-background-alt"
                      : "bg-background-dashalt"
                  }
                >
                  {row.getVisibleCells().map((cell) => {
                    let cellStyle = "text-sm font-semibold text-center";
                    if (cell.column.id === "plusMinus") {
                      const plusMinusValue = cell.getValue() as string;
                      const plusMinusColor =
                        plusMinusValue[0] === "-"
                          ? "text-res-neg"
                          : "text-primary-green";
                      cellStyle += ` ${plusMinusColor}`;
                    } else if (
                      cell.column.id === "fgp" ||
                      cell.column.id === "tptfgp" ||
                      cell.column.id === "TOV"
                    ) {
                      const value = parseFloat(cell.getValue() as string);
                      const colorClass =
                        value > 70 ? "text-primary-green" : "text-res-neg";
                      cellStyle += ` ${colorClass}`;
                    }
                    return (
                      <TableCell
                        className={cellStyle}
                        key={cell.id}
                        onClick={() => console.log(cell.column.id)}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default DataTable;
