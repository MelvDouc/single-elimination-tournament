import { obs } from "reactfree-jsx";
import { Player } from "$src/types.ts";

const initialPlayersObs = obs<Player[]>((() => {
  const data = localStorage.getItem("players");
  return data
    ? JSON.parse(data)
    : [];
})());

initialPlayersObs.subscribe((players) => {
  localStorage.setItem("players", JSON.stringify(players));
});

export default initialPlayersObs;