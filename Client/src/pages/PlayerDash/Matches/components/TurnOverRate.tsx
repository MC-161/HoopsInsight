import React from 'react';

interface TurnoverRateDisplayProps {
  turnoverRate: number; // Turnover rate in percentage
}

const TurnoverRateDisplay: React.FC<TurnoverRateDisplayProps> = ({ turnoverRate }) => {
  // Define color ranges
  const getTextColorClass = (rate: number) => {
    if (rate < 10) {
      return 'text-primary-green'; // Good
    } else if (rate < 20) {
      return 'text-yellow-500'; // Average
    } else {
      return 'text-red-500'; // Poor
    }
  };

  const textColorClass = getTextColorClass(turnoverRate);

  return (
    <p className={`text-2xl font-bold ${textColorClass}`}>
      {turnoverRate}%
    </p>
  );
};

export default TurnoverRateDisplay;
