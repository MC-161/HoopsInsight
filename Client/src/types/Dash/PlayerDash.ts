interface PlayerStats {
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

interface PlayerInfo {
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
  metricName: string;
  metric: string | number;
  className?: string;
}
