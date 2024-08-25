import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import ScoringAverages from "@/components/charts/StackedChart";
import EfficiencyContent from "../components/EfficiencyContent";
import DefensiveBarChart from "../components/DefensiveBarChart";
import LineChart from "../components/Trend";
import TurnoversReboundsChart from "../components/RT";
const ChartsWidget = () => {
  const labels = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7','G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7'];
  const dataPoints = [22, 28, 25, 32, 30, 35, 40,22, 28, 25, 32, 30, 35, 40]; // Example points for each game
  return (
    <WidgetWrapper className="h-full shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Player Performance"/>
      <section className="Chart h-[90%] grid grid-cols-1 lg:grid-cols-3 gap-2 pt-4 px-3 py-5">
        <div><ScoringAverages /></div>
        <div><EfficiencyContent/></div>
        <div><DefensiveBarChart/></div>
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="col-span-2"><LineChart labels={labels} dataPoints={dataPoints} /></div>
          <div className="col-span-2"><TurnoversReboundsChart/></div>
        </div>
      </section>
    </WidgetWrapper>
  );
};

export default ChartsWidget;
