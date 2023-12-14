import { Result, Round } from "$src/types.ts";
import Page from "$src/components/Page/Page.tsx";
import tournament from "$src/state/tournament.ts";
import cssClasses from "$src/components/RoundPage/RoundPage.module.scss";

export default function RoundPage({ round }: {
  round: Round;
}) {
  const setResult = (board: number) => {
    return ({ target }: Event) => {
      const result = (target as HTMLSelectElement).value as Result;
      tournament.setResult(board, result);
    };
  };

  return (
    <Page title={`Ronde ${round.number}`}>
      {round.matches.map(({ board, whitePlayer, blackPlayer }) => (
        <div className={cssClasses.pairing}>
          <span className={cssClasses.board}>{board}</span>
          <div className={cssClasses.contents}>
            <span>{whitePlayer.name}</span>
            <span>
              <select onchange={setResult(board)}>
                <option value="*">En cours</option>
                <option value="1-0">Gain blanc</option>
                <option value="0-1">Gain noir</option>
              </select>
            </span>
            <span>{blackPlayer.name}</span>
          </div>
        </div>
      ))}
    </Page>
  );
}