import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import Breakdown from "../components/Breakdown";
import NetRating from "./NetRating";
import OffensiveDefensive from "./OffensiveDefense";
import WinLossBar from "./WinLossBar";
import WinLossWidget from "./WinLossWidget";
import { TeamData } from "@/types/Dash/TeamDash";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

interface ChartsWidgetProps{
  teamData:TeamData
}

const ChartsWidget:React.FC<ChartsWidgetProps> = ({teamData}) => {
  const stats = teamData.teamStats.stats[0]
  // Get all the years from the keys of the stats object
  const years = Object.keys(stats).map(year => Number(year));
  // Find the latest year
  const latestYear = Math.max(...years);
  const wins = stats[latestYear].w
  const loss = stats[latestYear].l
  return (
    <div className="bg-background-alt min-h-[550px] rounded-md shadow-sm shadow-white pb-8 md:pb-0">
      <HeadingSection icon={BarChartOutlinedIcon} title="Visuals" />
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 pt-3 px-4">
        <div className="md:col-span-3 lg:col-span-2">
          <WinLossWidget w={wins} l={loss}/>
        </div>
        <div className="md:col-span-3 lg:col-span-3">
          <Breakdown teamData={teamData} />
        </div>
        <div className="md:col-span-4 lg:col-span-5">
          <WinLossBar teamData={teamData} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 px-4">
        <NetRating teamData={teamData} />
        <OffensiveDefensive teamData={teamData} />
      </div>
    </div>
  );
};

export default ChartsWidget;
