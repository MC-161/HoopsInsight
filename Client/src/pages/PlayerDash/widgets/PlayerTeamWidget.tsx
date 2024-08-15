import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import CountUp from 'react-countup';
const PlayerTeamWidget = () => {
  return (
    <WidgetWrapper className="h-48 w-full shadow-sm shadow-zinc-50">
      <div className="curTeam text-xs h-32 bg-background-dashalt rounded-t-md flex flex-col items-center">
        <p className="curTeam_title p-2 text-base font-semibold rounded-md"> Current Team </p>
        <div className="playerTeam flex items-center gap-4 pt-2">
          <img className="pteam_img p-1 h-12 w-20 rounded-md bg-gradient-to-l from-blue-500  to-primary-gradient_purple shadow-md shadow-primary-gradient_purple" src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" alt="" />
          <p className="pteam_name text-sm text-wrap w-20">Los Angles Lakers</p>
        </div>
      </div>
      <div className="team_info flex justify-between px-5 py-1 text-sm">
        <div className="flex flex-col items-center">
          <p className="font-extralight p-1">Team Abv</p>
          <p className="teamAbv font-bold">LAL</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-extralight p-1">Injuries</p>
          <p className="pinjuries font-bold">
            <CountUp end={12} duration={2} delay={1} />
          </p>
        </div>
      </div>
    </WidgetWrapper>
  );
}
 
export default PlayerTeamWidget;