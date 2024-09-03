import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import MetricOption from "@/pages/PlayerDash/Overview/components/MetricOption";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import { getTotalStats, PlayerData } from "@/types/Dash/PlayerDash";

interface KeyMetricsProps{
  playerData: PlayerData
}

const KeyMetrics:React.FC<KeyMetricsProps> = ({playerData}) => {
  const totals = getTotalStats(playerData.playerStats)
  
  const PlayerInfo = [
    {
      pts: totals.totalPoints,
      reb: totals.totalAssists,
      ast: totals.totalRebounds,
      stl: totals.totalSteals,
      blk: totals.totalBlocks,
      fg: totals.totalFieldGoals,
      "3p": totals.totalThreePointers,
      ft: totals.totalFreeThrows,
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
