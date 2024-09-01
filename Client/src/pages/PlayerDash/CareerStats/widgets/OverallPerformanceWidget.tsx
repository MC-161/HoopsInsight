import React from 'react';
import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import RadarChart from "@/components/charts/Radar";
import { PlayerData } from "@/types/Dash/PlayerDash";
import { aggregateStats, findMinMax, normalize, MinMaxStats } from "@/pages/utils/aggregate";

interface OverallPerformanceProps {
  playerData: PlayerData;
}

const OverallPerformance: React.FC<OverallPerformanceProps> = ({ playerData }) => {
  const stats = aggregateStats(playerData.playerStats.stats);
  const minMax: MinMaxStats = findMinMax(playerData.playerStats.stats);

  const normalizedStats = {
    "PTS": normalize(stats.pts, minMax.pts.min, minMax.pts.max),
    "AST": normalize(stats.ast, minMax.ast.min, minMax.ast.max),
    "REB": normalize(stats.drb, minMax.drb.min, minMax.drb.max),
    "STL": normalize(stats.stl, minMax.stl.min, minMax.stl.max),
    "BLK": normalize(stats.blk, minMax.blk.min, minMax.blk.max),
    "FG%": normalize(stats.fg_pct, minMax.fg_pct.min, minMax.fg_pct.max),
    "3P%": normalize(stats.threeP_pct, minMax.threeP_pct.min, minMax.threeP_pct.max),
    "FT%": normalize(stats.ft_pct, minMax.ft_pct.min, minMax.ft_pct.max),
  };

  return (
    <WidgetWrapper className="h-72 shadow-sm shadow-white">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Player Performance" />
      <section className="Chart h-[90%] flex pt-4 justify-center p-2">
        <RadarChart OPStats={normalizedStats} />
      </section>
    </WidgetWrapper>
  );
};

export default OverallPerformance;
