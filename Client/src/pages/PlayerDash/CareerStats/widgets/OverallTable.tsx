import { PlayerData } from "@/types/Dash/PlayerDash";
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

interface TraditonalSplitsProps{
  playerData: PlayerData
}



const TraditionalSplitsTable:React.FC<TraditonalSplitsProps> = ({playerData})  => {
  const statsArray = Object.values(playerData.playerStats.stats);
  return (
    <div>
      <HeadingSection className="ml-4" title="Traditonal Splits" />
      <Table className="bg-background-alt">
        <TableHeader>
          <TableRow>
            <TableHead >By Year End</TableHead>
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
          {statsArray.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.tm}</TableCell>
              <TableCell>{row.g}</TableCell>
              <TableCell>{row.gs}</TableCell>
              <TableCell>{row.mp}</TableCell>
              <TableCell>{row.fg}</TableCell>
              <TableCell>{row.fga}</TableCell>
              <TableCell>{row.fg_pct}</TableCell>
              <TableCell>{row["3p"]}</TableCell>
              <TableCell>{row["3pa"]}</TableCell>
              <TableCell>{row["3p_pct"]}</TableCell>
              <TableCell>{row["2p"]}</TableCell>
              <TableCell>{row["2pa"]}</TableCell>
              <TableCell>{row["2p_pct"]}</TableCell>
              <TableCell>{row.efg_pct}</TableCell>
              <TableCell>{row.ft}</TableCell>
              <TableCell>{row.fta}</TableCell>
              <TableCell>{row.fg_pct}</TableCell>
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

export default TraditionalSplitsTable
