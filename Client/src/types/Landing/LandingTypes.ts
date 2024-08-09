import { SvgIconComponent } from '@mui/icons-material';

export interface IconFeatureCardProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
}