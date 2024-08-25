import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import DoughnutChart from "../components/doughnut";

const Breakdown = () => {
  return (
    <WidgetWrapper className="h-72 shadow-sm shadow-white ">
      <HeadingSection icon={ContactEmergencyOutlinedIcon} title="Breakdown"/>
      <section className="Chart h-[90%] flex pt-4 justify-center">
        <DoughnutChart/>
      </section>
    </WidgetWrapper>
  );
};

export default Breakdown;
