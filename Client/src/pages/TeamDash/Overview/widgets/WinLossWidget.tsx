import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import SingleStatCard from "@/pages/TeamDash/Overview/components/SingleStatCard";


interface WinLossWidgetProps{
  w: number,
  l: number,
}
const WinLossWidget:React.FC<WinLossWidgetProps> = ({w, l}) => {
  return (
    <WidgetWrapper className="bg-transparent">
      <div className=" flex flex-col gap-7 items-center">
        <SingleStatCard statName="Wins" statVal={w} val="pos"/>
        <SingleStatCard statName="Losses" statVal={l} val="neg"/>
      </div>
    </WidgetWrapper>
  );
}
 
export default WinLossWidget;