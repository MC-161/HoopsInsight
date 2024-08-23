import React from 'react';
import Record from './Record';
import MetricOption from "@/pages/PlayerDash/Overview/components/MetricOption"
import CardSection from './FpSection';

const OverTable: React.FC = () => {
  return (
    <section className="overTable h-48 bg-gradient-to-b from-stone-700 to-background-alt to-60% flex flex-col justify-between ">
      <div className="flex items-center justify-between gap-1 ">
        <Record wins={55} losses={32} />
        <div className="pts_grid grid grid-cols-3 gap-3 mt-2 mr-5">
          <MetricOption metricName="Points" metric={120} className="gap-0 py-0 md:px-2"/>
          <MetricOption metricName="Rebounds" metric={120} className="gap-0 py-0 md:px-2"/>
          <MetricOption metricName="Assists" metric={120} className="gap-0 py-0 md:px-2"/>
        </div>
      </div>
      <CardSection/>
    </section>
  );
};

export default OverTable;
