import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import MetricOption from "@/pages/PlayerDash/Overview/components/MetricOption";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import { PlayerData } from "@/types/Dash/PlayerDash";

interface KeyMetricsProps{
  playerData: PlayerData
}

const KeyMetrics:React.FC<KeyMetricsProps> = ({playerData}) => {
  const stats = playerData.playerStats.stats[0]
  // Get all the years from the keys of the stats object
  const years = Object.keys(stats).map(year => Number(year));
  // Find the latest year
  const latestYear = Math.max(...years);
  const latestYearStr:string = latestYear.toString();
  const PlayerInfo = [
    {
      pts: stats[latestYearStr].pts,
      reb: stats[latestYearStr].drb,
      ast: stats[latestYearStr].ast,
      stl: stats[latestYearStr].stl,
      blk: stats[latestYearStr].blk,
      "fg%": Math.ceil(stats[latestYearStr].fg_pct * 100),
      "3p%": Math.ceil(stats[latestYearStr]["3p_pct"] * 100),
      "ft%": Math.ceil(stats[latestYearStr].ft_pct * 100),
    },
  ];  
  return (
    <WidgetWrapper className=" h-72 shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Key Metrics"/>
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
