import { TeamData } from "@/types/Dash/TeamDash";
import StackedBar from "../components/Stacked";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
interface WinLossBarProps{
  teamData: TeamData
}
const WinLossBar:React.FC<WinLossBarProps> = ({teamData}) => {
  const stats = teamData.teamStats.stats[0]
  const labels = Object.keys(stats)
  const wins = labels.map(year => {
    return stats[year].w;
  })
  const losses = labels.map(year => {
    return stats[year].l;
  })

  return (
    <WidgetWrapper className="h-52 shadow-sm shadow-white">
      <HeadingSection icon={EmojiEventsOutlinedIcon} title="Win Loss Record"/>
      <div className="h-[80%]">
        <StackedBar
          labels={labels} // Example years
          wins={wins} // Example win data
          losses={losses} // Example loss data
        />
      </div>
    </WidgetWrapper>
  );
};

export default WinLossBar;
