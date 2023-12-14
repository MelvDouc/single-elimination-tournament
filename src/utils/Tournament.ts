import { Player, Round, Match, Result } from "$src/types.ts";

export default class Tournament {
  #players: Player[];
  readonly #rounds: Round[] = [];

  constructor(players: Player[]) {
    this.#players = players;
    if (!this.canProceed())
      this.#players.push({ name: "Exempt" });
    this.#makeRound();
  }

  get players() {
    return this.#players;
  }

  get currentRound() {
    return this.#rounds[this.#rounds.length - 1];
  }

  isRoundComplete() {
    return this.currentRound.matches.every(({ result }) => {
      return result !== "*";
    });
  }

  canProceed() {
    return this.#players.length % 2 === 0;
  }

  setResult(board: number, result: Result) {
    const match = this.currentRound.matches.find((match) => {
      return match.board === board;
    });
    if (match)
      match.result = result;
  }

  filterWinners() {
    const winners = this.currentRound.matches
      .reduce((acc, match) => {
        if (match.result === "1-0")
          acc.unshift(match.whitePlayer);
        if (match.result === "0-1")
          acc.push(match.blackPlayer);
        return acc;
      }, [] as Player[]);
    this.#players = winners;
  }

  makeNextRound() {
    this.#makeRound();
  }

  #makeRound() {
    const matches: Match[] = [];
    const halfLength = this.#players.length / 2;

    for (let i = 0, board = 1; i < halfLength; i++, board++) {
      const whitePlayer = this.#players[i];
      const blackPlayer = this.#players[i + halfLength];
      matches.push({
        whitePlayer,
        blackPlayer,
        board,
        result: "*"
      });
    }

    const round = {
      number: this.#rounds.length + 1,
      matches
    };
    this.#rounds.push(round);
  }
}