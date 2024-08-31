import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import MetricOption from "@/pages/PlayerDash/Overview/components/MetricOption";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import { PlayerData } from "@/types/Dash/PlayerDash";

interface KeyMetricsProps{
  playerData: PlayerData
}

const KeyMetrics:React.FC<KeyMetricsProps> = ({playerData}) => {
  const PlayerInfo = [
    {
      pts: playerData.playerStats.stats[new Date().getFullYear()].pts,
      reb: playerData.playerStats.stats[new Date().getFullYear()].drb,
      ast: playerData.playerStats.stats[new Date().getFullYear()].ast,
      stl: playerData.playerStats.stats[new Date().getFullYear()].stl,
      blk: playerData.playerStats.stats[new Date().getFullYear()].blk,
      "fg%": playerData.playerStats.stats[new Date().getFullYear()].fg_pct * 100,
      "3p%": playerData.playerStats.stats[new Date().getFullYear()]["3p_pct"] * 100,
      "ft%": playerData.playerStats.stats[new Date().getFullYear()].ft_pct * 100,
    },
  ];  
  return (
    <WidgetWrapper className=" h-72 shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Bio"/>
      <section className="keyMetrics h-[80%] flex flex-col justify-center">
        <div className="grid grid-cols-4 pt-3 px-3 gap-4">
          {PlayerInfo.map((player, index) =>
            Object.entries(player).map(([metricName, metric]) => (
              <MetricOption
                key={`${index}-${metricName}`}
                metricName={metricName}
                metric={metric}
                className="h-24"
              />
            ))
          )}
        </div>
      </section>
    </WidgetWrapper>
  );
};

export default KeyMetrics;
