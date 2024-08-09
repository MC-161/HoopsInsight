import React from "react";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import IconFeatureCard from "./IconFeatureCard";
import BtLogo from "@/assets/Landing/Botpress.png";
import chatLogo from "@/assets/Landing/chat.png";

const features = [
  {
    icon: AddchartOutlinedIcon,
    title: "Detailed Analytics",
    description:
      "Compare players and teams with comprehensive statistics and advanced metrics.",
  },
  {
    icon: AutoFixHighOutlinedIcon,
    title: "Custom Queries",
    description:
      "Tailor your inquiries to get specific information about players, teams, and games.",
  },
  {
    icon: LanguageOutlinedIcon,
    title: "Comprehensive Coverage",
    description:
      "Access detailed and up-to-date information from a wide range of sources.",
  },
];

const UltimateNBACompanion: React.FC = () => (
  <section className="ai-showcase h-full mt-5 text-primary-main flex flex-col px-10 md:px-20 lg:px-48">
    <div className="title font-semibold text-2xl py-9 px-4">
      Ultimate NBA Companion ChatBot
    </div>
    <div className="chat-features grid gap-4 px-2 md:grid-cols-3">
      {features.map((feature, index) => (
        <IconFeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
    <div className="display border-2 mt-9 mx-4 h-[600px] rounded-md hidden lg:flex"></div>
    <div className="Powered text-primary-main flex flex-col items-center mt-10">
      <div className=" flex-col items-center justify-center mt-4 hidden md:flex">
        <p className="font-extralight text-primary-alt pt-10 lg:pt-0">
          Powered By
        </p>
        <section className="logos flex items-center gap-10 mt-3">
          <img className="h-10" src={BtLogo} alt="" />
          <img className="h-8" src={chatLogo} alt="" />
        </section>
      </div>
    </div>
  </section>
);

export default UltimateNBACompanion;
