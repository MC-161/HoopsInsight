import Lottie from "lottie-react";
import ProfileIcon from "../../../assets/HomeRes/features/Profile.json";
import ChartIcon from "../../../assets/HomeRes/features/ChartIcon.json";
import SearchIcon from "../../../assets/HomeRes/features/SearchIcon.json";
import { Paper } from "@mui/material";
const Features = () => {
  return (
    <div className="features text-black bg-white lg:h-72 flex flex-col items-center w-full text-center">
      <h2 className="lg:text-xl text-lg p-3 font-bold font-sans">
        NBA V2 Features
      </h2>
      <div className="featuresGrid lg:grid lg:grid-cols-3 w-4/5 h-4/5 flex flex-col gap-10 p-3 lg:p-0">
        <Paper elevation={2} className="h-52 Search rounded-lg ">
          <div className="icon h-24">
            <Lottie className="h-full" animationData={SearchIcon}></Lottie>
          </div>
          <div className="featureInfo">
            <h3>Search</h3>
            <p className="text-sm p-1.5">
              Easily find the information you need with our powerful search
              function. Quickly locate players, teams
            </p>
          </div>
        </Paper>
        <Paper elevation={2} className="h-52 Visuals rounded-lg">
          <div className="icon h-24">
            <Lottie className="h-full" animationData={ChartIcon}></Lottie>
          </div>
          <div className="featureInfo">
            <h3>Interactive Visualisations</h3>
            <p className="text-sm p-1.5">
              With our interactive visualisation feature. Dive deep into NBA
              statistics and explore player performance, team dynamics, and game
              trends
            </p>
          </div>
        </Paper>
        <Paper elevation={2} className="h-52 profiles rounded-lg ">
          <div className="icon h-24">
            <Lottie className="h-full p-4" animationData={ProfileIcon}></Lottie>
          </div>
          <div className="featureInfo">
            <h3>Profiles</h3>
            <p className="text-sm p-1">
              Innovative feature called Play Profiles and Team Profiles,
              offering users a detailed insight into individual players and
              teams with statistical data
            </p>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Features;
