export interface Playerlistprops  {
  players: PlayersArray; // Use the PlayersArray type alias here
}

export interface SearchPlayer {
  playerID: string;
  team: string;
  longName: string;
  teamID: string;
}

export type Query = string;

export type PlayersArray = SearchPlayer[];