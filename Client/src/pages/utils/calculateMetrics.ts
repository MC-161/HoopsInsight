import { PlayerGameData } from "@/types/Dash/PlayerDash";


export interface PlayerMetrics {
  eFGPercentage: string;
  trueShootingPercentage: string;
  playerEfficiencyRating: string;
}


export const calculatePlayerMetrics = (data: PlayerGameData): PlayerMetrics => {
  let totalFGM = 0;
  let totalFGA = 0;
  let total3PM = 0;
  let totalPTS = 0;
  let totalFTA = 0;
  let totalFTM = 0;
  let totalREB = 0;
  let totalAST = 0;
  let totalSTL = 0;
  let totalBLK = 0;
  let totalTOV = 0;
  let totalMinutes = 0;

  for (const gameID in data) {
    const game = data[gameID];

    // Convert strings to numbers
    const fga = parseFloat(game.fga);
    const fgm = parseFloat(game.fgm);
    const tptfgm = parseFloat(game.tptfgm);
    const pts = parseFloat(game.pts);
    const fta = parseFloat(game.fta);
    const ftm = parseFloat(game.ftm);
    const reb = parseFloat(game.reb);
    const ast = parseFloat(game.ast);
    const stl = parseFloat(game.stl);
    const blk = parseFloat(game.blk);
    const tov = parseFloat(game.TOV);
    const mins = parseFloat(game.mins);

    // Aggregate values
    totalFGM += fgm;
    totalFGA += fga;
    total3PM += tptfgm;
    totalPTS += pts;
    totalFTA += fta;
    totalFTM += ftm;
    totalREB += reb;
    totalAST += ast;
    totalSTL += stl;
    totalBLK += blk;
    totalTOV += tov;
    totalMinutes += mins;
  }

  // Calculate percentages
  const eFGPercentage = (totalFGA === 0) ? 0 : ((totalFGM + 0.5 * total3PM) / totalFGA) * 100;
  const trueShootingPercentage = (2 * (totalFGA + 0.44 * totalFTA) === 0) ? 0 : (totalPTS / (2 * (totalFGA + 0.44 * totalFTA))) * 100;
  const playerEfficiencyRating = (totalMinutes === 0) ? 0 : (((totalPTS + totalREB + totalAST + totalSTL + totalBLK - totalTOV - (totalFGA - totalFGM) - (totalFTA - totalFTM)) * 100) / totalMinutes);

  return {
    eFGPercentage: eFGPercentage.toFixed(2),
    trueShootingPercentage: trueShootingPercentage.toFixed(2),
    playerEfficiencyRating: playerEfficiencyRating.toFixed(2),
  };
};