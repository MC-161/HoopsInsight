// statDescriptions.ts
export type StatName = 
  | 'matchup'
  | 'date'
  | 'mins'
  | 'plusMinus'
  | 'pts'
  | 'ast'
  | 'reb'
  | 'fgp'
  | 'TPTFGP'
  | 'TOV'
  | 'stl'
  | 'fgs'
  | 'fantasyPoints';

export const statDescriptions: Record<StatName, string> = {
  matchup: 'Details about the opponent team.',
  date: 'The date of the game.',
  mins: 'Minutes played in the game.',
  plusMinus: 'Plus-minus score, indicating the point difference when the player is on the court.',
  pts: 'Points scored by the player.',
  ast: 'Assists made by the player.',
  reb: 'Rebounds collected by the player.',
  fgp: 'Field Goal Percentage (FG%) - the percentage of field goals made.',
  TPTFGP: 'Three-Point Percentage (3P%) - the percentage of three-point shots made.',
  TOV: 'Turnovers made by the player.',
  stl: 'Number of steals by the player.',
  fgs: 'Field Goals Attempted - the number of field goals attempted.',
  fantasyPoints: 'Total fantasy points scored by the player.',
};
