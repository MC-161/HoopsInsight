import React from 'react';
import { IconFeatureCardProps } from '@/types/Landing/LandingTypes';

const IconFeatureCard: React.FC<IconFeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="p-3 rounded-md">
    <Icon fontSize="large" />
    <p className="feature-name text-lg font-semibold py-2 px-1">{title}</p>
    <p className="feature-description pl-1 font-extralight text-sm">{description}</p>
  </div>
);

export default IconFeatureCard;
