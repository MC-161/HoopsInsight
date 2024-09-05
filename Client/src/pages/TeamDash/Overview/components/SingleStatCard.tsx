import CountUp from 'react-countup';


interface SingleStatCardProps {
  statName: string;
  statVal: number;
  val: "pos" | "neg";
} 

const SingleStatCard: React.FC<SingleStatCardProps> = ({statName, statVal, val}) =>  {
  let bg;
  let shadow;
  if(val == "pos"){
    bg = "text-res-pos"
    shadow = "shadow-res-pos"
  }else{
    bg = "text-res-neg"
    shadow = "shadow-res-neg"
  }
  return (
    <div className={`rounded-md shadow-sm shadow-white w-52 h-24 flex flex-col items-center gap-1 p-2 bg-gradient-to-t from-background-alt to-background-dashalt ${shadow}`}>
      <p className="statName font-bold text-xl">{statName}</p>
      <p className={`statName font-semibold text-lg ${bg}`}><CountUp end={statVal}/></p>
    </div>
  )
}

export default SingleStatCard
