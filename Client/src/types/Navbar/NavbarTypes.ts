import { SvgIconComponent } from '@mui/icons-material';


export interface OptionProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
  destination?:string
}

// Define props for NavItem component
export interface NavItemCardProps {
  title: string;
  description: string;
  bgClass: string;
  href: string;
}

export interface LogoItemProps {
  src: string;
  alt: string;
  width: string;
  href: string;
  border?: boolean;
}