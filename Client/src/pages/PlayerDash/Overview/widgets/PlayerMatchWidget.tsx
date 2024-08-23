import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import TableHeader from "@/pages/PlayerDash/Overview/components/TableHeader";
import OverTable from "@/pages/PlayerDash/Overview/components/Overtable";
import GamePerformance from "@/pages/PlayerDash/Overview/components/PlayerTable";

interface PlayerMatchWidgetProps {
  changeTabToMatches: () => void;
}

const PlayerMatchWidget: React.FC<PlayerMatchWidgetProps> = ({ changeTabToMatches }) => {
  return (
    <WidgetWrapper className="shadow-md shadow-white md: lg:h-[620px]">
      <TableHeader/>
      <OverTable></OverTable>
      <GamePerformance changeTabToMatches={changeTabToMatches} />
    </WidgetWrapper>
  );
};

export default PlayerMatchWidget;
