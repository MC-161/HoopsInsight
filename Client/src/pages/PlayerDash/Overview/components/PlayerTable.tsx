import React from 'react'
import { Button } from "@/components/ui/button"
import DataTable  from '@/pages/PlayerDash/Overview/components/games/DataTable'; 
import { PlayerGameData } from '@/types/Dash/PlayerDash';
import {columns} from '@/pages/PlayerDash/Overview/components/games/columns'

interface GamePerformanceProps {
  changeTabToMatches: () => void;
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
  // Sort by gameID (assuming gameID is a sortable string or number)
  parsedData.sort((a, b) => b.gameID.localeCompare(a.gameID)); // Use localeCompare for string IDs

  // Limit to the most recent 5 games
  return parsedData.slice(0, 5);
};

const GamePerformance: React.FC<GamePerformanceProps> = ({ changeTabToMatches, gameData }) => {
  const parsedGameData = parseGameStats(gameData);
  const isEmpty = parsedGameData.length == 0
  return (
    <div className=" flex flex-col gap-3">
      <DataTable data={parsedGameData} columns={columns}/>

      {!isEmpty ?  <Button  onClick={changeTabToMatches} variant="outline" className="self-center w-3/4 bg-transparent text-gray-100 border-white hover:border-2">
        View All Matches
      </Button> : <div></div>  }
    </div>
  );
}

export default GamePerformance;