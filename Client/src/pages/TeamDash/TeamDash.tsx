import { useLocation } from "react-router-dom";
import TabsSection from "./TabsSection";
// import usePlayerAndGame from "@/hooks/usePlayerAndGames";
// import Loader from "../utils/LoadingPage";
// import InternalServerPage from "../utils/InternalServerPage";
import useTeamData from "@/hooks/useTeamData";
const TeamDash = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const teamId = queryParams.get("id");
  const { teamData, isLoading, isError, errors } = useTeamData(teamId);

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return (
      <div>
        <h2>Error Loading Data</h2>
        {errors.infoError && <p>Team Info Error: {errors.infoError.message}</p>}
        {errors.statsError && <p>Team Stats Error: {errors.statsError.message}</p>}
        {errors.topError && <p>Top Performers Error: {errors.topError.message}</p>}
        {errors.videosError && <p>Team Videos Error: {errors.videosError.message}</p>}
      </div>
    );
  }

  const nbaComName = teamData.teamInfo.name || "Default Name";
  const [firstname, lastname] = nbaComName.split(" ");

  // Use a default headshot if none is provided
  const headshotUrl = teamData.teamInfo?.logo || "";

  return (
    <div className="bg-black">
      <section className="banner w-full h-72 Searchbg"></section>
      <section className="tabs_Wrapper grid grid-cols-1 relative h-32 w-full text-primary-main -mt-20">
        <div className="placeholdn h-10 ml-72">
          <p className="fName text-sm font-extralight">{firstname}</p>
          <p className="lName font-bold text-2xl">{lastname}</p>
        </div>
        <img
          className="w-32 absolute left-40 bottom-8 md:left-80 md:bottom-6 lg:left-36 border-2 rounded-lg pt-3 backdrop-blur-md"
          src={headshotUrl}
          alt="No HeadShot Available"
        />
        <div className="">
          <TabsSection teamData={teamData} />
        </div>
      </section>
    </div>
  );
};

export default TeamDash;
