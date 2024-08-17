import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import MetricOption from "../components/MetricOption";
import HeadingSection from "../components/HeadingSection";

const PlayerInfo = [
  {
    postion: "PG",
    height: "6-1",
    birth: "7/11/1978",
    weight: "175",
    exp: "15",
    college: "Wake Forest",
  },
];

const PlayerBioWidget = () => {
  return (
    <WidgetWrapper className=" h-56 ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Bio"/>
      <section className="keyMetrics">
        <div className="grid grid-cols-3 pt-3 px-3 gap-4">
          {PlayerInfo.map((player, index) =>
            Object.entries(player).map(([metricName, metric]) => (
              <MetricOption
                key={`${index}-${metricName}`}
                metricName={metricName}
                metric={metric}
              />
            ))
          )}
        </div>
      </section>
    </WidgetWrapper>
  );
};

export default PlayerBioWidget;
