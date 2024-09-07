import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import SingleStatCard from "@/pages/TeamDash/Overview/components/SingleStatCard";
const WinLossWidget = () => {
  return (
    <WidgetWrapper className="bg-transparent">
      <div className=" flex flex-col gap-7 items-center">
        <SingleStatCard statName="Wins" statVal={45} val="pos"/>
        <SingleStatCard statName="Losses" statVal={15} val="neg"/>
      </div>
    </WidgetWrapper>
  );
}
 
export default WinLossWidget;