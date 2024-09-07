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
  return (
    <div className="bg-background-alt h-[550px] rounded-md shadow-sm shadow-white">
      <HeadingSection icon={BarChartOutlinedIcon} title="Visuals" />
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 pt-3 px-4">
        <div className="col-span-2">
          <WinLossWidget />
        </div>
        <div className="col-span-3">
          <Breakdown teamData={teamData} />
        </div>
        <div className="col-span-5">
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
