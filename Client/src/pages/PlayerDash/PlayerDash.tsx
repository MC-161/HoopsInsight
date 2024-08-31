import { useLocation } from "react-router-dom";
import TabsSection from "./TabsSection";
const PlayerDash = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const playerId = queryParams.get("id");
  const playerData = {
    playerStats: {
      _id: "2871601440",
      name: "LeBron James",
      stats: {
        2023: {
          year: 2023,
          age: 38,
          tm: "LAL",
          g: 55,
          gs: 54,
          mp: 1954,
          fg: 609,
          fga: 1219,
          fg_pct: 0.5,
          "3p": 121,
          "3pa": 377,
          "3p_pct": 0.321,
          "2p": 488,
          "2pa": 842,
          "2p_pct": 0.58,
          efg_pct: 0.549,
          ft: 251,
          fta: 327,
          ft_pct: 0.768,
          orb: 65,
          drb: 392,
          trb: 457,
          ast: 375,
          stl: 50,
          blk: 32,
          tov: 178,
          pf: 88,
          pts: 1590,
        },
        2024: {
          year: 2024,
          age: 39,
          tm: "LAL",
          g: 71,
          gs: 71,
          mp: 2504,
          fg: 685,
          fga: 1269,
          fg_pct: 0.54,
          "3p": 149,
          "3pa": 363,
          "3p_pct": 0.41,
          "2p": 536,
          "2pa": 906,
          "2p_pct": 0.592,
          efg_pct: 0.599,
          ft: 303,
          fta: 404,
          ft_pct: 0.75,
          orb: 61,
          drb: 457,
          trb: 518,
          ast: 589,
          stl: 89,
          blk: 38,
          tov: 245,
          pf: 78,
          pts: 1822,
        },
      },
      createdAt: "2024-07-07T15:32:34.036Z",
      updatedAt: "2024-07-07T15:32:34.036Z",
      __v: 0,
    },
    playerImgBio: {
      statusCode: 200,
      body: {
        espnID: "1966",
        espnName: "LeBron James",
        nbaComName: "LeBron James",
        college: "—",
        weight: "250",
        nbaComHeadshot:
          "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
        jerseyNum: "23",
        team: "LAL",
        bDay: "12/30/1984",
        espnHeadshot:
          "https://a.espncdn.com/i/headshots/nba/players/full/1966.png",
        nbaComID: "2544",
        height: "6-9",
        lastGamePlayed: "20240429_LAL@DEN",
        pos: "SF",
        exp: "21",
        stats: {
          blk: "38",
          fga: "1290",
          DefReb: "467",
          ast: "593",
          ftp: "75.1",
          tptfgp: "40.9",
          tptfgm: "149",
          stl: "91",
          fgm: "695",
          pts: "1846",
          reb: "529",
          fgp: "53.9",
          fta: "409",
          mins: "2543",
          trueShootingAttempts: "1470.0",
          gamesPlayed: "72",
          TOV: "250",
          tptfga: "364",
          OffReb: "62",
          ftm: "307",
        },
        // Added fields
        espnLink: "https://www.espn.com/nba/player/_/id/1966",
        fantasyProsLink:
          "https://www.fantasypros.com/nba/players/lebron-james.php",
        yahooLink: "https://sports.yahoo.com/nba/players/2544",
      },
    },
  };

  const [firstname, lastname] =
    playerData.playerImgBio.body.nbaComName.split(" ");
  return (
    <div className="bg-black">
      <section className="banner w-full h-72 Searchbg"></section>
      <section className="tabs_Wrapper grid grid-cols-1 relative h-32 w-full text-primary-main -mt-20">
        <div className="placeholdn h-10 ml-72">
          <p className="fName text-sm font-extralight">{firstname}</p>
          <p className="lName font-bold text-2xl">{lastname}</p>
        </div>
        <img
          className="w-32 absolute left-40 md:left-80 md:bottom-6 lg:left-36 border-2 rounded-lg pt-3"
          src={
            playerData.playerImgBio.body.nbaComHeadshot ||
            "https://cdn.nba.com/headshots/nba/latest/1040x760/2730.png"
          }
          alt=""
        />
        <div className="">
          <TabsSection playerData={playerData} />
        </div>
      </section>
    </div>
  );
};

export default PlayerDash;
