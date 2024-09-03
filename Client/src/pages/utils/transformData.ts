import { PlayerData, YearlyStats, } from '@/types/Dash/PlayerDash';

export function transformData(playerData: PlayerData): PlayerData {
  const { playerStats, playerImgBio } = playerData;

  // Initialize transformed stats object
  const transformedStats: Record<number, YearlyStats> = { ...playerStats.stats };

  // Process each yearly stat
  for (const year in playerStats.stats) {
    const stats = playerStats.stats[year];
    transformedStats[year] = {
      ...stats
    };
  }


  // Update playerData with transformed stats
  playerData.playerStats.stats = transformedStats;

  return playerData;
}