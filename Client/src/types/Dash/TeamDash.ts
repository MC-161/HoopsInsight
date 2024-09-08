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


export interface TeamTableData {
  [year: string]: SeasonStats;
}
export interface SeasonStats {
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

export interface PlayerStats {
  blk: string;
  fga: string;
  DefReb: string;
  ast: string;
  ftp: string;
  tptfgp: string;
  tptfgm: string;
  trueShootingPercentage: string;
  stl: string;
  fgm: string;
  pts: string;
  reb: string;
  fgp: string;
  effectiveShootingPercentage: string;
  fta: string;
  mins: string;
  gamesPlayed: string;
  TOV: string;
  tptfga: string;
  OffReb: string;
  ftm: string;
}

export interface Injury {
  description: string;
  injDate: string;
  designation: string;
}

export interface Player {
  college: string;
  fantasyProsLink: string;
  jerseyNum: string;
  bRefID: string;
  espnName: string;
  yahooLink: string;
  sleeperBotID: string;
  fantasyProsPlayerID: string;
  nbaComLink: string;
  nbaComHeadshot: string;
  lastGamePlayed: string;
  espnLink: string;
  yahooPlayerID: string;
  pos: string;
  teamID: string;
  injury: Injury;
  nbaComName: string;
  rotoWirePlayerIDFull: string;
  rotoWirePlayerID: string;
  exp: string;
  height: string;
  nbaComID: string;
  espnHeadshot: string;
  espnID: string;
  weight: string;
  team: string;
  bRefName: string;
  espnShortName: string;
  bDay: string;
  shortName: string;
  longName: string;
  playerID: string;
  stats: PlayerStats;
}

export interface TeamRoster {
  statusCode: number;
  body: {
    team: string;
    teamID: string;
    roster: Player[];
  };
}


// types.ts
export interface ScheduleResponse {
  statusCode: number;
  body: TeamSchedule;
}

interface TeamSchedule {
  team: string;
  teamID: string;
  schedule: Game[];
}

interface Game {
  gameID: string;
  seasonType: string;
  away: string;
  gameTime: string;
  gameDate: string;
  gameStatus: string;
  neutralSite: string;
  isTournamentGame: string;
  home: string;
  teamIDHome: string;
  teamIDAway: string;
  gameStatusCode: string;
}


