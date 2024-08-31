import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import TableHeader from "@/pages/PlayerDash/Overview/components/TableHeader";
import OverTable from "@/pages/PlayerDash/Overview/components/Overtable";
import GamePerformance from "@/pages/PlayerDash/Overview/components/PlayerTable";
import { PlayerData } from "@/types/Dash/PlayerDash";
import { PlayerGameData } from "@/types/Dash/PlayerDash";

interface PlayerMatchWidgetProps {
  changeTabToMatches: () => void,
  playerData: PlayerData,
}
const dummyData:PlayerGameData = {
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
};

const PlayerMatchWidget: React.FC<PlayerMatchWidgetProps> = ({ changeTabToMatches, playerData }) => {
  return (
    <WidgetWrapper className="shadow-md shadow-white lg:h-[640px]">
      <TableHeader/>
      <OverTable gameData={dummyData} playerData={playerData}/>
      <GamePerformance changeTabToMatches={changeTabToMatches} />
    </WidgetWrapper>
  );
};

export default PlayerMatchWidget;
