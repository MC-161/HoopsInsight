import React from 'react';
import { SeasonStats, TeamData} from '@/types/Dash/TeamDash';
import DataTable from '../components/StatsTable/DataTable';
import { Shootingcolumns } from '../components/StatsTable/Cols/ShootingCols';
import HeadingSection from '@/pages/PlayerDash/Overview/components/HeadingSection';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';

interface DataTableProps {
  data: TeamData;
}

const Shooting_EfficiencyTable: React.FC<DataTableProps> = ({ data }) => {
  const statsByYear = data.teamStats.stats[0]
  const statsArray: SeasonStats[] = Object.values(statsByYear);

  return (
    <div className='pt-8 md:pt-0'>
      <HeadingSection icon={AltRouteOutlinedIcon} title='Shooting & Efficiency' />
      <DataTable columns={Shootingcolumns} data={statsArray}/>
    </div>
  );
};

export default Shooting_EfficiencyTable;
