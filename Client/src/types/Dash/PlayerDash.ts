export interface PlayerStats {
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
  "3p_pct": number | null;
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

export interface PlayerInfo {
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
  injury: {
    injReturnDate: string | null;
    description: string | null;
    injDate: string | null;
    designation: string | null;
  };
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
}

export interface Player {
  _id: string;
  name: string;
  stats: Record<number, PlayerStats>;
  createdAt: string;
  updatedAt: string;
  __v: number;
  playerImgBio: {
    statusCode: number;
    body: PlayerInfo;
  };
}


export interface metricOptionProps {
  metricName?: string;
  metric?: string | number;
  className?: string;
  Img?: string;
  Link?: string;
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
