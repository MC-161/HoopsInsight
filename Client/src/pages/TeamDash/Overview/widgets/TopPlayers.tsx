import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import {TeamData } from "@/types/Dash/TeamDash";
import { useNavigate } from "react-router-dom";
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
interface TopPlayersWidgetProps{
  teamData: TeamData;
}

const TopPlayersWidget: React.FC<TopPlayersWidgetProps> = ({ teamData }) => {
  const topPerformers = teamData.topPerformers.topPerformers[0];
  const navigate = useNavigate()
  // Explicitly define the valid stat categories (keys of StatLeaders)
  const statCategories: (keyof typeof topPerformers)[] = [
    'blk',
    'ast',
    'tptfgm',
    'stl',
    'TOV',
    'pts',
    'reb'
  ];

  return (
    <section className="TopPerfomerGrid">
      <HeadingSection icon={MilitaryTechOutlinedIcon} title="Top Performers"/>
      <div className="TopPerformerWrapper grid grid-cols-2 md:grid-cols-7 gap-4 pt-3">
        {statCategories.map((stat, index) => (
          <div key={index} onClick={() => navigate(`/player-dash?id=${topPerformers[stat].playerID.join(", ")}`)} className=" shadow-white p-4 rounded-md shadow-sm hover:shadow-glow cursor-pointer bg-background-alt">
            <h3 className="text-lg font-bold capitalize text-white">{stat}</h3>
            <p className="text-white">Total: {topPerformers[stat].total}</p>
            <p className="text-gray-400">
              Player ID: {topPerformers[stat].playerID.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPlayersWidget;
