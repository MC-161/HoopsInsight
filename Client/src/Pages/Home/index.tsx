import Features from "./Components/Features";
import titleImg from "../../assets/HomeRes/LandingTitle.svg";
import Logo from "../../assets/HomeRes/Logo.png";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useEffect, useState } from "react";
import TopPlayers from "./Components/TopPlayers";
import TopTeams from "./Components/TopTeams";
import { Divider } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import TopPlayersMob from "./Components/TopPlayerMob";
import TopTeamsMob from "./Components/TopTeamsMob";
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const LinkedinUrl = import.meta.env.VITE_LINKEDIN;
  const GithubUrl = import.meta.env.VITE_GITHUB;
  useEffect(() => {
    // Update isMobile state based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize); // Event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="Home h-auto overflow-hidden">
      {/* Landing Section */}
      <div className="landingWrapper lg:h-screen h-lvh md:h-4/5">
        <div className="Landing lg:h-4/5 h-full w-full flex flex-col items-center gap-20">
          <div className="title mt-16 w-4/5 lg:mt-20 lg:w-auto">
            <img className="backdrop-blur-sm z-0" src={titleImg} alt="" />
          </div>
          {/* Landing Content */}
          <div className="introInfo rounded-md border-2 p-2 backdrop-blur-sm w-80 text-white text-center mt-16">
            <p className="text-lg">
              Welcome to NbaStatsV2 - Your ultimate NBA statistics hub! Explore
              player and team performance metrics like never before.{" "}
            </p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button className=" hover:bg-white hover:text-black border-2 p-1 m-1 rounded-md">
                Learn More
              </button>
            </motion.div>
          </div>
          {isMobile && (
            <KeyboardDoubleArrowDownIcon
              className="mt-36"
              fontSize="large"
              sx={{ color: "white" }}
            />
          )}
        </div>
        {/* Render Features component inside landing wrapper if not mobile */}
        {!isMobile && <Features></Features>}
      </div>
      {/* Render Features component outside landing wrapper if mobile */}
      {isMobile && <Features></Features>}
      {/* landing Section */}
      <div className="PT_section text-white flex justify-center items-center w-full flex-col lg:mt-[140px]">
        {!isMobile ? <TopPlayers /> : <TopPlayersMob />}
        <Divider className="w-4/5" sx={{ backgroundColor: "white" }} />
        {!isMobile ? <TopTeams></TopTeams> : <TopTeamsMob />}
      </div>
      <footer className="flex justify-center h-full">
        <img className="h-24" src={Logo} alt="" />
        <div className="flex flex-col h-24 justify-center">
          <a href={LinkedinUrl}>
            <LinkedIn
              className="hover:text-slate-500"
              fontSize="large"
            ></LinkedIn>
          </a>
          <a href={GithubUrl}>
            <GitHub className="hover:text-slate-500" fontSize="large"></GitHub>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
