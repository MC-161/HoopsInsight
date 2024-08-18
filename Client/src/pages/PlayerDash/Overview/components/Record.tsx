import React from 'react';
import LinearBorder from '@/components/LinearBorder'; 

interface RecordProps {
  wins: number;
  losses: number;
}

const Record: React.FC<RecordProps> = ({ wins, losses }) => {
  return (
    <LinearBorder className="wl flex flex-col items-center shadow-md shadow-slate-200 rounded-md text-sm mt-3 px-6 ml-6 bg-background-alt">
      <p className="z-10">Record</p>
      <div className="flex gap-2 z-10">
        <p className="wins text-primary-gradient_blue font-semibold">{wins}W</p>
        <p>-</p>
        <p className="Losses text-res-neg font-semibold">{losses}L</p>
      </div>
    </LinearBorder>
  );
};

export default Record;
