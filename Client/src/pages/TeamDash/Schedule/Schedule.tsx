import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ToolsWidget from "@/pages/PlayerDash/Overview/widgets/ToolsWidget";
import { ScheduleResponse, TeamData } from "@/types/Dash/TeamDash";
import TeamExInfo from "@/pages/TeamDash/Overview/widgets/TeamExInfo";
import Schedule from "./widgets/ScheduleWidget";
import useSchedule from "@/hooks/useSchedule";

interface ScheduleCProps {
  teamData: TeamData;
}

const ScheduleC: React.FC<ScheduleCProps> = ({ teamData }) => {
  const teamId = teamData._id;
  const { data, isLoading, error } = useSchedule(teamId);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading]);

  if (loading) {
    return <div>Loading schedule data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex justify-center pb-8">
      <Grid
        container
        columnSpacing={4}
        padding={4}
        className="gap-y-6 sm:gap-y-8 md:gap-y-4 lg:gap-y-1 max-w-screen-2xl"
      >
        <Grid item xs={12} md={2.6}>
          <div className="flex flex-col gap-4 md:gap-0">
            <TeamExInfo teamData={teamData} />
            <ToolsWidget />
          </div>
        </Grid>
        <Grid item xs={12} md={9.4}>
          <Schedule schedule={data as ScheduleResponse} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ScheduleC;
