import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import DoughnutChart from "./doughnut";
import {TeamData} from "@/types/Dash/TeamDash";
import getLatestYear from "@/pages/utils/getLatestYear";
interface BreakdownProps {
  teamData: TeamData
}

const Breakdown:React.FC<BreakdownProps> = ({teamData}) => {
  const latestYr = getLatestYear(teamData)
  const attendance = teamData.teamStats.stats[0][latestYr].attend_per_game
  const capacity = 16888
  return (
    <WidgetWrapper className="h-52 shadow-sm shadow-white ">
      <HeadingSection className="text-sm" icon={ContactEmergencyOutlinedIcon} title="Arena Attendance"/>
      <section className="Chart h-[90%] flex pt-4 justify-center">
        <DoughnutChart attendance={attendance} capacity={capacity}/>
      </section>
    </WidgetWrapper>
  );
};

export default Breakdown;
