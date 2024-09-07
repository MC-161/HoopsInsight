// TooltipInfoCard.tsx
import React from 'react';
import { statDescriptions, StatName } from '@/pages/utils/statDescriptions'; // Adjust import path as needed

interface TooltipInfoCardProps {
  statName: StatName; // Ensure this type is strictly one of the StatName values
}

const TooltipInfoCard: React.FC<TooltipInfoCardProps> = ({ statName }) => {
  return (
    <div className="bg-background-alt text-primary-main border rounded shadow-sm">
      <h3 className="text-sm">{statName.toUpperCase()}</h3>
      <p className='font-extralight'>{statDescriptions[statName]}</p>
    </div>
  );
};

export default TooltipInfoCard;
