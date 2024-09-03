import PlayerTeamWidget from "@/pages/PlayerDash/Overview/widgets/PlayerTeamWidget";
import { Grid } from "@mui/material";
import ToolsWidget from "@/pages/PlayerDash/Overview/widgets/ToolsWidget";
import PlayerMatchWidget from "@/pages/PlayerDash/Matches/widgets/PlayerMatchWidget";
import { PlayerData, PlayerGameData } from "@/types/Dash/PlayerDash";

interface MatchesProps{
  playerData: PlayerData
  gameData: PlayerGameData
}

const Matches:React.FC<MatchesProps> = ({playerData, gameData}) => {
  return (
    <div className="flex justify-center pb-8">
      <Grid container columnSpacing={4} padding={2} className="gap-y-4 sm:gap-y-8 md:gap-y-4 lg:gap-y-1 max-w-screen-2xl">
        {/* Left Column */}
        <Grid item xs={12} md={2.6}>
          <div className="flex flex-col gap-9">
            <PlayerTeamWidget playerData={playerData}/>
            <ToolsWidget />
          </div>
        </Grid>
        <Grid item xs={12} md={9.4}>
          <PlayerMatchWidget playerData={playerData} gameData={gameData}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Matches;
