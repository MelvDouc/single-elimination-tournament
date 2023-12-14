import cssClasses from "$src/components/AddPlayerForm/AddPlayerForm.module.scss";
import Button from "$src/components/Button/Button.tsx";
import initialPlayersObs from "$src/state/initial-players.obs.ts";
import tournament from "$src/state/tournament.ts";

export default function AddPlayerForm() {
  const names = new Set(initialPlayersObs.value.map(x => x.name));
  let name: string;

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    if (!name)
      return;

    if (names.has(name)) {
      alert("Il existe déjà un joueur avec ce nom.");
      return;
    }

    names.add(name);
    initialPlayersObs.value.push({ name });
    initialPlayersObs.notify();
    name = "";
    (e.target as HTMLFormElement).reset();
  };

  const createTournament = () => {
    if (initialPlayersObs.value.length === 0) {
      alert("Il faut d'abord ajouter des joueurs.");
      return;
    }

    tournament.createTournament(initialPlayersObs.value);
  };

  return (
    <form className={cssClasses.AddPlayerForm} onsubmit={handleSubmit}>
      <div className={cssClasses.formGroup}>
        <label htmlFor="player_name">Prénom</label>
        <input
          type="text"
          id="player_name"
          name="player_name"
          oninput={({ target }) => name = (target as HTMLInputElement).value}
          required
        />
      </div>
      <div className={cssClasses.controls}>
        <Button type="submit">Ajouter</Button>
        <Button type="button" onclick={createTournament}>Créer tournoi</Button>
      </div>
    </form>
  );
}