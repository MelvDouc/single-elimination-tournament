import initialPlayersObs from "$src/state/initial-players.obs.ts";
import cssClasses from "$src/components/InitialPlayersTable/InitialPlayersTable.module.scss";

export default function InitialPlayersTable() {
  const deletePlayer = (name: string) => {
    return () => {
      initialPlayersObs.value = initialPlayersObs.value.filter((player) => {
        return player.name !== name;
      });
    };
  };

  return (
    <table className={cssClasses.InitialPlayersTable}>
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Actions</th>
        </tr>
      </thead>
      {initialPlayersObs.map((players) => (
        <tbody>
          {players.map(({ name }) => (
            <tr>
              <td>{name}</td>
              <td>
                <button className={cssClasses.delBtn} onclick={deletePlayer(name)}>×</button>
              </td>
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  );
}