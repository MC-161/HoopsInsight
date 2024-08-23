import React from 'react';

interface EffectiveFGDisplayProps {
  eFGPercentage: number; // Effective Field Goal Percentage
}

const EffectiveFGDisplay: React.FC<EffectiveFGDisplayProps> = ({ eFGPercentage }) => {
  // Define the CSS classes for different eFG% ranges
  const getTextColorClass = (eFG: number) => {
    if (eFG > 55) {
      return 'text-primary-green'; // Excellent
    } else if (eFG > 53) {
      return 'text-yellow-500'; // Good
    } else if (eFG > 50) {
      return 'text-orange-500'; // Average
    } else {
      return 'text-red-500'; // Below Average
    }
  };

  const textColorClass = getTextColorClass(eFGPercentage);

  return (
    <div>
      <p className={`text-2xl font-bold ${textColorClass}`}>
        {eFGPercentage}%
      </p>
    </div>
  );
};

export default EffectiveFGDisplay;
