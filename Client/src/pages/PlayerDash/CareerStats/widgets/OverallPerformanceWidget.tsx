import React from 'react';
import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import RadarChart from "@/components/charts/Radar";
import { getTotalStats, PlayerData, getMinMaxStats } from "@/types/Dash/PlayerDash";
import {normalize} from "@/pages/utils/aggregate";

interface OverallPerformanceProps {
  playerData: PlayerData;
}

const OverallPerformance: React.FC<OverallPerformanceProps> = ({ playerData }) => {
  const stats = getTotalStats(playerData.playerStats);
  const minMax = getMinMaxStats();
  const normalizedStats = {
    "PTS": normalize(stats.totalPoints, minMax.minPoints, minMax.maxPoints),
    "AST": normalize(stats.totalAssists, minMax.minAssists, minMax.maxAssists),
    "REB": normalize(stats.totalRebounds, minMax.minRebounds, minMax.maxRebounds),
    "STL": normalize(stats.totalThreePointers, minMax.minSteals, minMax.maxSteals),
    "BLK": normalize(stats.totalBlocks, minMax.minBlocks, minMax.maxBlocks),
    "FG%": normalize(stats.totalFieldGoals, minMax.minFieldGoals, minMax.maxFieldGoals),
    "3P%": normalize(stats.totalThreePointers, minMax.minThreePointers, minMax.maxThreePointers),
    "FT%": normalize(stats.totalFreeThrows, minMax.minFreeThrows, minMax.maxFreeThrows),
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
