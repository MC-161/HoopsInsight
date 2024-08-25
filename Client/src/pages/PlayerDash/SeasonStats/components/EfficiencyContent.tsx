import GaugeComponent from "react-gauge-component";

const EfficiencyContent = () => {
  return (
    <div className="efficiency rounded-sm px-4 z-20 [border-image:linear-gradient(to_top_right,#FC5DFF,#E7FA0F)_30] border-2 border-solid border-transparent">
      <section className="header text-center">
        <p className="text-sm font-semibold">Efficiency Rating</p>
      </section>
      <section className="guages grid grid-cols-1 py-2 gap-3">
        <section className="w-full grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <p className="text-sm text-center absolute">Player Efficiency</p>
            <GaugeComponent
              type="semicircle"
              arc={{
                colorArray: ["#00FF15", "#FF2121"],
                padding: 0.02,
                subArcs: [
                  { limit: 40 },
                  { limit: 60 },
                  { limit: 70 },
                  {},
                  {},
                  {},
                  {},
                ],
              }}
              pointer={{ type: "blob", animationDelay: 0 }}
              value={50}
              className="z-10"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-center absolute">Effective Field Goal</p>
            <GaugeComponent
              type="semicircle"
              arc={{
                colorArray: ["#00FF15", "#FF2121"],
                padding: 0.02,
                subArcs: [
                  { limit: 40 },
                  { limit: 60 },
                  { limit: 70 },
                  {},
                  {},
                  {},
                  {},
                ],
              }}
              pointer={{ type: "blob", animationDelay: 0 }}
              value={50}
              className="z-10"
            />
          </div>
        </section>
        <section className="w-full flex justify-center">
          <div className="flex flex-col items-center w-40">
            <p className="text-sm text-center absolute">True Shooting</p>
            <GaugeComponent
              type="semicircle"
              arc={{
                colorArray: ["#00FF15", "#FF2121"],
                padding: 0.02,
                subArcs: [
                  { limit: 40 },
                  { limit: 60 },
                  { limit: 70 },
                  {},
                  {},
                  {},
                  {},
                ],
              }}
              pointer={{ type: "blob", animationDelay: 0 }}
              value={50}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default EfficiencyContent;
