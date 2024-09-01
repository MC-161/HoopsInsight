import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import DoughnutChart from "../components/doughnut";
import { PlayerData } from "@/types/Dash/PlayerDash";
import { aggregateStats } from "@/pages/utils/aggregate";

interface BreakdownProps {
  playerData: PlayerData
}

const Breakdown:React.FC<BreakdownProps> = ({playerData}) => {
  const stats = aggregateStats(playerData.playerStats.stats);
  const pts = stats.pts
  const ast = stats.ast
  const reb = stats.drb
  const fg = stats.fg_pct
  const threep = stats.threeP_pct
  const ft = stats.ft_pct
  return (
    <WidgetWrapper className="h-72 shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Breakdown"/>
      <section className="Chart h-[90%] flex pt-4 justify-center">
        <DoughnutChart pts={pts} ast={ast} reb={reb} fg={fg} threep={threep} ft={ft} />
      </section>
    </WidgetWrapper>
  );
};

export default Breakdown;
