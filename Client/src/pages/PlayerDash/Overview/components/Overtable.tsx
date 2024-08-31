import React from 'react';
import Record from './Record';
import MetricOption from "@/pages/PlayerDash/Overview/components/MetricOption"
import CardSection from './FpSection';
import { PlayerData, PlayerGameData } from '@/types/Dash/PlayerDash';

interface OverTableProps{
  gameData: PlayerGameData
  playerData: PlayerData
}

const OverTable: React.FC<OverTableProps> = ({gameData, playerData}) => {
  const pts = playerData.playerStats.stats[2024].pts
  const reb = playerData.playerStats.stats[2024].drb
  const ast = playerData.playerStats.stats[2024].ast
  return (
    <section className="overTable h-48 bg-gradient-to-b from-stone-700 to-background-alt to-60% flex flex-col justify-between ">
      <div className="flex items-center justify-between gap-1 ">
        <Record wins={55} losses={32} />
        <div className="pts_grid grid grid-cols-3 gap-3 mt-2 mr-5">
          <MetricOption metricName="Points" metric={pts} className="gap-0 py-0 md:px-2"/>
          <MetricOption metricName="Rebounds" metric={reb} className="gap-0 py-0 md:px-2"/>
          <MetricOption metricName="Assists" metric={ast} className="gap-0 py-0 md:px-2"/>
        </div>
      </div>
      <CardSection playerGameData={gameData}/>
    </section>
  );
};

export default OverTable;
