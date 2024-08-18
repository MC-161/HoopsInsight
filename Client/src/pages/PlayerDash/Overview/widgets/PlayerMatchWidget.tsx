import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import TableHeader from "@/pages/PlayerDash/Overview/components/TableHeader";
import OverTable from "@/pages/PlayerDash/Overview/components/Overtable";
import GamePerformance from "@/pages/PlayerDash/Overview/components/PlayerTable";
const PlayerMatchWidget = () => {
  return (
    <WidgetWrapper className="shadow-sm shadow-background-alt2 md: lg:h-[620px]">
      <TableHeader/>
      <OverTable></OverTable>
      <GamePerformance></GamePerformance>
    </WidgetWrapper>
  );
};

export default PlayerMatchWidget;
