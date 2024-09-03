import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import useTeamInfo from "@/hooks/useTeamInfo";
import { PlayerData } from "@/types/Dash/PlayerDash";

// useTeam Info to be used
interface PlayerTeamProps{
  playerData: PlayerData
}
const PlayerTeamWidget:React.FC<PlayerTeamProps>= ({playerData}) => {
  const stats = playerData.playerStats.stats[0]
  // Get all the years from the keys of the stats object
  const years = Object.keys(stats).map(year => Number(year));
  // Find the latest year
  const latestYear = Math.max(...years);
  const latestYearStr:string = latestYear.toString();
  const teamAbv = playerData.playerStats.stats[0][latestYearStr].tm
  const { data, error, isLoading } = useTeamInfo(teamAbv);
  
  const teamName = data?.name
  const teamImg = data?.logo
  const injury = playerData.playerImgBio.body.injury;
  const isInjured = injury && Object.values(injury).some(injuryItem => 
    injuryItem.injReturnDate === null || injuryItem.injReturnDate === ""
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <WidgetWrapper className="h-48 w-full shadow-sm shadow-zinc-50">
      <div className="curTeam text-xs h-32 bg-background-dashalt rounded-t-md flex flex-col items-center">
        <p className="curTeam_title p-2 text-base font-semibold rounded-md"> Current Team </p>
        <div className="playerTeam flex items-center gap-4 pt-2">
          <img className="pteam_img p-1 h-12 w-20 rounded-md bg-gradient-to-l from-blue-500  to-primary-gradient_purple shadow-md shadow-primary-gradient_purple" src={teamImg} alt="" />
          <p className="pteam_name text-sm text-wrap w-20">{teamName}</p>
        </div>
      </div>
      <div className="team_info flex justify-between px-5 py-1 text-sm">
        <div className="flex flex-col items-center">
          <p className="font-extralight p-1">Team ABV</p>
          <p className="teamAbv font-bold">{teamAbv}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-extralight p-1">Injured</p>
          <p className="pinjuries font-bold">
            {isInjured ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </WidgetWrapper>
  );
}
 
export default PlayerTeamWidget;