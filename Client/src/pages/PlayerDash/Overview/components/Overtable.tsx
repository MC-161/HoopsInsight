import React from 'react';
import Record from './Record';
import MetricOption from "@/pages/PlayerDash/Overview/components/MetricOption"
import FantasyPointsCard from "@/pages/PlayerDash/Overview/components/FantasyPtsCard"

const OverTable: React.FC = () => {
  return (
    <section className="overTable h-44 bg-gradient-to-b from-stone-700 to-background-alt to-60% flex flex-col justify-between">
      <div className="flex items-center justify-between gap-1 ">
        <Record wins={55} losses={32} />
        <div className="pts_grid grid grid-cols-3 gap-3 mt-2 mr-5">
          <MetricOption metricName="Points" metric={120} className="gap-0 py-0 px-2"/>
          <MetricOption metricName="Rebounds" metric={120} className="gap-0 py-0 px-2"/>
          <MetricOption metricName="Assists" metric={120} className="gap-0 py-0 px-2"/>
        </div>
      </div>
      
      <section className="fpp grid grid-cols-3 lg:grid-cols-8 gap-2">
        <FantasyPointsCard points={55} date="2024/02/08" />
        <FantasyPointsCard points={55} date="2024/02/08" />
       
      </section>
    </section>
  );
};

export default OverTable;
