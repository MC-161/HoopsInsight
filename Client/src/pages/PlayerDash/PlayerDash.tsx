import { useLocation } from "react-router-dom";
import TabsSection from "./TabsSection";

const PlayerDash = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const playerId = queryParams.get("id");

  return (
    <div className="bg-black">
      <section className="banner w-full h-72 Searchbg"></section>
      <section className="tabs_Wrapper grid grid-cols-1 relative h-32 w-full text-primary-main -mt-20">
        <div className="placeholdn h-10"></div>
        <img
          className="w-32 absolute bottom-6 left-36 border-2 rounded-lg pt-3"
          src="https://cdn.nba.com/headshots/nba/latest/1040x760/2730.png"
          alt=""
        />
        <div className="">
          <TabsSection/>
        </div>
      </section>
    </div>
  );
};

export default PlayerDash;
