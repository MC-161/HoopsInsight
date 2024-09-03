import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import DoughnutChart from "../components/doughnut";
import { getTotalStats, PlayerData } from "@/types/Dash/PlayerDash";
interface BreakdownProps {
  playerData: PlayerData
}

const Breakdown:React.FC<BreakdownProps> = ({playerData}) => {
  const totals = getTotalStats(playerData.playerStats)
  const pts = totals.totalPoints
  const ast = totals.totalAssists
  const reb = totals.totalRebounds
  const fg = totals.totalFieldGoals
  const threep = totals.totalThreePointers
  const ft = totals.totalFreeThrows
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
