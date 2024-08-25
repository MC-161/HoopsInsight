import React from 'react';

interface FantasyPointsCardProps {
  date: string;
  points: number;
  className?: string;
}

const FantasyPointsCard: React.FC<FantasyPointsCardProps> = ({ date, points, className = '' }) => {
  return (
    <div
      className={`Pts bg-gradient-to-t from-primary-gradient_blue from-1% to-background-alt to-70% flex flex-col items-center gap-3 border-b-primary-blue blue border-b-8 ${className}`}
    >
      <p className="date text-xs font-semibold text-primary-alt">{date}</p>
      <div className="flex flex-col items-center">
        <p className="fpts text-sm font-semibold">{points} PTS</p>
        <p className="text-xs text-primary-main">Fantasy Points</p>
      </div>
    </div>
  );
};

export default FantasyPointsCard;
