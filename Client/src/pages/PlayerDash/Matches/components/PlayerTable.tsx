import React from 'react'
import DataTable  from '@/pages/PlayerDash/Matches/components/games/DataTable'; 
import { PlayerGameData} from '@/types/Dash/PlayerDash';
import {columns} from '@/pages/PlayerDash/Matches/components/games/columns'

interface GamePerformanceProps{
  gameData: PlayerGameData
}

// Convert PlayerGameData to an array
const parseGameStats = (gameData: PlayerGameData) => {
  const parsedData = Object.keys(gameData).map(gameID => {
    const stats = gameData[gameID];
    return {
      ...stats,
      blk: parseInt(stats.blk, 10),
      OffReb: parseInt(stats.OffReb, 10),
      ftp: parseFloat(stats.ftp),
      DefReb: parseInt(stats.DefReb, 10),
      plusMinus: stats.plusMinus,
      stl: parseInt(stats.stl, 10),
      pts: parseInt(stats.pts, 10),
      tech: parseInt(stats.tech, 10),
      team: stats.team,
      TOV: parseInt(stats.TOV, 10),
      fga: parseInt(stats.fga, 10),
      ast: parseInt(stats.ast, 10),
      tptfgp: parseFloat(stats.tptfgp),
      teamAbv: stats.teamAbv,
      mins: parseInt(stats.mins, 10),
      fgm: parseInt(stats.fgm, 10),
      fgp: parseFloat(stats.fgp),
      reb: parseInt(stats.reb, 10),
      teamID: stats.teamID,
      tptfgm: parseInt(stats.tptfgm, 10),
      fta: parseInt(stats.fta, 10),
      tptfga: parseInt(stats.tptfga, 10),
      longName: stats.longName,
      PF: parseInt(stats.PF, 10),
      playerID: stats.playerID,
      ftm: parseInt(stats.ftm, 10),
      gameID: stats.gameID,
      fantasyPoints: parseFloat(stats.fantasyPoints)
    };
  });
  return parsedData;
};

const GamePerformance: React.FC<GamePerformanceProps> = ({gameData}) => {
  const parsedGameData = parseGameStats(gameData);
  return (
    <div className=" flex flex-col gap-3">
      <DataTable data={parsedGameData} columns={columns}/>
    </div>
  );
}

export default GamePerformance;