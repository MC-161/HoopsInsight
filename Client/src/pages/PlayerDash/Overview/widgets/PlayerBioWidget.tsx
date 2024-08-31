import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import MetricOption from "@/pages/PlayerDash/Overview/components/MetricOption";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import { PlayerData } from "@/types/Dash/PlayerDash";

interface BioProps {
  playerData: PlayerData
}

const PlayerBioWidget:React.FC<BioProps> = ({playerData}) => {
  const PlayerInfo = [
    {
      postion: playerData.playerImgBio.body.pos,
      height: playerData.playerImgBio.body.height,
      birth: playerData.playerImgBio.body.bDay,
      weight: playerData.playerImgBio.body.weight,
      exp: playerData.playerImgBio.body.exp,
      college: playerData.playerImgBio.body.college || "No College",
    },
  ];
  return (
    <WidgetWrapper className=" h-56 shadow-sm shadow-white ">
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
