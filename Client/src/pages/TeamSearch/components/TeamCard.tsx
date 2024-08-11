import { Team } from "@/types/Search/SearchTypes";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface teamCardProps {
  team: Team;
}

const TeamCard: React.FC<teamCardProps> = ({ team }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/team-dash?id=${team._id}`)}
      className="py-7 border-2 flex items-center justify-center rounded-md cursor-pointer backdrop-blur-md"
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.05, ease: "easeInOut" },
      }}
    >
      <p className="text-primary-main">{team.name}</p>
    </motion.div>
  );
};

export default TeamCard;
