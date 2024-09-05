import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import { TeamData } from "@/types/Dash/TeamDash";
import StadiumOutlinedIcon from '@mui/icons-material/StadiumOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
// useTeam Info to be used
interface PlayerTeamProps{
  teamData: TeamData
}
const TeamExInfo:React.FC<PlayerTeamProps>= ({teamData}) => {
  const stats = teamData.teamStats.stats[0]
  // Get all the years from the keys of the stats object
  const years = Object.keys(stats).map(year => Number(year));
  // Find the latest year
  const latestYear = Math.max(...years);
  const latestYearStr:string = latestYear.toString();
  const arena = stats[latestYearStr].arena 
  const conference = teamData.teamInfo.conference

  return (
    <WidgetWrapper className="h-48 w-full shadow-sm shadow-zinc-50 md:mb-4">
      <div className="curTeam h-24 bg-background-dashalt rounded-t-md flex flex-col items-center gap-2">
        <section className="title flex items-center gap-2 p-2">
          <ExploreOutlinedIcon/>
          <p className="font-bold">Conference</p>
        </section>
        <p className="res">{conference}</p>
      </div>
      <div className="team_info flex flex-col  items-center justify-center gap-2">
        <section className="title flex items-center gap-2 p-2">
          <StadiumOutlinedIcon />
          <p className="font-bold">Arena</p>
        </section>
        <p className="res">{arena}</p>
      </div>
    </WidgetWrapper>
  );
}
 
export default TeamExInfo;