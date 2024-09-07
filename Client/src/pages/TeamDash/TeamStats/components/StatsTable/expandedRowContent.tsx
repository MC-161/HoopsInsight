import { motion } from "framer-motion";
import { Row } from '@tanstack/react-table';
import CountUp from 'react-countup';
import TurnoverRateDisplay from "../TurnOverRate";
import EffectiveFGDisplay from "../EffectiveFGDisplay";
import PSADisplay from "../PSADisplay";
import PlusMinusDisplay from "../PlusMinusDisplay";
interface ExpandedRowContentProps<TData> {
  rowData: Row<TData>;
}

const ExpandedRowContent = <TData,>({ rowData }: ExpandedRowContentProps<TData>) => {
  // Extract values using rowData.getValue method
  const fgp = rowData.getValue('fgp') as string;
  const tpp = rowData.getValue('tptfgp') as string;

  const plusMinus = rowData.getValue('plusMinus') as string;

  const fantasyPoints = rowData.getValue('fantasyPoints') as string;
  const pts = parseFloat(rowData.getValue('pts') as string);
  const mins = rowData.getValue('mins') as string;
  const ast = rowData.getValue('ast') as string;
  const reb = rowData.getValue('reb') as string;
  const fga = rowData.getValue('fga') as string;
  const tov = rowData.getValue('TOV') as string;
  const steals = rowData.getValue('stl') as string;

  // Calculate effective FG% and Points Per Shot Attempt
  const effectiveFGP = (
    parseFloat(fgp) + 0.5 * parseFloat(tpp)
  ).toFixed(1);

  const pointsPerShot = (
    pts / (pts / (parseFloat(fgp) / 100))
  ).toFixed(2);

  const fgan = parseFloat(fga);
  const tovn = parseFloat(tov);
  // Calculate turnover rate per field goal attempt
  const turnoverRate = (fgan === 0 ? 0 : tovn / fgan * 100).toFixed(1);

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }} 
      animate={{ height: "auto", opacity: 1 }} 
      exit={{ height: 0, opacity: 0 }} 
      transition={{ duration: 0.3 }} 
      className=" p-3 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div className="flex flex-col p-4 bg-background-dashalt rounded-lg shadow-md shadow-primary-gradient_blue">
        <h4 className="text-lg font-semibold text-primary-main">Shooting Efficiency</h4>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-sm text-primary-alt">Field Goal Percentage</p>
            <p className="text-2xl font-bold text-primary-main"><CountUp end={parseFloat(fgp)} duration={2} delay={1} />%</p>
          </div>
          <div>
            <p className="text-sm text-primary-alt">Three-Point Percentage</p>
            <p className="text-2xl font-bold text-primary-main"><CountUp end={parseFloat(tpp)} duration={2} delay={1}/>%</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-primary-alt">Effective FG%</p>
          <EffectiveFGDisplay eFGPercentage={parseFloat(effectiveFGP)}/>
        </div>
      </div>

      <div className="flex flex-col p-4 bg-background-dashalt rounded-lg shadow-md shadow-primary-gradient_blue">
        <h4 className="text-lg font-semibold text-primary-main">Performance Rating</h4>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-sm text-primary-alt">Plus-Minus</p>
            <p className="text-2xl font-bold text-primary-green"><PlusMinusDisplay plusMinus={plusMinus}/></p>
          </div>
          <div>
            <p className="text-sm text-primary-alt">Fantasy Points</p>
            <p className="text-2xl font-bold text-primary-main">{fantasyPoints}</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-primary-alt">Points Per Shot Attempt</p>
          <PSADisplay PPSA={parseFloat(pointsPerShot)}/>
        </div>
      </div>

      <div className="flex flex-col p-4 bg-background-dashalt rounded-lg shadow-md shadow-primary-gradient_blue">
        <h4 className="text-lg font-semibold text-primary-main">Key Stats</h4>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-sm text-primary-alt">Minutes Played</p>
            <p className="text-2xl font-bold text-primary-main"><CountUp end={parseFloat(mins)} /></p>
          </div>
          <div>
            <p className="text-sm text-primary-alt">Assists</p>
            <p className="text-2xl font-bold text-primary-main">{ast}</p>
          </div>
          <div>
            <p className="text-sm text-primary-alt">Rebounds</p>
            <p className="text-2xl font-bold text-primary-main">{reb}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-4 bg-background-dashalt rounded-lg shadow-md shadow-primary-gradient_blue">
        <h4 className="text-lg font-semibold text-primary-main">Turnover Efficiency</h4>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-sm text-primary-alt">Turnover Rate</p>
          <TurnoverRateDisplay turnoverRate={parseFloat(turnoverRate)} />
          </div>
          <div>
            <p className="text-sm text-primary-alt">Steals</p>
            <p className="text-2xl font-bold text-primary-main">{steals}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandedRowContent;
