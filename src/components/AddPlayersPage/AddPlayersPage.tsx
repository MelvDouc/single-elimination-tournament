import AddPlayerForm from "$src/components/AddPlayerForm/AddPlayerForm.tsx";
import InitialPlayersTable from "$src/components/InitialPlayersTable/InitialPlayersTable.tsx";
import Page from "$src/components/Page/Page.tsx";

export default function AddPlayersPage() {
  return (
    <Page title="Ajouter des joueurs">
      <AddPlayerForm />
      <InitialPlayersTable />
    </Page>
  );
}