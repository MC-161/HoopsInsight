import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  PaginationState,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { motion } from "framer-motion";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TooltipInfoCard from "./ToolTipInfo";
import { StatName } from "@/pages/utils/statDescriptions";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / pagination.pageSize),
    state: {
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), // Enable sorting
  });

  const handleRowClick = (rowId: string) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  // Check if data is empty
  const isEmptyData = !data || data.length === 0;

  return (
    <div className="min-h-[350px] bg-background-alt rounded-lg shadow-lg">
      <Table className="min-h-[350px]">
        {!isEmptyData ? (
          <>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  className="hover:bg-gray-800 bg-gray-900 text-white"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => (
                    <TooltipProvider key={header.id}>
                      <TableHead
                        className="text-primary-main text-center font-semibold text-xs cursor-pointer bg-background-alt border border-gray-700 rounded-md py-2"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <Tooltip>
                          <div className="flex items-center justify-center gap-1">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            <TooltipTrigger>
                              <InfoOutlinedIcon sx={{ fontSize: "12px", color: "#888" }} />
                              <TooltipContent>
                                <TooltipInfoCard statName={header.id as StatName} />
                              </TooltipContent>
                              {{
                                asc: <ExpandMoreIcon />,
                                desc: <ExpandLessIcon />,
                              }[header.column.getIsSorted() as string] ?? null}
                            </TooltipTrigger>
                          </div>
                        </Tooltip>
                      </TableHead>
                    </TooltipProvider>
                  ))}
                  {/* Extra header cell for the expansion icon */}
                  <TableHead className="text-center text-xs bg-gray-800 border border-gray-700 rounded-md py-2"></TableHead>
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <React.Fragment key={row.id}>
                    <TableRow
                      key={row.id}
                      className={`${
                        index % 2 === 0
                          ? "bg-background-dashalt"
                          : "bg-background-alt"
                      } text-white rounded-lg hover:shadow-md hover:bg-gray-700 transition duration-150`}
                      onClick={() => handleRowClick(row.id)}
                    >
                      {row.getVisibleCells().map((cell) => {
                        let cellStyle = "text-xs font-medium text-center p-2 border border-gray-700 rounded-md";

                        if (cell.column.id === "plusMinus") {
                          const plusMinusValue = cell.getValue() as string;
                          const plusMinusColor =
                            plusMinusValue[0] === "-"
                              ? "text-red-500"
                              : "text-green-500";
                          cellStyle += ` ${plusMinusColor}`;
                        } else if (
                          cell.column.id === "fgp" ||
                          cell.column.id === "tptfgp"
                        ) {
                          const value = parseFloat(cell.getValue() as string);
                          const colorClass =
                            value > 70 ? "text-green-500" : "text-red-500";
                          cellStyle += ` ${colorClass}`;
                        } else if (cell.column.id === "fantasyPoints") {
                          const value = parseFloat(cell.getValue() as string);
                          const colorClass =
                            value > 20 ? "text-green-500" : "text-red-500";
                          cellStyle += ` ${colorClass}`;
                        }

                        return (
                          <TableCell className={cellStyle} key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        );
                      })}
                      <TableCell className="text-center text-xs p-2">
                        <span className="cursor-pointer">
                          {expandedRow === row.id ? <ExpandLess /> : <ExpandMore />}
                        </span>
                      </TableCell>
                    </TableRow>
                    {expandedRow === row.id && (
                      <motion.tr
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 2 }}
                      >
                        <TableCell
                          className={`${
                            index % 2 === 1
                              ? "bg-gray-800"
                              : "bg-gray-900"
                          } col-span-${columns.length + 1} p-4 text-white`}
                          colSpan={columns.length + 1}
                        >
                          <Collapsible open={true}>
                            <CollapsibleContent className="">
                              {/* Expanded content here */}
                            </CollapsibleContent>
                          </Collapsible>
                        </TableCell>
                      </motion.tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + 1}
                    className="h-24 text-center text-white"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={columns.length + 1}
                className="h-24 text-center text-white"
              >
                Sorry, no game data available.
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>

      {/* Pagination Controls */}
      {!isEmptyData && (
        <div className="pagination-controls mt-1 flex justify-between items-center px-6 pb-2 text-white">
          <Button
            className="p-2 bg-gray-700 hover:bg-gray-600 border-2 border-gray-500 text-xs rounded-md"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <div className="text-xs">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <Button
            className="p-2 bg-gray-700 hover:bg-gray-600 border-2 border-gray-500 text-xs rounded-md"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
          <select
            className="ml-2 p-2 bg-gray-800 border-2 border-gray-500 text-xs rounded-md"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default DataTable;
