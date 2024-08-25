import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./Overview/Overview";
import { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Matches from "./Matches/Matches";
import Season from "./SeasonStats/Season";
import Career from "./CareerStats/Career";

const TabsSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<
    "overview" | "matches" | "seasonStats" | "careerStats"
  >("overview");

  const handleTabsChange = (value: string) => {
    setSelectedTab(
      value as "overview" | "matches" | "seasonStats" | "careerStats"
    );
  };

  const changeToMatchesTab = () => {
    setSelectedTab("matches");
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
                  | "matches"
                  | "seasonStats"
                  | "careerStats"
              )
            }
          >
            <option value="overview">Overview</option>
            <option value="matches">Matches</option>
            <option value="seasonStats">Season Stats</option>
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
            value="matches"
            className={`tab-item ${selectedTab === "matches" ? "active" : ""}`}
            onClick={() => handleTabsChange("matches")}
          >
            Matches
          </TabsTrigger>
          <TabsTrigger
            value="seasonStats"
            className={`tab-item ${
              selectedTab === "seasonStats" ? "active" : ""
            }`}
            onClick={() => handleTabsChange("seasonStats")}
          >
            Season Stats
          </TabsTrigger>
          <TabsTrigger
            value="careerStats"
            className={`tab-item ${
              selectedTab === "careerStats" ? "active" : ""
            }`}
            onClick={() => handleTabsChange("careerStats")}
          >
            Career Stats
          </TabsTrigger>
        </TabsList>
        <div className="tabs-content bg-background-dash">
          <TabsContent value="overview">
            <Overview changeTabToMatches={changeToMatchesTab} />
            <Footer />
          </TabsContent>
          <TabsContent value="matches">
            <Matches />
            <Footer />
          </TabsContent>
          <TabsContent value="seasonStats">
            <Season changeTabToMatches={changeToMatchesTab} />
            <Footer />
          </TabsContent>
          <TabsContent value="careerStats">
            <Career /> <Footer />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default TabsSection;
