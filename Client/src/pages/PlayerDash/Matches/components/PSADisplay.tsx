import React from 'react';

interface TurnoverRateDisplayProps {
  PPSA: number; // Turnover rate in percentage
}

const PSADisplay: React.FC<TurnoverRateDisplayProps> = ({ PPSA }) => {
  // Define color ranges
  const getTextColorClass = (rate: number) => {
    if (rate >= 1.1) {
      return 'text-primary-green'; // Good
    } else if (rate >= 0.9 && rate < 1.1) {
      return 'text-primary-blue'; // Average
    } else if (rate >= 0.5 && rate < 0.9) {
      return 'text-primary-blue'; // Average
    } else {
      return 'text-red-500'; // Poor
    }
  };

  const textColorClass = getTextColorClass(PPSA);

  return (
    <p className={`text-2xl font-bold ${textColorClass}`}>
      {PPSA}
    </p>
  );
};

export default PSADisplay;
