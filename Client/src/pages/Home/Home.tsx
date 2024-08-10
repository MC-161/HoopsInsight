import Landing from "@/pages/Home/components/Landing";
import NBALOGO from "@/assets/Nav/NbaLogo.png";
import ESPNLOGO from "@/assets/Nav/Espn.png";
import BRLOGO from "@/assets/Nav/BR.png";
import FeaturesSection from "./components/FeatureSection";
import LightBar from "@/components/Lightbar";
import UltimateNBACompanion from "@/pages/Home/components/UltCompanion";
import Footer from "@/components/Footer/Footer";
import Dash1 from "@/assets/Landing/dash.png"
import { useEffect } from "react";
import useAssetsLoading from "@/hooks/useAssetLoading";

const assets = [
  { src: Dash1 },
  { src: NBALOGO },
  { src: BRLOGO },
  { src: ESPNLOGO }
];


interface HomeProps {
  onLoad: () => void;
}



const Home: React.FC<HomeProps> = ({ onLoad }) => {
  const assetsLoaded = useAssetsLoading(assets);

  useEffect(() => {
    if (assetsLoaded) {
      onLoad(); // Notify parent component when all assets are loaded
    }
  }, [assetsLoaded, onLoad]);

  return (
    <div className="h-screen">
      <Landing></Landing>
      <div className="h-fit bg-black pb-20">
        <section className="Dash h-fit pb-10">
          <section className="heading w-full flex flex-col items-center pt-8">
            <p className="text-primary-main font-nomal md:text-2xl tracking-[0.25em]">
              NBA Team and Player Dashboards
            </p>
            <p className="text-primary-alt text-center px-12 md:px-32 py-4 text-xs md:text-sm">
              Explore in-depth statistics, performance analytics, and player
              insights for your favorite NBA teams and players. Dive into
              comprehensive data visualizations and stay updated with the latest
              trends and player performances across the league.
            </p>
          </section>
          <section className="dashboards grid md:grid-cols-2 px-8 gap-8 md:gap-0">
            <div className="dash md:p-10">
              <section className="h-[200px]  lg:h-[400px] rounded-md">
                <img className="h-full w-full" src={Dash1} alt="" />
              </section>
            </div>
            <div className="dash md:p-10">
              <section className="h-[200px] lg:h-[400px] rounded-md">
                <img className="h-full w-full" src={Dash1} alt="" />
              </section>
            </div>
          </section>
          <div className="Powered text-primary-main flex flex-col items-center">
            <div className="flex flex-col items-center justify-center mt-4">
              <p className="font-extralight pt-10 lg:pt-0">Powered By</p>
              <section className="logos flex items-center gap-6 mt-3">
                <img className="w-14" src={NBALOGO} alt="" />
                <img className="h-6" src={BRLOGO} alt="" />
                <img className="w-24" src={ESPNLOGO} alt="" />
              </section>
            </div>
          </div>
        </section>

        <LightBar  length="w-72"/>
        <FeaturesSection />
        <LightBar length="w-96 md:w-[600px] lg:w-[800px]"/>
        <UltimateNBACompanion/>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
