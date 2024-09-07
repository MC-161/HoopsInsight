import { TeamData } from "@/types/Dash/TeamDash";
import DualLineChart from "../components/DualLineChart";

interface OffensiveDefensiveProps{
  teamData: TeamData
}

const OffensiveDefensive:React.FC<OffensiveDefensiveProps> = ({teamData}) => {
  const stats = teamData.teamStats.stats[0]
  const labels = Object.keys(stats)
  const ofrtg = labels.map(year => stats[year].ortg)
  const drtg = labels.map(year => stats[year].drtg)
  return (
    <div>
      <DualLineChart labels={labels} Data1={ofrtg} Data2={drtg}/>
    </div>
  );
}
 
export default OffensiveDefensive;