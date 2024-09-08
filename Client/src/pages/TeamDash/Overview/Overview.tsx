import { Grid } from "@mui/material";
import ToolsWidget from "@/pages/PlayerDash/Overview/widgets/ToolsWidget";
import { TeamData } from "@/types/Dash/TeamDash";
import TeamExInfo from "@/pages/TeamDash/Overview/widgets/TeamExInfo";  
import TopPlayersWidget from "./widgets/TopPlayers";
import VideosWidget from "./widgets/VideosWidget";
import ChartsWidget from "./widgets/ChartsWidget";
interface OverviewProps {
  teamData: TeamData;
}

const Overview: React.FC<OverviewProps> = ({ teamData }) => {
  return (
    <div className="flex justify-center pb-8">
      <Grid
        container
        columnSpacing={4}
        padding={4}
        className="gap-y-6 sm:gap-y-8 md:gap-y-4 lg:gap-y-4 max-w-screen-2xl"
      >
        <Grid item xs={12} md={2.6}>
          <TeamExInfo teamData={teamData} />
        </Grid>
        <Grid item xs={12} md={9.4}>
          <TopPlayersWidget teamData={teamData}/>
        </Grid>
        <Grid item xs={12} md={2.6}>
          <ToolsWidget />
        </Grid>
        <Grid item xs={12} md={9.4} className="grid grid-cols-1">
          <ChartsWidget teamData={teamData}/>
        </Grid>
        <Grid item xs={12} md={2.6}></Grid>
        <Grid item xs={12} md={9.4} className="">
          <VideosWidget teamVideos={teamData.teamVideos} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
