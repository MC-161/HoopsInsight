import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import MetricOption from "@/pages/PlayerDash/Overview/components/MetricOption";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";

const PlayerInfo = [
  {
    pts: "321",
    reb: "233",
    ast: "123",
    stl: "122",
    blk: "432",
    "fg%": "54",
    "3p%": "60",
    "ft%": "75 Forest",
  },
];

const KeyMetrics = () => {
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
