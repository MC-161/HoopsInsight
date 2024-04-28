import { Paper } from "@mui/material";
import KI from "../../../assets/HomeRes/TopPlayers/KI.jpg";
import LJ from "../../../assets/HomeRes/TopPlayers/LJ.jpg";
import GA from "../../../assets/HomeRes/TopPlayers/GA.jpg";
import SC from "../../../assets/HomeRes/TopPlayers/SC.jpg";
import { MouseEvent } from "react";
const TopPlayers = () => {
  const handleClick = (e: MouseEvent) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div className="w-full flex items-center flex-col p-5">
      <h2 className="text-xl p-4">Top Players</h2>
      <span className=" cursor-pointer self-end mr-24 underline hover:text-gray-300 active:text-white">
        View All Player
      </span>
      <div className="playerGrid grid grid-cols-4 w-full text-center gap-6 px-24 p-6">
        <Paper
          onClick={(e) => handleClick(e)}
          id={"Lebron James"}
          className="w-fit cursor-pointer h-fit "
        >
          <img src={KI} alt="" className="hover:mb-1 w-full h-46 border-2 rounded-md" />
        </Paper>
        <Paper
          onClick={(e) => handleClick(e)}
          id={"Lebron James"}
          className="w-fit cursor-pointer h-fit "
        >
          <img src={LJ} alt="" className="hover:mb-1 w-full h-46 border-2 rounded-md" />
        </Paper>
        <Paper
          onClick={(e) => handleClick(e)}
          id={"Giannis Antetokounmpo"}
          className="w-fit h-fit cursor-pointer"
        >
          <img src={GA} alt="" className="hover:mb-1 w-full h-46 border-2 rounded-md" />
        </Paper>
        <Paper
          onClick={(e) => handleClick(e)}
          id={"Stephen Curry"}
          className="w-fit cursor-pointer h-fit "
        >
          <img src={SC} alt="" className="hover:mb-1 w-full h-46 border-2 rounded-md" />
        </Paper>
      </div>
    </div>
  );
};

export default TopPlayers;
