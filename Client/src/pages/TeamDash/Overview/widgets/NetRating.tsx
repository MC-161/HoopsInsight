
import { TeamData } from "@/types/Dash/TeamDash";
import React from "react";
import LineChart from "../components/LineChart";

interface NetRatingProps {
  teamData: TeamData; // Replace `any` with the actual type for teamData if you have it.
}

const NetRating: React.FC<NetRatingProps> = ({ teamData }) => {
  const stats = teamData.teamStats.stats[0];
  const years = Object.keys(stats);
  const netRatings = years.map((year) => {
    const netRating = stats[year].nrtg; // Access the nrtg value for each year
    return netRating; // Return an object with year and net rating
  });
  console.log(netRatings)

  return (
    <>
      <LineChart dataPoints={netRatings} labels={years} />
    </>
  )
}
 
export default NetRating;