import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import TableHeader from "@/pages/PlayerDash/Overview/components/TableHeader";
import OverTable from "@/pages/PlayerDash/Overview/components/Overtable";
import GamePerformance from "@/pages/PlayerDash/Matches/components/PlayerTable";
import { PlayerData, PlayerGameData } from "@/types/Dash/PlayerDash";

interface PlayerMatchWidgetProps{
  gameData: PlayerGameData
  playerData: PlayerData
}

const PlayerMatchWidget: React.FC<PlayerMatchWidgetProps> = ({gameData, playerData }) => {
  return (
    <WidgetWrapper className="shadow-md shadow-white md:min-h-[890px]">
      <TableHeader/>
      <OverTable gameData={gameData} playerData={playerData}></OverTable>
      <GamePerformance gameData={gameData}></GamePerformance>
    </WidgetWrapper>
  );
};

export default PlayerMatchWidget;
