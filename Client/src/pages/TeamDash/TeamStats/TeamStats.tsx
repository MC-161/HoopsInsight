import { Grid } from "@mui/material";
import ToolsWidget from "@/pages/PlayerDash/Overview/widgets/ToolsWidget";
import { TeamData } from "@/types/Dash/TeamDash";
import TeamExInfo from "@/pages/TeamDash/Overview/widgets/TeamExInfo";  
import TraditionalSplitsTable from "./widgets/TraditionalSplitTable";
import Shooting_EfficiencyTable from "./widgets/Shooting_Efficiency";
import Ratings from "./widgets/Ratings";
interface TeamStatsProps {
  teamData: TeamData;
}

const TeamStats: React.FC<TeamStatsProps> = ({ teamData }) => {
  return (
    <div className="flex justify-center pb-8">
      <Grid
        container
        columnSpacing={4}
        padding={4}
        className="gap-y- sm:gap-y-8 md:gap-y-4 lg:gap-y-1 max-w-screen-2xl"
      >
        <Grid item xs={12} md={2.6}>
          <div className="flex flex-col gap-4 md:gap-0">
            <TeamExInfo teamData={teamData} />
            <ToolsWidget />
          </div>
        </Grid>
        <Grid item xs={12} md={9.4}>
          <div className="flex flex-col gap-8">
            <TraditionalSplitsTable data={teamData}/>
            <Shooting_EfficiencyTable data={teamData}/>
            <Ratings data={teamData}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TeamStats;
