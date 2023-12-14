import AddPlayersPage from "$src/components/AddPlayersPage/AddPlayersPage.tsx";
import tournament from "$src/state/tournament.ts";
import RoundPage from "$src/components/RoundPage/RoundPage.tsx";
import WinnersPage from "$src/components/WinnersPage/WinnersPage.tsx";

export default function App() {
  return (
    <div id="App">
      <main $init={(element) => {
        tournament.onNewRound((round) => {
          element.replaceChildren(RoundPage({ round }));
        });
        tournament.onTournamentCompleted((winners) => {
          element.replaceChildren(WinnersPage({ winners }));
        });
      }}>
        <AddPlayersPage />
      </main>
    </div>
  );
}