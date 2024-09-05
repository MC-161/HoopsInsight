import { useLocation } from "react-router-dom";
import TabsSection from "./TabsSection";
// import usePlayerAndGame from "@/hooks/usePlayerAndGames";
// import Loader from "../utils/LoadingPage";
// import InternalServerPage from "../utils/InternalServerPage";
import { TeamData, TeamInfo, TeamStats, TeamTopPerformers, TeamVideos } from "@/types/Dash/TeamDash";
const TeamDash = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const teamId = queryParams.get("id");
  // const { teamData, error, isLoading } =

  // if (isloading) return <div><Loader/></div>;
  // if (error) return <div><InternalServerPage /></div>;

  // if (!playerData) return <div>No player data available</div>;
  // if (!gameData) return <div>No game data available</div>;
  const teamInfo: TeamInfo = {
    _id: "ATL",
    name: "Atlanta Hawks",
    logo: "https://cdn.nba.com/teams/uploads/sites/1610612737/2023/01/atl_hawks_primary_icon.svg",
    conference: "Eastern Conference",
  };

  const teamStats: TeamStats = {
    _id: "ATL",
    stats: [
      {
        "2018": {
          year: 2018,
          age: 25.4,
          w: 24,
          l: 58,
          pw: 27,
          pl: 55,
          mov: -5.45,
          sos: 0.15,
          srs: -5.3,
          ortg: 105,
          drtg: 110.6,
          nrtg: -5.6,
          pace: 98.3,
          ftr: 0.236,
          "3par": 0.363,
          ts_pct: 0.547,
          efg_pct: 0.512,
          tov_pct: 14.1,
          orb_pct: 21.1,
          ft_fga: 0.185,
          efg_pct_opponent: 0.536,
          tov_pct_opponent: 13.6,
          drb_pct: 76.2,
          ft_fga_opponent: 0.183,
          arena: "Philips Arena",
          attend: 590769,
          attend_per_game: 14409,
        },
        "2019": {
          year: 2019,
          age: 25.1,
          w: 29,
          l: 53,
          pw: 27,
          pl: 55,
          mov: -6.02,
          sos: -0.04,
          srs: -6.06,
          ortg: 108.1,
          drtg: 113.9,
          nrtg: -5.8,
          pace: 103.9,
          ftr: 0.255,
          "3par": 0.403,
          ts_pct: 0.555,
          efg_pct: 0.522,
          tov_pct: 14.3,
          orb_pct: 24.7,
          ft_fga: 0.192,
          efg_pct_opponent: 0.541,
          tov_pct_opponent: 12.8,
          drb_pct: 76.4,
          ft_fga_opponent: 0.237,
          arena: "State Farm Arena",
          attend: 628440,
          attend_per_game: 15328,
        },
        "2020": {
          year: 2020,
          age: 24.1,
          w: 20,
          l: 47,
          pw: 18,
          pl: 49,
          mov: -7.97,
          sos: 0.27,
          srs: -7.71,
          ortg: 107.2,
          drtg: 114.8,
          nrtg: -7.6,
          pace: 103,
          ftr: 0.258,
          "3par": 0.398,
          ts_pct: 0.554,
          efg_pct: 0.515,
          tov_pct: 13.8,
          orb_pct: 21.6,
          ft_fga: 0.204,
          efg_pct_opponent: 0.543,
          tov_pct_opponent: 12.7,
          drb_pct: 74.9,
          ft_fga_opponent: 0.233,
          arena: "State Farm Arena",
          attend: 545453,
          attend_per_game: 16043,
        },
        "2021": {
          year: 2021,
          age: 25.4,
          w: 41,
          l: 31,
          pw: 41,
          pl: 31,
          mov: 2.32,
          sos: -0.18,
          srs: 2.14,
          ortg: 115.7,
          drtg: 113.3,
          nrtg: 2.4,
          pace: 97.6,
          ftr: 0.278,
          "3par": 0.382,
          ts_pct: 0.581,
          efg_pct: 0.539,
          tov_pct: 11.9,
          orb_pct: 24.4,
          ft_fga: 0.226,
          efg_pct_opponent: 0.53,
          tov_pct_opponent: 11.1,
          drb_pct: 77.8,
          ft_fga_opponent: 0.19,
          arena: "State Farm Arena",
          attend: 59288,
          attend_per_game: 1647,
        },
        "2022": {
          year: 2022,
          age: 26.1,
          w: 43,
          l: 39,
          pw: 45,
          pl: 37,
          mov: 1.56,
          sos: -0.01,
          srs: 1.55,
          ortg: 116.5,
          drtg: 114.9,
          nrtg: 1.6,
          pace: 97.7,
          ftr: 0.253,
          "3par": 0.39,
          ts_pct: 0.581,
          efg_pct: 0.543,
          tov_pct: 10.8,
          orb_pct: 23,
          ft_fga: 0.205,
          efg_pct_opponent: 0.543,
          tov_pct_opponent: 11.5,
          drb_pct: 76.9,
          ft_fga_opponent: 0.177,
          arena: "State Farm Arena",
          attend: 672742,
          attend_per_game: 16408,
        },
        "2023": {
          year: 2023,
          age: 24.9,
          w: 41,
          l: 41,
          pw: 42,
          pl: 40,
          mov: 0.29,
          sos: 0.02,
          srs: 0.32,
          ortg: 116.6,
          drtg: 116.3,
          nrtg: 0.3,
          pace: 100.7,
          ftr: 0.244,
          "3par": 0.331,
          ts_pct: 0.579,
          efg_pct: 0.541,
          tov_pct: 11.2,
          orb_pct: 25.1,
          ft_fga: 0.2,
          efg_pct_opponent: 0.552,
          tov_pct_opponent: 12.4,
          drb_pct: 75.8,
          ft_fga_opponent: 0.206,
          arena: "State Farm Arena",
          attend: 719787,
          attend_per_game: 17556,
        },
        "2024": {
          year: 2024,
          age: 26.2,
          w: 36,
          l: 46,
          pw: 36,
          pl: 46,
          mov: -2.18,
          sos: -0.19,
          srs: -2.38,
          ortg: 117.2,
          drtg: 119.4,
          nrtg: -2.2,
          pace: 100.1,
          ftr: 0.251,
          "3par": 0.408,
          ts_pct: 0.576,
          efg_pct: 0.539,
          tov_pct: 11.6,
          orb_pct: 27.1,
          ft_fga: 0.2,
          efg_pct_opponent: 0.572,
          tov_pct_opponent: 12.4,
          drb_pct: 75.2,
          ft_fga_opponent: 0.192,
          arena: "State Farm Arena",
          attend: 696418,
          attend_per_game: 16986,
        },
      },
    ],
  };

  const teamTop: TeamTopPerformers = {
    _id: "ATL",
    topPerformers: [
      {
        blk: { total: "1.5", playerID: ["28218011729"] },
        ast: { total: "10.8", playerID: ["28978646789"] },
        tptfgm: { total: "3.2", playerID: ["28978646789"] },
        stl: { total: "1.4", playerID: ["28008317499"] },
        TOV: { total: "4.4", playerID: ["28978646789"] },
        pts: { total: "25.7", playerID: ["28978646789"] },
        reb: { total: "10.6", playerID: ["28218011729"] },
      },
    ],
  };

  const teamVideos: TeamVideos = {
    _id: "ATL",
    videos: [
      {
        "0": "https://www.youtube.com/watch?v=1tvCm9lqRZg&pp=ygUNYXRsYW50YSBoYXdrcw%3D%3D",
      },
    ],
  };


  const teamData: TeamData = {
    _id: teamInfo._id,
    teamInfo: teamInfo,
    teamVideos: teamVideos,
    topPerformers: teamTop,
    teamStats: teamStats,
  }

  const nbaComName = teamInfo.name || "Default Name";
  const [firstname, lastname] = nbaComName.split(" ");

  // Use a default headshot if none is provided
  const headshotUrl = teamInfo?.logo || "";

  return (
    <div className="bg-black">
      <section className="banner w-full h-72 Searchbg"></section>
      <section className="tabs_Wrapper grid grid-cols-1 relative h-32 w-full text-primary-main -mt-20">
        <div className="placeholdn h-10 ml-72">
          <p className="fName text-sm font-extralight">{firstname}</p>
          <p className="lName font-bold text-2xl">{lastname}</p>
        </div>
        <img
          className="w-32 absolute left-40 bottom-8 md:left-80 md:bottom-6 lg:left-36 border-2 rounded-lg pt-3"
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
