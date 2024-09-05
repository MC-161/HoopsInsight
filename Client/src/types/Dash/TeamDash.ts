export interface TeamVideos {
  _id: string;
  videos: Array<{ [key: string]: string }>;
}

export interface TeamData{
  _id: string;
  teamInfo: TeamInfo;
  teamVideos: TeamVideos;
  topPerformers: TeamTopPerformers
  teamStats: TeamStats;
};

export interface TeamInfo{
  _id: string;
  name: string;
  logo: string;
  conference: string;
}

export interface TeamStats {
  _id: string;
  stats: Array<{ [year: string]: SeasonStats }>;
}

interface SeasonStats {
  year: number;
  age: number;
  w: number;
  l: number;
  pw: number;
  pl: number;
  mov: number;
  sos: number;
  srs: number;
  ortg: number;
  drtg: number;
  nrtg: number;
  pace: number;
  ftr: number;
  "3par": number;
  ts_pct: number;
  efg_pct: number;
  tov_pct: number;
  orb_pct: number;
  ft_fga: number;
  efg_pct_opponent: number;
  tov_pct_opponent: number;
  drb_pct: number;
  ft_fga_opponent: number;
  arena: string;
  attend: number;
  attend_per_game: number;
}


export interface TeamTopPerformers {
  _id: string;
  topPerformers: Array<StatLeaders>;
}

interface StatLeaders {
  blk: StatDetail;
  ast: StatDetail;
  tptfgm: StatDetail;
  stl: StatDetail;
  TOV: StatDetail;
  pts: StatDetail;
  reb: StatDetail;
}

export interface StatDetail {
  total: string;
  playerID: string[];
}

export interface TotalStats {
  totalPoints: number;
  totalAssists: number;
  totalRebounds: number;
  totalFieldGoals: number;
  totalThreePointers: number;
  totalFreeThrows: number;
  totalSteals: number;
  totalBlocks: number;
}

export function getTotalStats(teamData: TeamData): TotalStats {
  const totals: TotalStats = {
    totalPoints: 0,
    totalAssists: 0,
    totalRebounds: 0,
    totalFieldGoals: 0,
    totalThreePointers: 0,
    totalFreeThrows: 0,
    totalSteals: 0,
    totalBlocks: 0,
  };

  teamData.teamStats.stats.forEach(yearlyStatsObject => {
    // Iterate through each year's statistics
    Object.values(yearlyStatsObject).forEach(yearlyStats => {
      totals.totalPoints += yearlyStats.ts_pct * yearlyStats.pace * (yearlyStats.w + yearlyStats.l); 
      totals.totalAssists += yearlyStats.pace * 0.5;
      totals.totalRebounds += yearlyStats.orb_pct * 0.5;
      totals.totalFieldGoals += yearlyStats.ftr * 100;
      totals.totalThreePointers += yearlyStats["3par"] * 100;
      totals.totalFreeThrows += yearlyStats.ftr * 100;
      totals.totalSteals += yearlyStats.drb_pct * 0.5;
    });
  });

  return totals;
}
