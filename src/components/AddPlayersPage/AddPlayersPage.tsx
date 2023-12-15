import AddPlayerForm from "$src/components/AddPlayerForm/AddPlayerForm.tsx";
import InitialPlayersTable from "$src/components/InitialPlayersTable/InitialPlayersTable.tsx";
import Page from "$src/components/Page/Page.tsx";

export default function AddPlayersPage() {
  document.title = "Ajouter des joueurs | Tournoi d'échecs";
  return (
    <Page title="Ajouter des joueurs">
      <AddPlayerForm />
      <InitialPlayersTable />
    </Page>
  );
}