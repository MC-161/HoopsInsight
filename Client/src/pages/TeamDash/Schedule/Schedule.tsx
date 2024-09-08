import { Grid } from "@mui/material";
import ToolsWidget from "@/pages/PlayerDash/Overview/widgets/ToolsWidget";
import { ScheduleResponse, TeamData} from "@/types/Dash/TeamDash";
import TeamExInfo from "@/pages/TeamDash/Overview/widgets/TeamExInfo";  
import Schedule from "./widgets/ScheduleWidget";
interface RosterProps {
  teamData: TeamData;
}

const Roster: React.FC<RosterProps> = ({ teamData }) => {
  const teamId = teamData._id
  // Sample data
  const schedule: ScheduleResponse = {
    team: "DAL",
    teamID: "7",
    schedule: [
      {
        gameID: "20241024_SA@DAL",
        seasonType: "Regular Season",
        away: "SA",
        gameTime: "7:30 PM",
        teamIDHome: "7",
        gameDate: "2024-10-24",
        gameStatus: "Scheduled",
        gameTime_epoch: "1729812600.0",
        teamIDAway: "27",
        isTournamentGame: "False",
        neutralSite: "False",
        home: "DAL",
        gameStatusCode: "0"
      },
      // Add other games as needed
    ]
  };
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
          <Schedule schedule={schedule}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Roster;
