import Tournament from "$src/utils/Tournament.ts";
import { Player, Result, Round } from "$src/types.ts";

const eventMap = {
  TournamentCreated: "tournament-created",
  TournamentCompleted: "tournament-completed",
  NewRound: "new-round",
} as const;

const eventTarget = new EventTarget();
let tournament: Tournament;

function createTournament(players: Player[]) {
  tournament = new Tournament(players);
  eventTarget.dispatchEvent(
    new CustomEvent(eventMap.NewRound, { detail: tournament.currentRound })
  );
}

function onNewRound(listener: (round: Round) => unknown) {
  eventTarget.addEventListener(eventMap.NewRound, (e) => {
    listener((e as CustomEvent<Round>).detail);
  });
}

function setResult(board: number, result: Result) {
  tournament.setResult(board, result);

  if (!tournament.isRoundComplete())
    return;

  tournament.filterWinners();

  if (!tournament.canProceed()) {
    eventTarget.dispatchEvent(
      new CustomEvent(eventMap.TournamentCompleted, {
        detail: tournament.players
      })
    );
    return;
  }

  tournament.makeNextRound();
  eventTarget.dispatchEvent(
    new CustomEvent(eventMap.NewRound, {
      detail: tournament.currentRound
    })
  );
}

function onTournamentCompleted(listener: (winners: Player[]) => unknown) {
  eventTarget.addEventListener(eventMap.TournamentCompleted, (e) => {
    listener((e as CustomEvent<Player[]>).detail);
  });
}

export default {
  createTournament,
  onNewRound,
  setResult,
  onTournamentCompleted,
};