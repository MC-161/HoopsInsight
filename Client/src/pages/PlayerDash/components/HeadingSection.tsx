import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';

interface HeadingSectionProps {
  icon?: SvgIconComponent;  // Type for MUI icons
  title: string;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({ icon: Icon, title }) => {
  return (
    <div
      className="text-center border-b-2 border-transparent w-full h-10 flex items-center gap-2 bg-background-dashalt rounded-md"
      style={{
        borderImage:
          "linear-gradient(90deg, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155))",
        borderImageSlice: 1,
      }}
    >
      {Icon && <Icon className="pl-3" fontSize="large" />} {/* Conditionally render the icon if it's passed */}
      <p className="text-primary-main font-semibold">{title}</p>
    </div>
  );
};

export default HeadingSection;
