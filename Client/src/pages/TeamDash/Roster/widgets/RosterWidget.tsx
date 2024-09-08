import { Player, TeamRoster } from "@/types/Dash/TeamDash";
import React from "react";
import { useNavigate } from "react-router-dom";

interface RosterProps {
  rosterData: TeamRoster;
}

const RosterWidget: React.FC<RosterProps> = ({ rosterData }) => {
  const navigate = useNavigate();
  return (
    <div className="p-6 bg-background-dash min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{rosterData.body.team} Roster</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rosterData.body.roster.map((player: Player) => (
          <div
            key={player.playerID}
            className="bg-black border border-white shadow-lg hover:shadow-xl transition-shadow rounded-xl p-6 flex flex-col items-center"
          >
            <img
              src={player.nbaComHeadshot}
              alt={player.longName}
              className="w-32 rounded-full mb-4 border-4 border-neutral-600 shadow-md"
            />
            <h2 className="text-2xl font-bold text-white mb-2">
              {player.longName}
            </h2>
            <p className="text-gray-400 mb-2">
              #{player.jerseyNum} | {player.pos}
            </p>
            <p className="text-gray-400 mb-2">College: {player.college}</p>
            <div className="flex justify-between w-full text-gray-300 mt-4">
              <p>
                PTS: <span className="text-white">{player.stats.pts}</span>
              </p>
              <p>
                AST: <span className="text-white">{player.stats.ast}</span>
              </p>
              <p>
                REB: <span className="text-white">{player.stats.reb}</span>
              </p>
            </div>
            <p
              onClick={() => navigate(`/player-dash?id=${player.playerID}`)}
              className="text-blue-500 hover:text-blue-600 hover:underline mt-4 cursor-pointer"
            >
              View NBASTATS Profile
            </p>
            <a
              href={player.espnLink}
              className="text-blue-500 hover:text-blue-600 hover:underline mt-2"
            >
              View ESPN Profile
            </a>
            {player.injury.description && (
              <p className="text-red-500 mt-2">{player.injury.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RosterWidget;
