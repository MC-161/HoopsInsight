import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import LineChart from "@/pages/PlayerDash/SeasonStats/components/Trend";
import TurnoversReboundsChart from "@/pages/PlayerDash/SeasonStats/components/RT";
import { PlayerData} from "@/types/Dash/PlayerDash";

interface ChartsWidgetProps{
  playerData: PlayerData
}

const ChartsWidget:React.FC<ChartsWidgetProps> = ({playerData}) => {
  const stats = playerData.playerStats.stats[0]
  // Extract labels (game IDs) and data points (points scored) from dummyData
  const labels = Object.keys(stats).map((_) => `${_}`);
  const dataPoints = Object.values(stats).map(year => year.pts);

  const turnovers = Object.values(stats).map(year => year.tov);
  const reb = Object.values(stats).map(year => year.drb); 
  
  return (
    <WidgetWrapper className=" shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Player Performance"/>
      <section className="Chart h-[90%] grid grid-cols-1 lg:grid-cols-3 gap-2 pt-4 px-3 py-5">
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="col-span-2"><LineChart labels={labels} dataPoints={dataPoints} /></div>
          <div className="col-span-2"><TurnoversReboundsChart labels={labels} turnoversData={turnovers} reboundsData={reb}/></div>
        </div>
      </section>
    </WidgetWrapper>
  );
};

export default ChartsWidget;
