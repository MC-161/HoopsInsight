export interface TeamVideos {
  _id: string;
  videos: Array<{ [key: string]: string }>;
}

interface TeamData{
  _id: string;
  name: string;
  videos: Array<{ [key: string]: string }>;
  logo: string;
  conference: string;
  topPerformers: Array<StatLeaders>;
  stats: Array<{ [year: string]: SeasonStats }>;
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

interface StatDetail {
  total: string;
  playerID: string[];
}