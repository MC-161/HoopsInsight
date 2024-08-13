import PlayerTeamWidget from "@/pages/PlayerDash/widgets/PlayerTeamWidget";
import PlayerBioWidget from "@/pages/PlayerDash/widgets/PlayerBioWidget";
import { Grid } from "@mui/material";
import ToolsWidget from "@/pages/PlayerDash/widgets/ToolsWidget";
import PlayerMatchWidget from "@/pages/PlayerDash/widgets//PlayerMatchWidget";
import NewsCard from "@/pages/PlayerDash/widgets//NewsCard";

const Overview = () => {
  return (
      <Grid container columnSpacing={4} padding={2} className="gap-y-4 sm:gap-y-8 md:gap-y-0">
        {/* Left Column */}
        <Grid item xs={12} md={2.6}>
          <PlayerTeamWidget />
        </Grid>
        <Grid item xs={12} md={4.7}>
          <PlayerBioWidget />
        </Grid>
        <Grid item xs={12} md={4.7}>
          <PlayerBioWidget />
        </Grid>
        <Grid item xs={12} md={2.6}>
          <ToolsWidget />
        </Grid>
        <Grid item xs={12} md={9.4} paddingTop={3}>
          <PlayerMatchWidget />
        </Grid>
        <Grid item xs={12} md={2.6} paddingTop={3}>
        </Grid>
        <Grid item xs={12} md={9.4} paddingTop={3}>
          <div className=" w-full flex gap-10 pt-5">
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
          </div>
        </Grid>
      </Grid>
  );
};

export default Overview;
