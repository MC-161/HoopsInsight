import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import RadarChart from "@/components/charts/Radar";
import { PlayerData } from "@/types/Dash/PlayerDash";


interface OverallPerformanceProps {
  playerData: PlayerData
}


// Normalization function to scale values between 0 and 1
// Normalization function
function normalize(value: number, min: number, max: number): number {
  return ((value - min) / (max - min)) * 100;
}



const OverallPerformance:React.FC<OverallPerformanceProps> = ({playerData}) => {
  const currentYear = new Date().getFullYear();
  const stats = {
    "PTS": normalize(playerData.playerStats.stats[currentYear].pts, 0, 2500),
    "AST": normalize(playerData.playerStats.stats[currentYear].ast, 0, 1000),
    "REB": normalize(playerData.playerStats.stats[currentYear].drb, 0, 1000),
    "STL": normalize(playerData.playerStats.stats[currentYear].stl, 0, 200),
    "BLK": normalize(playerData.playerStats.stats[currentYear].blk, 0, 200),
    "FG%": normalize(playerData.playerStats.stats[currentYear].fg_pct, 0, 1),
    "3P%": normalize(playerData.playerStats.stats[currentYear]["3p_pct"], 0, 1),
    "FT%": normalize(playerData.playerStats.stats[currentYear].ft_pct, 0, 1),
  };
  return (
    <WidgetWrapper className="h-72 shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Player Performance"/>
      <section className="Chart h-[90%] flex pt-4 justify-center">
        <RadarChart OPStats={stats}/>
      </section>
    </WidgetWrapper>
  );
};

export default OverallPerformance;
