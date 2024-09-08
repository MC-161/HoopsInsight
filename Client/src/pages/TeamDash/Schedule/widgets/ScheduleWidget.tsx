import React from 'react';
import { AccessTime, LocationOn } from '@mui/icons-material';
import { ScheduleResponse } from '@/types/Dash/TeamDash';

interface ScheduleProps {
  schedule: ScheduleResponse;
}

const Schedule: React.FC<ScheduleProps> = ({ schedule }) => {
  // Destructure the team and schedule from the response body
  const games = schedule.body.schedule
  const team = schedule.body.team

  return (
    <div className="bg-background-dash-alt min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-primary-main mb-6">
          Team {team} Schedule
        </h1>
        <div className="grid md:grid-cols-3 gap-5">
          {games.map((game) => (
            <div
              key={game.gameID}
              className="bg-background-alt shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="p-4 flex items-center justify-between bg-black border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <LocationOn className="text-primary-main" fontSize="large" />
                  <div>
                    <h2 className="text-xl font-semibold">
                      {game.home} vs {game.away}
                    </h2>
                    <p className="text-sm text-primary">
                      Date: {new Date(game.gameDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <AccessTime className="text-primary-500" fontSize="small" />
                  <span className="text-sm text-primary-main">{game.gameTime}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300">Status: {game.gameStatus}</p>
                <p className="text-sm text-gray-400 mt-2">Season: {game.seasonType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
