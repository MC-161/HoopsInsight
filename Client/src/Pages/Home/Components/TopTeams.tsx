import { Paper } from "@mui/material";
import { MouseEvent } from "react";
import LAL from "../../../assets/HomeRes/TopTeams/LAL.jpg";
import GSW from "../../../assets/HomeRes/TopTeams/GSW.webp";
import MWB from "../../../assets/HomeRes/TopTeams/MWB.jpg";
const TopTeams = () => {
  const handleClick = (e: MouseEvent) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div className="w-full flex items-center flex-col p-5">
      <h2 className="text-xl p-2">Top Teams</h2>
      <span className=" cursor-pointer self-end mr-24 underline hover:text-gray-300 active:text-white">
        View All Player
      </span>
      <div className="playerGrid grid grid-cols-3 w-full text-center gap-10 px-24 p-4">
        <Paper
          onClick={(e) => handleClick(e)}
          id={"Kevin Durant"}
          className="h-auto cursor-pointer"
        >
          <img src={MWB} alt="" className="w-full h-48 border-2 rounded-md" />
        </Paper>
        <Paper
          onClick={(e) => handleClick(e)}
          id={"Lebron James"}
          className="h-auto cursor-pointer"
        >
          <img src={LAL} alt="" className="w-full h-48 border-2 rounded-md" />
        </Paper>
        <Paper
          onClick={(e) => handleClick(e)}
          id={"Giannis Antetokounmpo"}
          className="h-auto cursor-pointer"
        >
          <img src={GSW} alt="" className="w-full h-48 border-2 rounded-md" />
        </Paper>
      </div>
    </div>
  );
};

export default TopTeams;
