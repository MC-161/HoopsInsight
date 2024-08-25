import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import RadarChart from "@/components/charts/Radar";


const OverallPerformance = () => {
  return (
    <WidgetWrapper className="h-72 shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Player Performance"/>
      <section className="Chart h-[90%] flex pt-4 justify-center p-2">
        <RadarChart/>
      </section>
    </WidgetWrapper>
  );
};

export default OverallPerformance;
