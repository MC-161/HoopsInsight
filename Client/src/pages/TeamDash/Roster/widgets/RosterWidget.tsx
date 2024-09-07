import { Player, TeamRoster } from '@/types/Dash/TeamDash';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface RosterProps {
  rosterData: TeamRoster;
}

const Roster: React.FC<RosterProps> = ({ rosterData }) => {
  const navigate = useNavigate()
  return (
    <div className="p-6 bg-background-dash min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{rosterData.body.team} Roster</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rosterData.body.roster.map((player: Player) => (
          <div key={player.playerID} className="bg-white shadow-sm shadow-black rounded-lg p-4 flex flex-col items-center">
            <img src={player.nbaComHeadshot} alt={player.longName} className="w-32 rounded-full mb-4" />
            <h2 className="text-xl font-semibold">{player.longName}</h2>
            <p className="text-gray-600">#{player.jerseyNum} | {player.pos}</p>
            <p className="text-gray-600">College: {player.college}</p>
            <p className="text-gray-800 font-bold">PTS: {player.stats.pts} | AST: {player.stats.ast} | REB: {player.stats.reb}</p>
            <p onClick={() => navigate(`/player-dash?id=${player.playerID}`)} className="text-blue-500 hover:underline mt-2 hover:cursor-pointer">View NBASTATS Profile</p>
            <a href={player.espnLink} className="text-blue-500 hover:underline mt-2">View Espn Profile</a>
            {player.injury.description && (
              <p className="text-red-500 mt-2">{player.injury.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;
