import HeadingSection from "../../Overview/components/HeadingSection";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SplitData {
  year: string;
  team: string;
  g: number;
  gs: number;
  mp: number;
  fg: number;
  fga: number;
  fgPercentage: number;
  threeP: number;
  threePa: number;
  threePPercentage: number;
  twoP: number;
  twoPa: number;
  twoPPercentage: number;
  efgPercentage: number;
  ft: number;
  fta: number;
  ftPercentage: number;
  orb: number;
  drb: number;
  trb: number;
  ast: number;
  stl: number;
  blk: number;
  tov: number;
  pf: number;
  pts: number;
}

const data: SplitData[] = [
  {
    year: "2023-24",
    team: "LAL",
    g: 71,
    gs: 35.3,
    mp: 25.7,
    fg: 9.6,
    fga: 17.9,
    fgPercentage: 54.0,
    threeP: 2.1,
    threePa: 5.1,
    threePPercentage: 41.0,
    twoP: 4.3,
    twoPa: 5.7,
    twoPPercentage: 75.0,
    efgPercentage: 0.9,
    ft: 6.4,
    fta: 7.3,
    ftPercentage: 8.3,
    orb: 3.5,
    drb: 1.3,
    trb: 0.5,
    ast: 1.1,
    stl: 48.8,
    blk: 27,
    tov: 5,
    pf: 3,
    pts: 1,
  },
  // Add more data entries here...
];

export function TraditionalSplitsTable() {
  return (
    <div>
      <HeadingSection className="ml-4" title="Traditonal Splits" />
      <Table className="bg-background-alt">
        <TableHeader>
          <TableRow>
            <TableHead>By Year</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>g</TableHead>
            <TableHead>gs</TableHead>
            <TableHead>mp</TableHead>
            <TableHead>fg</TableHead>
            <TableHead>fga</TableHead>
            <TableHead>fg%</TableHead>
            <TableHead>3p</TableHead>
            <TableHead>3pa</TableHead>
            <TableHead>3p%</TableHead>
            <TableHead>2p</TableHead>
            <TableHead>2pa</TableHead>
            <TableHead>2p%</TableHead>
            <TableHead>efg%</TableHead>
            <TableHead>ft</TableHead>
            <TableHead>fta</TableHead>
            <TableHead>ft%</TableHead>
            <TableHead>orb</TableHead>
            <TableHead>drb</TableHead>
            <TableHead>trb</TableHead>
            <TableHead>ast</TableHead>
            <TableHead>stl</TableHead>
            <TableHead>blk</TableHead>
            <TableHead>tov</TableHead>
            <TableHead>pf</TableHead>
            <TableHead>pts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell>{row.g}</TableCell>
              <TableCell>{row.gs}</TableCell>
              <TableCell>{row.mp}</TableCell>
              <TableCell>{row.fg}</TableCell>
              <TableCell>{row.fga}</TableCell>
              <TableCell>{row.fgPercentage}</TableCell>
              <TableCell>{row.threeP}</TableCell>
              <TableCell>{row.threePa}</TableCell>
              <TableCell>{row.threePPercentage}</TableCell>
              <TableCell>{row.twoP}</TableCell>
              <TableCell>{row.twoPa}</TableCell>
              <TableCell>{row.twoPPercentage}</TableCell>
              <TableCell>{row.efgPercentage}</TableCell>
              <TableCell>{row.ft}</TableCell>
              <TableCell>{row.fta}</TableCell>
              <TableCell>{row.ftPercentage}</TableCell>
              <TableCell>{row.orb}</TableCell>
              <TableCell>{row.drb}</TableCell>
              <TableCell>{row.trb}</TableCell>
              <TableCell>{row.ast}</TableCell>
              <TableCell>{row.stl}</TableCell>
              <TableCell>{row.blk}</TableCell>
              <TableCell>{row.tov}</TableCell>
              <TableCell>{row.pf}</TableCell>
              <TableCell>{row.pts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
