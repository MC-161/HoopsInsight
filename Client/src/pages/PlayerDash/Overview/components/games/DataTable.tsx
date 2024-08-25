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
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="">
      <Table className="">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className="hover:bg-transparent bg-background-dashalt"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                return (
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
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => {
              return (
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
                    if (cell.column.id == "plusMinus") {
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
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;

// <TableRow className="hover:bg-transparent bg-background-dashalt">
// <TableHead className="text-left text-primary-main font-bold text-xs uppercase">Match Up</TableHead>
// <TableHead className="text-primary-main text-center font-bold text-xs uppercase">MINS</TableHead>
// <TableHead className="text-primary-main text-center font-bold text-xs uppercase">Plus Minus</TableHead>
// <TableHead className="text-primary-main text-center font-bold text-xs uppercase">PTS</TableHead>
// <TableHead className="text-primary-main text-center font-bold text-xs uppercase">AST</TableHead>
// <TableHead className="text-primary-main text-center font-bold text-xs uppercase">REB</TableHead>
// <TableHead className="text-primary-main text-center font-bold text-xs uppercase">FPG</TableHead>
// <TableHead className="text-primary-main text-center font-bold text-xs uppercase">TPP</TableHead>
// <TableHead className="text-primary-main text-center font-bold text-xs uppercase">TOV</TableHead>
// <TableHead className="text-primary-main text-center font-bold text-xs uppercase">Steals</TableHead>
// <TableHead className="text-primary-main text-center font-bold text-xs uppercase">Fantasy Points</TableHead>
// </TableRow>

// {data.map((game, index) => {
//   const [team1, team2] = getTeamsFromGameID(game.gameID);
//   const plusMinusColor = game.plusMinus[0] == '-' ? 'text-res-neg' : 'text-primary-green';
//   return (
//     <TableRow key={game.gameID} className={index % 2 === 0 ? "bg-background-alt" : "bg-background-dashalt"}>
//       <TableCell className="font-semibold text-center Matchup">
//         {`${team1} vs ${team2}`}
//       </TableCell>
//       <TableCell className="font-semibold text-center Mins">
//         {game.mins}
//       </TableCell>
//       <TableCell className={`font-semibold text-center plusMinus ${plusMinusColor}`}>
//         {game.plusMinus}
//       </TableCell>
//       <TableCell className={`text-center font-semibold points`}>
//         {game.pts}
//       </TableCell>
//       <TableCell className={`text-center font-semibold assists`}>
//         {game.ast}
//       </TableCell>
//       <TableCell className={`text-center font-semibold rebounds`}>
//         {game.reb}
//       </TableCell>
//       <TableCell className={`text-center font-semibold fpg`}>
//         {`${game.fgp}%`}
//       </TableCell>
//       <TableCell className={`text-center font-semibold tpp`}>
//         {`${game.tptfgp}%`}
//       </TableCell>
//       <TableCell className={`text-center font-semibold tov`}>
//         {`${game.TOV}%`}
//       </TableCell>
//       <TableCell className={`text-center font-semibold stls`}>
//         {`${game.stl}`}
//       </TableCell>
//       <TableCell className={`text-center font-semibold fantsp`}>
//         {`${game.fantasyPoints}`}
//       </TableCell>
//     </TableRow>
//   )
// })}
