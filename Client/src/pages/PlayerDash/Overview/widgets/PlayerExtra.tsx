import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import HeadingSection from "@/pages/PlayerDash/Overview/components/HeadingSection"
import jersey from '@/assets/dash/Jersey.svg'
import MetricOption from "@/pages/PlayerDash/Overview/components/MetricOption";
import Espn from "@/assets/Nav/Espn.png"
import yahoo from "@/assets/dash/yahoo.png";
import fantasy from "@/assets/dash/fantasypro.png"
import { PlayerData } from "@/types/Dash/PlayerDash";

interface PlayerExtraProps{
  playerData: PlayerData
}


const PlayerExtra:React.FC<PlayerExtraProps> = ({playerData}) => {
  const jerseyNum = playerData.playerImgBio.body.jerseyNum
  const espnLink = playerData.playerImgBio.body.espnLink
  const fantasyPro = playerData.playerImgBio.body.fantasyProsLink
  const yahooLink = playerData.playerImgBio.body.yahooLink

  return (
    <WidgetWrapper className=" h-56 shadow-sm shadow-white ">
      <div className="flex gap-2">
        <HeadingSection title="Jersey" className="pl-14 md:pl-24 tracking-[0.2em]"/>
        <HeadingSection title="Links" className="pl-14 md:pl-24 tracking-[0.2em]"/>
      </div>
      <div className="w-full h-[80%] grid grid-cols-2 gap-3">
        <div className="flex justify-center items-center">
          <img className="h-40 relative" src={jersey} alt="" />
          <p className="playerNum absolute font-bold text-2xl">{jerseyNum}</p>
        </div>
        <div className="flex flex-col border-dashed border-l-2 -ml-2 justify-center px-6">
          <div className="linkWrapper flex flex-col gap-3 pt-2 px-4">
            <MetricOption link={espnLink} Img={Espn} className="hover:cursor-pointer"/>
            <MetricOption link={fantasyPro} Img={fantasy} className="hover:cursor-pointer"/>
            <MetricOption link={yahooLink} Img={yahoo} className="hover:cursor-pointer"/>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
}
 
export default PlayerExtra;