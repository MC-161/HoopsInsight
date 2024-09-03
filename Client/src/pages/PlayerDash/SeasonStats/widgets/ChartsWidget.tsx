import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import ScoringAverages from "@/components/charts/StackedChart";
import EfficiencyContent from "../components/EfficiencyContent";
import DefensiveBarChart from "../components/DefensiveBarChart";
import LineChart from "../components/Trend";
import TurnoversReboundsChart from "../components/RT";
import { PlayerGameData } from "@/types/Dash/PlayerDash";
import { calculatePlayerMetrics } from "@/pages/utils/calculateMetrics";

interface ChartsWidgetProps{
  gameData: PlayerGameData
}

const ChartsWidget:React.FC<ChartsWidgetProps> = ({gameData}) => {
  const isEmpty = Object.keys(gameData).length === 0
  // Extract labels (game IDs) and data points (points scored) from dummyData
  const labels = Object.keys(gameData).map((_, index) => `G${index + 1}`);
  const dataPoints = Object.values(gameData).map(game => parseInt(game.pts, 10));

  const metrics = calculatePlayerMetrics(gameData)
  const efficiency = {
    playerEF: metrics.playerEfficiencyRating,
    efg: metrics.eFGPercentage,
    trueShoot: metrics.trueShootingPercentage
  }

  const DefensivedataPoints = Object.values(gameData).map(game => parseInt(game.reb, 10));
  const turnOverdataPoints = Object.values(gameData).map(game => parseInt(game.TOV, 10));

  const scoringAverages = Object.keys(gameData).map((gameID) => {
    const gameDataa = gameData[gameID];
    const pts = parseFloat(gameDataa.pts);
    const fga = parseFloat(gameDataa.fga);
    return fga !== 0 ? (pts / fga).toFixed(2) : "0.00";
  });


  return (
    <WidgetWrapper className="h-full shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Player Analysis"/>
      {!isEmpty ? <section className="Chart h-[90%] grid grid-cols-1 lg:grid-cols-3 gap-2 pt-4 px-3 py-5">
        <div><ScoringAverages labels={labels} dataPoints={scoringAverages} /></div>
        <div><EfficiencyContent efficiency={efficiency}/></div>
        <div><DefensiveBarChart labels={labels} turnoversData={turnOverdataPoints} reboundsData={DefensivedataPoints}/></div>
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="col-span-2"><LineChart labels={labels} dataPoints={dataPoints} /></div>
          <div className="col-span-2"><TurnoversReboundsChart turnoversData={turnOverdataPoints} reboundsData={DefensivedataPoints} labels={labels}/></div>
        </div>
      </section> : <div className="w-full h-96 flex items-center justify-center text-primary-alt">Sorry No Game Data</div>}
    </WidgetWrapper>
  );
};

export default ChartsWidget;
