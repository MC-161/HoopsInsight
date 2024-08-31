import PlayerTeamWidget from "@/pages/PlayerDash/Overview/widgets/PlayerTeamWidget";
import PlayerBioWidget from "@/pages/PlayerDash/Overview/widgets/PlayerBioWidget";
import { Grid } from "@mui/material";
import ToolsWidget from "@/pages/PlayerDash/Overview/widgets/ToolsWidget";
import PlayerMatchWidget from "@/pages/PlayerDash/Overview/widgets/PlayerMatchWidget";
import NewsCard from "@/pages/PlayerDash/Overview/widgets/NewsCard";
import PlayerExtra from "@/pages/PlayerDash/Overview/widgets/PlayerExtra";

interface OverviewProps {
  changeTabToMatches: () => void;
  playerData: any;
}

const Overview: React.FC<OverviewProps> = ({ changeTabToMatches, playerData }) => {
  return (
    <div className="flex justify-center pb-8">
      <Grid container columnSpacing={4} padding={2} className="gap-y-4 sm:gap-y-8 md:gap-y-4 lg:gap-y-1 max-w-screen-2xl">
        {/* Left Column */}
        <Grid item xs={12} md={2.6}>
          <PlayerTeamWidget playerData={playerData}/>
        </Grid>
        <Grid item xs={12} md={4.7}>
          <PlayerBioWidget playerData={playerData} />
        </Grid>
        <Grid item xs={12} md={4.7}>
          <PlayerExtra playerData={playerData}/>
        </Grid>
        <Grid item xs={12} md={2.6}>
          <ToolsWidget />
        </Grid>
        <Grid item xs={12} md={9.4} paddingTop={3}>
          <PlayerMatchWidget changeTabToMatches={changeTabToMatches} playerData={playerData} />
        </Grid>
        <Grid item xs={12} md={2.6} paddingTop={3}>
        </Grid>
        <Grid item xs={12} md={9.4}>
          <p className="lg:pt-2 text-lg font-bold">News</p>
          <div className="w-full  grid grid-cols-2 gap-6 lg:grid-cols-4 lg:mt-4">
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
