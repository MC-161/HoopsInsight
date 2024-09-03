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
  const stats = playerData.playerStats.stats[0];

  // Get all the years from the keys of the stats object
  const years = Object.keys(stats).map(year => Number(year));
  // Find the latest year
  const latestYear = Math.max(...years);
  const latestYearStr:string = latestYear.toString();
  const data = {
    "PTS": normalize(stats[latestYearStr].pts, 0, 2500),
    "AST": normalize(stats[latestYearStr].ast, 0, 1000),
    "REB": normalize(stats[latestYearStr].drb, 0, 1000),
    "STL": normalize(stats[latestYearStr].stl, 0, 200),
    "BLK": normalize(stats[latestYearStr].blk, 0, 200),
    "FG%": normalize(stats[latestYearStr].fg_pct, 0, 1),
    "3P%": normalize(stats[latestYearStr]["3p_pct"], 0, 1),
    "FT%": normalize(stats[latestYearStr].ft_pct, 0, 1),
  };
  return (
    <WidgetWrapper className="h-72 shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Player Performance"/>
      <section className="Chart h-[90%] flex pt-4 justify-center">
        <RadarChart OPStats={data}/>
      </section>
    </WidgetWrapper>
  );
};

export default OverallPerformance;
