import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import ScoringAverages from "@/components/charts/StackedChart";
import EfficiencyContent from "../components/EfficiencyContent";
import DefensiveBarChart from "../components/DefensiveBarChart";
import LineChart from "../components/Trend";
import TurnoversReboundsChart from "../components/RT";
import { PlayerGameData } from "@/types/Dash/PlayerDash";
import { calculatePlayerMetrics } from "@/pages/utils/calculateMetrics";
const ChartsWidget = () => {
  const dummyData: PlayerGameData = {
    "20240429_LAL@DEN": {
      blk: "0",
      OffReb: "1",
      ftp: "71.4",
      DefReb: "8",
      plusMinus: "+3",
      stl: "4",
      pts: "30",
      tech: "0",
      team: "LAL",
      TOV: "1",
      fga: "21",
      ast: "11",
      tptfgp: "42.9",
      teamAbv: "LAL",
      mins: "44",
      fgm: "11",
      fgp: "52.4",
      reb: "9",
      teamID: "14",
      tptfgm: "3",
      fta: "7",
      tptfga: "7",
      longName: "LeBron James",
      PF: "4",
      playerID: "2871601440",
      ftm: "5",
      gameID: "20240429_LAL@DEN",
      fantasyPoints: "68.75"
    },
    "20240427_DEN@LAL": {
      blk: "1",
      OffReb: "1",
      ftp: "100.0",
      DefReb: "4",
      plusMinus: "+1",
      stl: "3",
      pts: "30",
      tech: "0",
      team: "LAL",
      TOV: "6",
      fga: "23",
      ast: "4",
      tptfgp: "0.0",
      teamAbv: "LAL",
      mins: "39",
      fgm: "14",
      fgp: "60.9",
      reb: "5",
      teamID: "14",
      tptfgm: "0",
      fta: "2",
      tptfga: "2",
      longName: "LeBron James",
      PF: "0",
      playerID: "2871601440",
      ftm: "2",
      gameID: "20240427_DEN@LAL",
      fantasyPoints: "48.25"
    },
    "20240425_GSW@BOS": {
      blk: "2",
      OffReb: "3",
      ftp: "80.0",
      DefReb: "7",
      plusMinus: "-5",
      stl: "5",
      pts: "25",
      tech: "1",
      team: "GSW",
      TOV: "3",
      fga: "18",
      ast: "6",
      tptfgp: "50.0",
      teamAbv: "GSW",
      mins: "42",
      fgm: "9",
      fgp: "50.0",
      reb: "10",
      teamID: "5",
      tptfgm: "4",
      fta: "8",
      tptfga: "8",
      longName: "Stephen Curry",
      PF: "2",
      playerID: "2871601450",
      ftm: "6",
      gameID: "20240425_GSW@BOS",
      fantasyPoints: "56.50"
    },
    "20240424_BOS@GSW": {
      blk: "1",
      OffReb: "2",
      ftp: "75.0",
      DefReb: "6",
      plusMinus: "+8",
      stl: "2",
      pts: "22",
      tech: "0",
      team: "BOS",
      TOV: "4",
      fga: "20",
      ast: "8",
      tptfgp: "33.3",
      teamAbv: "BOS",
      mins: "39",
      fgm: "8",
      fgp: "40.0",
      reb: "8",
      teamID: "6",
      tptfgm: "2",
      fta: "5",
      tptfga: "6",
      longName: "Jayson Tatum",
      PF: "1",
      playerID: "2871601460",
      ftm: "3",
      gameID: "20240424_BOS@GSW",
      fantasyPoints: "48.00"
    },
    "20240422_MIA@PHI": {
      blk: "1",
      OffReb: "4",
      ftp: "66.7",
      DefReb: "9",
      plusMinus: "+6",
      stl: "3",
      pts: "27",
      tech: "0",
      team: "MIA",
      TOV: "5",
      fga: "22",
      ast: "5",
      tptfgp: "25.0",
      teamAbv: "MIA",
      mins: "41",
      fgm: "10",
      fgp: "45.5",
      reb: "13",
      teamID: "7",
      tptfgm: "1",
      fta: "6",
      tptfga: "4",
      longName: "Jimmy Butler",
      PF: "3",
      playerID: "2871601470",
      ftm: "4",
      gameID: "20240422_MIA@PHI",
      fantasyPoints: "52.75"
    },
  }; 

  // Extract labels (game IDs) and data points (points scored) from dummyData
  const labels = Object.keys(dummyData).map((_, index) => `G${index + 1}`);
  const dataPoints = Object.values(dummyData).map(game => parseInt(game.pts, 10));

  const metrics = calculatePlayerMetrics(dummyData)
  const efficiency = {
    playerEF: metrics.playerEfficiencyRating,
    efg: metrics.eFGPercentage,
    trueShoot: metrics.trueShootingPercentage
  }

  const DefensivedataPoints = Object.values(dummyData).map(game => parseInt(game.reb, 10));
  const turnOverdataPoints = Object.values(dummyData).map(game => parseInt(game.TOV, 10));

  const scoringAverages = Object.keys(dummyData).map((gameID) => {
    const gameData = dummyData[gameID];
    const pts = parseFloat(gameData.pts);
    const fga = parseFloat(gameData.fga);
    return fga !== 0 ? (pts / fga).toFixed(2) : "0.00";
  });


  return (
    <WidgetWrapper className="h-full shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Player Analysis"/>
      <section className="Chart h-[90%] grid grid-cols-1 lg:grid-cols-3 gap-2 pt-4 px-3 py-5">
        <div><ScoringAverages labels={labels} dataPoints={scoringAverages} /></div>
        <div><EfficiencyContent efficiency={efficiency}/></div>
        <div><DefensiveBarChart labels={labels} turnoversData={turnOverdataPoints} reboundsData={DefensivedataPoints}/></div>
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="col-span-2"><LineChart labels={labels} dataPoints={dataPoints} /></div>
          <div className="col-span-2"><TurnoversReboundsChart turnoversData={turnOverdataPoints} reboundsData={DefensivedataPoints} labels={labels}/></div>
        </div>
      </section>
    </WidgetWrapper>
  );
};

export default ChartsWidget;
