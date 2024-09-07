import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import GaugeComponent from "react-gauge-component";
import DataTable from "../components/StatsTable/DataTable";
import { ArenaColumns } from "../components/StatsTable/Cols/ArenaCols";
import { SeasonStats, TeamData } from "@/types/Dash/TeamDash";

interface RatingsProps {
  data: TeamData;
}

const Ratings: React.FC<RatingsProps> = ({ data }) => {
  const statsByYear = data.teamStats.stats[0];
  const statsArray: SeasonStats[] = Object.values(statsByYear);
  const sos = data.teamStats.stats[0][2024].sos;
  const srs = data.teamStats.stats[0][2024].srs;
  return (
    <div className="ratings grid grid-cols-3 gap-3 h-full">
      <section className="Overall col-span-1 grid gap-4">
        <div className="shadow-sm shadow-white relative rounded-md bg-background-alt">
          <p className="absolute left-[30%] right-[20%]">Team Rating (SOS)</p>
          <GaugeComponent
            type="grafana"
            arc={{
              colorArray: ["#00FF15", "#FF2121"], // Green for easier, red for tougher
              padding: 0.02,
              subArcs: [
                { limit: -0.2 }, // Very Easy (easier schedule starts here)
                { limit: -0.1 }, // Easy (midpoint of easier schedules)
                { limit: 0 }, // Neutral (average difficulty)
                { limit: 0.1 }, // Tough
                { limit: 0.2 }, // Very Tough (upper bound)
              ],
            }}
            pointer={{ type: "blob", animationDelay: 0 }}
            labels={{
              valueLabel: { formatTextValue: (value) => value.toFixed(1) }, // Formats with 1 decimal
            }}
            value={sos} // Example SOS value
            minValue={-10}
            maxValue={10}
          />
        </div>
        <div className="shadow-sm shadow-white relative rounded-md bg-background-alt">
          <p className="absolute left-[30%] right-[20%]">Team Rating (SOS)</p>
          <GaugeComponent
            type="grafana"
            arc={{
              colorArray: ["#00FF15", "#FF2121"], // Green for easier, red for tougher
              padding: 0.02,
              subArcs: [
                { limit: -0.2 }, // Very Easy (easier schedule starts here)
                { limit: -0.1 }, // Easy (midpoint of easier schedules)
                { limit: 0 }, // Neutral (average difficulty)
                { limit: 0.1 }, // Tough
                { limit: 0.2 }, // Very Tough (upper bound)
              ],
            }}
            pointer={{ type: "blob", animationDelay: 0 }}
            labels={{
              valueLabel: { formatTextValue: (value) => value.toFixed(1) }, // Formats with 1 decimal
            }}
            value={srs} // Example SOS value
            minValue={-10}
            maxValue={10}
          />
        </div>
      </section>

      <section className="arenaTable col-span-2">
        <HeadingSection icon={TrendingUpOutlinedIcon} title="Arena Table" />
        <DataTable columns={ArenaColumns} data={statsArray} />
      </section>
    </div>
  );
};

export default Ratings;
