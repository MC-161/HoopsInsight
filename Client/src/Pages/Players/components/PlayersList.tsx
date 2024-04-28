import { Playerlistprops, Query } from "@/types/types";
import { useState, useEffect } from 'react';

const PlayersList: React.FC<Playerlistprops & { query: Query }> = ({ players, query }) => {
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  useEffect(() => {
    // Filter the players based on the query
    const filtered = players.filter(player =>
      player.longName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlayers(filtered);
  }, [players, query]);

  return (
    <div className="playerList grid lg:grid-cols-6 grid-cols-2 gap-6 p-6">
      {filteredPlayers.map(player => (
        <div key={player.playerID} id={player.playerID} className="p-6 border-2 text-center rounded-md">
          <h3>{player.longName}</h3>
        </div>
      ))}
    </div>
  );
}

export default PlayersList;
