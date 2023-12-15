import Confetti from "$src/components/Confetti/Confetti.tsx";
import Page from "$src/components/Page/Page.tsx";
import { Player } from "$src/types.ts";
import cssClasses from "$src/components/WinnersPage/WinnersPage.module.scss";

export default function WinnersPage({ winners }: {
  winners: Player[];
}) {
  document.title = "Vainqueurs | Tournoi d'échecs";

  return (
    <Page title="Vainqueurs">
      <ul className={cssClasses.winners} $init={() => {
        document.body.appendChild(Confetti());
      }}>
        {winners.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </Page>
  );
}