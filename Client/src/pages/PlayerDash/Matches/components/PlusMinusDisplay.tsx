import React from 'react';

interface TurnoverRateDisplayProps {
  plusMinus: string; // Turnover rate in percentage
}

const PlusMinusDisplay: React.FC<TurnoverRateDisplayProps> = ({ plusMinus }) => {
  // Define color ranges
  const getTextColorClass = (rate: string) => {
    if (rate[0] == "+") {
      return 'text-primary-green'; // Good
    }else {
      return 'text-red-500'; // Poor
    }
  };

  const textColorClass = getTextColorClass(plusMinus);

  return (
    <p className={`text-2xl font-bold ${textColorClass}`}>
      {plusMinus}
    </p>
  );
};

export default PlusMinusDisplay;
