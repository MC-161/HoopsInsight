import React from 'react';
import { FeatureCardProps } from '@/types/Landing/LandingTypes';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="border-2 h-full flex flex-col items-center text-center rounded-md">
      <p className="title text-lg p-2">{title}</p>
      <p className="text-xs text-primary-alt px-8 pb-8">{description}</p>
    </div>
  );
};


export default FeatureCard;