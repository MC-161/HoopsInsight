// FeaturesSection.tsx
import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import { Feature } from '@/types/Landing/LandingTypes';
import tempimage from "@/assets/Landing.webp"

const FeaturesSection: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<Feature | null>(null);

  const features: Feature[] = [
    { title: 'Search', description: 'Easily find the information you need with our powerful search function. Quickly locate players, teams', image:tempimage},
    { title: 'Interactive Visualisations', description: 'With our interactive visualisation feature. Dive deep into NBA  statistics and explore player performance, team dynamics, and game  trends', image:tempimage },
    { title: 'Profiles', description: 'Innovative feature called Play Profiles and Team Profiles, offering  users a detailed insight into individual players and teams with  comprehensive statistical data', image:tempimage }
  ];

  return (
    <section className="Features flex flex-col items-center h-full text-primary-main lg:grid lg:grid-cols-[45%_55%] lg:mt-14 lg:pl-24 lg:pb-10">
      <section className="h-[700px] mt-4 w-full flex items-center justify-center md:items-start md:h-fit lg:mt-0">
        <div className="change w-5/6 flex flex-col items-center h-[600px] md:w-full md:h-fit md:mt-10 md:m-8 lg:w-4/6 lg:mt-0">
          <p className="font-bold text-2xl tracking-widest">NBA V2 FEATURES</p>
          <p className="text-primary-alt font-extralight text-center px-8 py-4">
            Discover the Powerful Features of Our NBA Web App
          </p>
          <div className="grid gap-8 pt-2 cursor-pointer  md:grid-cols-3 lg:grid-cols-1">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(feature)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <FeatureCard title={feature.title} description={feature.description} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="h-[700px] items-center hidden lg:flex">
        <div className="change border-y-2 border-l-2 h-[600px] w-full rounded-l-md flex items-center justify-center ">
          {hoveredFeature ? (
            <div className="text-center h-full">
               <img src={hoveredFeature.image} alt={hoveredFeature.title} className="border-2 h-full" />
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xl">Hover over a feature to see more details</p>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default FeaturesSection;
