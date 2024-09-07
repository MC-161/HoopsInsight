import { TeamData } from "@/types/Dash/TeamDash";

// Utility function to get the latest year from teamData
const getLatestYear = (teamData: TeamData): string => {
  const stats = teamData.teamStats.stats[0];
  // Get all the years from the keys of the stats object
  const years = Object.keys(stats).map((year) => Number(year));
  // Find the latest year
  const latestYear = Math.max(...years);
  return latestYear.toString();
};

export default getLatestYear;
