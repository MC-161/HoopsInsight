// components/TabsSection.jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./Overview";

const TabsSection = () => (
  <section className="tabs flex items-center">
    <Tabs className="bg-background-alt w-full h-16 " defaultValue="overview">
      <TabsList className="h-full ml-72">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="matches">Matches</TabsTrigger>
        <TabsTrigger value="seasonStats">Season Stats</TabsTrigger>
        <TabsTrigger value="careerStats">Career Stats</TabsTrigger>
      </TabsList>
      <div className="tabs-content bg-background-dash">
        <TabsContent value="overview"><Overview/></TabsContent>
        <TabsContent value="matches">Matches Content</TabsContent>
        <TabsContent value="seasonStats">Season Stats Content</TabsContent>
        <TabsContent value="careerStats">Career Stats Content</TabsContent>
      </div>
    </Tabs>
  </section>
);

export default TabsSection;