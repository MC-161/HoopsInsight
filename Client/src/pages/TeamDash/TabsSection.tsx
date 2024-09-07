import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Overview from "@/pages/TeamDash/Overview/Overview";
import TeamStats from "./TeamStats/TeamStats";
import Roster from "./Roster/Roster";


interface TabsSectionProps{
  teamData: any,
}

const TabsSection: React.FC<TabsSectionProps> = ({teamData}) => {
  const [selectedTab, setSelectedTab] = useState<
    "overview" | "teamStats" | "roster"
  >("overview");

  const handleTabsChange = (value: string) => {
    setSelectedTab(
      value as "overview" | "teamStats" | "roster"
    );
  };

  const changeToteamStatsTab = () => {
    setSelectedTab("teamStats");
  };

  return (
    <section className="tabs flex flex-col">
      <Tabs
        className="bg-background-alt w-full h-16"
        value={selectedTab}
        onValueChange={handleTabsChange}
      >
        <div className="lg:hidden mb-4">
          <select
            className="w-32 mt-3 border rounded-md p-2 ml-4 bg-background-alt text-white"
            value={selectedTab}
            onChange={(e) =>
              setSelectedTab(
                e.target.value as
                  | "overview"
                  | "teamStats"
                  | "roster"
              )
            }
          >
            <option value="overview">Overview</option>
            <option value="teamStats">Team Stats</option>
            <option value="roster">Season Stats</option>
            <option value="careerStats">Career Stats</option>
          </select>
        </div>
        <TabsList className="h-full ml-72 hidden lg:block">
          <TabsTrigger
            value="overview"
            className={`tab-item ${selectedTab === "overview" ? "active" : ""}`}
            onClick={() => handleTabsChange("overview")}
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="teamStats"
            className={`tab-item ${selectedTab === "teamStats" ? "active" : ""}`}
            onClick={() => handleTabsChange("teamStats")}
          >
            Team Stats
          </TabsTrigger>
          <TabsTrigger
            value="roster"
            className={`tab-item ${
              selectedTab === "roster" ? "active" : ""
            }`}
            onClick={() => handleTabsChange("roster")}
          >
            Roster
          </TabsTrigger>
        </TabsList>
        <div className="tabs-content bg-background-dash">
          <TabsContent value="overview">
            <Overview teamData={teamData}/>
            <Footer />
          </TabsContent>
          <TabsContent value="teamStats">
            <TeamStats teamData={teamData}/>
            <Footer />
          </TabsContent>
          <TabsContent value="roster">
            <Roster teamData={teamData}/>
            <Footer />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default TabsSection;
