import React from "react";
import { Grid } from "@mui/material";
import PlayerTeamWidget from "@/pages/PlayerDash/Overview/widgets/PlayerTeamWidget";
import ToolsWidget from "@/pages/PlayerDash/Overview/widgets/ToolsWidget";
import KeyMetrics from "@/pages/PlayerDash/SeasonStats/widgets/KeyMetricsWidget";
import OverallPerformance from "@/pages/PlayerDash/CareerStats/widgets/OverallPerformanceWidget";
import ChartsWidget from "@/pages/PlayerDash/CareerStats/widgets/ChartsWidget";
import Breakdown from "@/pages/PlayerDash/CareerStats/widgets/Breakdown";
import { TraditionalSplitsTable } from "./widgets/OverallTable";
const Career: React.FC = () => {
  return (
    <div className="flex justify-center pb-8">
      <Grid
        container
        columnSpacing={4}
        padding={2}
        className="gap-y-4 sm:gap-y-8 md:gap-y-4 lg:gap-y-1 max-w-screen-2xl"
      >
        {/* Left Column */}
        <Grid item xs={12} md={2.6 as any}>
          <PlayerTeamWidget />
        </Grid>
        <Grid item xs={12} md={5}>
          <KeyMetrics />
        </Grid>
        <Grid item xs={12} md={2.3 as any}>
          <Breakdown />
        </Grid>
        <Grid item xs={12} md={2.1 as any}>
          <OverallPerformance />
        </Grid>
        <Grid
          item
          xs={12}
          md={2.6 as any}
          sx={{
            marginTop: {
              xs: 0, // No margin on small screens (xs)
              md: -8, // Apply -8 margin on medium screens and up
            },
          }}
        >
          <ToolsWidget />
        </Grid>
        <Grid item xs={12} md={9.4 as any} sx={{ paddingTop: 3 }}>
          <div className="flex flex-col gap-8">
            <ChartsWidget />
            <TraditionalSplitsTable />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Career;
