import { Grid } from "@mui/material";
import ToolsWidget from "@/pages/PlayerDash/Overview/widgets/ToolsWidget";
import { TeamData, TeamRoster} from "@/types/Dash/TeamDash";
import TeamExInfo from "@/pages/TeamDash/Overview/widgets/TeamExInfo";  
import RosterWidget from "./widgets/RosterWidget";
import useTeamRoster from "@/hooks/useTeamRoster";
interface RosterProps {
  teamData: TeamData;
}

const Roster: React.FC<RosterProps> = ({ teamData }) => {
  const teamId = teamData._id
  const { data, isLoading, error} = useTeamRoster(teamId);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex justify-center pb-8">
      <Grid
        container
        columnSpacing={4}
        padding={4}
        className="gap-y-6 sm:gap-y-8 md:gap-y-4 lg:gap-y-1 max-w-screen-2xl"
      >
        <Grid item xs={12} md={2.6}>
          <div className="flex flex-col gap-4 md:gap-0">
            <TeamExInfo teamData={teamData} />
            <ToolsWidget />
          </div>
        </Grid>
        <Grid item xs={12} md={9.4}>
          <RosterWidget rosterData={data as TeamRoster} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Roster;
