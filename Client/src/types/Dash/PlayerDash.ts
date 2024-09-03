export interface metricOptionProps {
  metricName?: string;
  metric?: string | number;
  className?: string;
  Img?: string;
  link?: string;
}


export interface PlayerGameStats {
  blk: number;              // Number of blocks
  OffReb: number;           // Number of offensive rebounds
  ftp: number;              // Free throw percentage
  DefReb: number;           // Number of defensive rebounds
  plusMinus: string;        // Plus/minus statistic
  stl: number;              // Number of steals
  pts: number;              // Points scored
  tech: number;             // Number of technical fouls
  team: string;             // Team abbreviation
  TOV: number;              // Turnovers
  fga: number;              // Field goals attempted
  ast: number;              // Assists
  tptfgp: number;           // Three-point field goal percentage
  teamAbv: string;          // Team abbreviation
  mins: number;             // Minutes played
  fgm: number;              // Field goals made
  fgp: number;              // Field goal percentage
  reb: number;              // Total rebounds (offensive + defensive)
  teamID: string;           // Team ID
  tptfgm: number;           // Three-point field goals made
  fta: number;              // Free throws attempted
  tptfga: number;           // Three-point field goals attempted
  longName: string;         // Player's full name
  PF: number;               // Personal fouls
  playerID: string;         // Player ID
  ftm: number;              // Free throws made
  gameID: string;           // Game ID
  fantasyPoints: number;    // Fantasy points
}


export interface RowData {
  id: string;
  matchup: string;
  date: string;
  mins: number;
  plusMinus: number;
  pts: number;
  ast: number;
  reb: number;
  fgp: string;
  tpp: string;
  tov: number;
  steals: number;
  fantasyPoints: number;
}



interface PlayerStatss {
  _id: string;
  name: string;
  stats: Array<{ [year: string]: YearlyStats }>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface YearlyStats {
  year: number;
  age: number;
  tm: string;
  g: number;
  gs: number;
  mp: number;
  fg: number;
  fga: number;
  fg_pct: number;
  "3p": number;
  "3pa": number;
  "3p_pct": number;
  "2p": number;
  "2pa": number;
  "2p_pct": number;
  efg_pct: number;
  ft: number;
  fta: number;
  ft_pct: number;
  orb: number;
  drb: number;
  trb: number;
  ast: number;
  stl: number;
  blk: number;
  tov: number;
  pf: number;
  pts: number;
}

interface PlayerImgBio {
  statusCode: number;
  body: PlayerBioBody;
}

interface PlayerBioBody {
  espnID: string;
  espnName: string;
  sleeperBotID: string;
  fantasyProsPlayerID: string;
  nbaComName: string;
  college: string;
  weight: string;
  nbaComHeadshot: string;
  jerseyNum: string;
  team: string;
  yahooPlayerID: string;
  espnLink: string;
  yahooLink: string;
  bDay: string;
  espnHeadshot: string;
  nbaComID: string;
  shortName: string;
  rotoWirePlayerIDFull: string;
  nbaComLink: string;
  injury: Injury;
  teamID: string;
  bRefName: string;
  pos: string;
  cbsPlayerID: string;
  longName: string;
  rotoWirePlayerID: string;
  height: string;
  bRefID: string;
  lastGamePlayed: string;
  playerID: string;
  exp: string;
  fantasyProsLink: string;
  stats: PlayerBioStats;
}

interface Injury {
  injReturnDate: string;
  description: string;
  injDate: string;
  designation: string;
}

export interface PlayerBioStats {
  blk: string;
  fga: string;
  DefReb: string;
  ast: string;
  ftp: string;
  tptfgp: string;
  tptfgm: string;
  stl: string;
  fgm: string;
  pts: string;
  reb: string;
  fgp: string;
  fta: string;
  mins: string;
  trueShootingAttempts: string;
  gamesPlayed: string;
  TOV: string;
  tptfga: string;
  OffReb: string;
  ftm: string;
}

export interface PlayerData {
  playerStats: PlayerStatss;
  playerImgBio: PlayerImgBio;
}


export interface TeamInfo {
  _id: string,
  name: string,
  logo: string,
  conference: string,
}

interface TotalStats {
  totalPoints: number;
  totalAssists: number;
  totalRebounds: number;
  totalFieldGoals: number;
  totalThreePointers: number;
  totalFreeThrows: number;
  totalSteals:number,
  totalBlocks:number,
}

export function getTotalStats(playerStats: PlayerStatss): TotalStats {
  return playerStats.stats.reduce((totals, yearlyStatsObject) => {
    // For each object in the stats array, iterate through its properties (years)
    Object.values(yearlyStatsObject).forEach(yearlyStats => {
      totals.totalPoints += yearlyStats.pts;
      totals.totalAssists += yearlyStats.ast;
      totals.totalRebounds += yearlyStats.trb;
      totals.totalFieldGoals += yearlyStats.fg;
      totals.totalThreePointers += yearlyStats["3p"];
      totals.totalFreeThrows += yearlyStats.ft;
      totals.totalSteals+= yearlyStats.stl;
      totals.totalBlocks += yearlyStats.blk;;
    });
    return totals;
  }, {
    totalPoints: 0,
    totalAssists: 0,
    totalRebounds: 0,
    totalFieldGoals: 0,
    totalThreePointers: 0,
    totalFreeThrows: 0,
    totalSteals:0 ,
    totalBlocks:0 ,
  });
}
  



interface MinMaxStats {
  minPoints: number;
  maxPoints: number;
  minAssists: number;
  maxAssists: number;
  minRebounds: number;
  maxRebounds: number;
  minFieldGoals: number;
  maxFieldGoals: number;
  minThreePointers: number;
  maxThreePointers: number;
  minFreeThrows: number;
  maxFreeThrows: number;
  minSteals: number;
  maxSteals: number;
  minBlocks: number;
  maxBlocks: number;
}

export function getMinMaxStats(): MinMaxStats {
  const minMax = {
    minPoints: 5000,
    maxPoints: 40000,
    minAssists: 1500,
    maxAssists: 15000,
    minRebounds: 1500,
    maxRebounds: 16000,
    minFieldGoals: 2000,
    maxFieldGoals: 15000,
    minThreePointers: 500,
    maxThreePointers: 3000,
    minFreeThrows: 1500,
    maxFreeThrows: 8000,
    minSteals: 500,
    maxSteals: 3000,
    minBlocks: 500,
    maxBlocks: 4000
  };
  return minMax
};



// Define an interface for individual game stats
interface GameStats {
  blk: string;
  OffReb: string;
  ftp: string;
  DefReb: string;
  plusMinus: string;
  stl: string;
  pts: string;
  tech: string;
  team: string;
  TOV: string;
  fga: string;
  ast: string;
  tptfgp: string;
  teamAbv: string;
  mins: string;
  fgm: string;
  fgp: string;
  reb: string;
  teamID: string;
  tptfgm: string;
  fta: string;
  tptfga: string;
  longName: string;
  PF: string;
  playerID: string;
  ftm: string;
  gameID: string;
  fantasyPoints: string;
}

// Define an interface for the entire dataset
export interface PlayerGameData {
  [gameID: string]: GameStats;
}

// Overall Perfomance Stats
export interface OPStats{
  PTS: number,
  AST: number,
  REB: number,
  STL: number,
  BLK: number,
  "FG%": number,
  "3P%": number,
  "FT%": number
}