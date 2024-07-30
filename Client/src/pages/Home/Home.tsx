import Landing from "@/pages/Home/components/Landing";
import NBALOGO from "@/assets/Nav/NbaLogo.png";
import ESPNLOGO from "@/assets/Nav/Espn.png";
import BRLOGO from "@/assets/Nav/BR.png";
const Home = () => {
  return (
    <div className="h-screen">
      <Landing></Landing>
      <div className="h-fit bg-black">
        <section className="Dash h-fit pb-10">
          <section className="heading w-full flex flex-col items-center pt-8">
            <p className="text-primary-main font-nomal text-2xl tracking-[0.25em]">
              NBA Team and Player Dashboards
            </p>
            <p className="text-primary-alt text-center px-32 py-4 text-sm">
              Explore in-depth statistics, performance analytics, and player
              insights for your favorite NBA teams and players. Dive into
              comprehensive data visualizations and stay updated with the latest
              trends and player performances across the league.
            </p>
          </section>
          <section className="dashboards grid grid-cols-2 px-8">
            <div className="dash p-10">
              <section className="h-[400px] border-2 rounded-md"></section>
            </div>
            <div className="dash p-10">
              <section className="h-[400px] border-2 rounded-md"></section>
            </div>
          </section>
          <div className="Powered text-primary-main flex flex-col items-center">
            <div className="flex flex-col items-center justify-center mt-4">
              <p className="font-extralight">Powered By</p>
              <section className="logos flex items-center gap-6 mt-3">
                <img className="w-14" src={NBALOGO} alt="" />
                <img className="h-6" src={BRLOGO} alt="" />
                <img className="w-24" src={ESPNLOGO} alt="" />
              </section>
            </div>
          </div>
        </section>
        <div className="w-full flex justify-center pt-2">
          <div className="w-96 h-4 bg-gradient-to-r from-violet-500 via-green-400 to-cyan-500 shadow-inner shadow-white rounded-md filter blur-sm"></div>
        </div>
        <section className="Features grid grid-cols-[45%_55%] h-full text-primary-main mt-14 pl-24">
          <section className=" h-[700px] flex items-center justify-center">
            <div className="change border-2 h-[600px] w-4/6">Features</div>
          </section>
          <section className="h-[700px] flex items-center">
            <div className="change border-y-2 border-l-2 h-[600px] w-full rounded-l-md">
              display
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Home;
