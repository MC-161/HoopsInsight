import GaugeComponent from "react-gauge-component";

interface EfficiencyContentProps {
  efficiency: {
    playerEF: string;
    efg: string;
    trueShoot: string;
  };
}

const EfficiencyContent: React.FC<EfficiencyContentProps> = ({
  efficiency,
}) => {
  const playerEF = parseFloat(efficiency.playerEF);
  const efg = parseFloat(efficiency.efg);
  const trueShoot = parseFloat(efficiency.trueShoot);
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
                colorArray: ["#FF2121", "#00FF15"],
                padding: 0.02,
                subArcs: [
                  { limit: 10 }, // Below Average
                  { limit: 15 }, // Average (lower bound)
                  { limit: 20 }, // Average (upper bound)
                  { limit: 25 }, // Good (lower bound)
                  { limit: 30 }, // Good (upper bound)
                  { limit: 35 }, // Excellent (lower bound)
                  {}, // Excellent (upper bound, no specific limit)
                ],
              }}
              pointer={{ type: "blob", animationDelay: 0 }}
              value={playerEF}
              className="z-10"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-center absolute">Effective Field Goal</p>
            <GaugeComponent
              type="semicircle"
              arc={{
                colorArray: ["#FF2121", "#00FF15"],
                padding: 0.02,
                subArcs: [
                  { limit: 40 }, // Below Average
                  { limit: 45 }, // Average (lower bound)
                  { limit: 50 }, // Average (upper bound)
                  { limit: 55 }, // Good (lower bound)
                  { limit: 60 }, // Good (upper bound)
                  { limit: 65 }, // Excellent (lower bound)
                ],
              }}
              pointer={{ type: "blob", animationDelay: 0 }}
              value={efg}
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
                colorArray: ["#FF2121", "#00FF15"],
                padding: 0.02,
                subArcs: [
                  { limit: 40 },  // Below Average
                  { limit: 45 },  // Average (lower bound)
                  { limit: 50 },  // Average (upper bound)
                  { limit: 55 },  // Good (lower bound)
                  { limit: 60 },  // Good (upper bound)
                  { limit: 65 },  // Excellent (lower bound)
                ],
              }}
              pointer={{ type: "blob", animationDelay: 0 }}
              value={trueShoot}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default EfficiencyContent;
