import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import TableHeader from "@/pages/PlayerDash/Overview/components/TableHeader";
import OverTable from "@/pages/PlayerDash/Overview/components/Overtable";
import GamePerformance from "@/pages/PlayerDash/Overview/components/PlayerTable";
import { PlayerData } from "@/types/Dash/PlayerDash";
import { PlayerGameData } from "@/types/Dash/PlayerDash";

interface PlayerMatchWidgetProps {
  changeTabToMatches: () => void,
  playerData: PlayerData,
  gameData: PlayerGameData
}

const PlayerMatchWidget: React.FC<PlayerMatchWidgetProps> = ({ changeTabToMatches, playerData, gameData }) => {
  return (
    <WidgetWrapper className="shadow-md shadow-white lg:h-[640px]">
      <TableHeader/>
      <OverTable gameData={gameData} playerData={playerData}/>
      <GamePerformance changeTabToMatches={changeTabToMatches} />
    </WidgetWrapper>
  );
};

export default PlayerMatchWidget;
