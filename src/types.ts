export type Result = "1-0" | "0-1" | "*";

export type Player = {
  readonly name: string;
};

export type Match = {
  readonly board: number;
  readonly whitePlayer: Player;
  readonly blackPlayer: Player;
  result: Result;
};

export type Round = {
  readonly number: number;
  readonly matches: Match[];
};