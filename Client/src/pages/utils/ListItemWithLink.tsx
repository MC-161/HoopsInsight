// src/components/ListItemWithLink.tsx
import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface ListItemWithLinkProps {
  to: string;
  icon: React.ReactElement;
  primaryText: string;
  secondaryText?: string;
  className?: string;
}

const ListItemWithLink: React.FC<ListItemWithLinkProps> = ({ to, icon, primaryText, secondaryText, className }) => {
  return (
    <ListItem
      button
      component={RouterLink}
      to={to}
      className={`flex flex-col justify-center items-center p-4 transition-transform transform hover:scale-105 ${className}`}
    >
      <div className="flex items-center gap-5">
        {icon}
        <div className="flex flex-col items-start">
          <ListItemText primary={primaryText} secondary={secondaryText} />
        </div>
      </div>
    </ListItem>
  );
};

export default ListItemWithLink;
