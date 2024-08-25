import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import TableHeader from "@/pages/PlayerDash/Overview/components/TableHeader";
import OverTable from "@/pages/PlayerDash/Overview/components/Overtable";
import GamePerformance from "@/pages/PlayerDash/Matches/components/PlayerTable";
const PlayerMatchWidget = () => {
  return (
    <WidgetWrapper className="shadow-md shadow-white md:min-h-[890px]">
      <TableHeader/>
      <OverTable></OverTable>
      <GamePerformance></GamePerformance>
    </WidgetWrapper>
  );
};

export default PlayerMatchWidget;
