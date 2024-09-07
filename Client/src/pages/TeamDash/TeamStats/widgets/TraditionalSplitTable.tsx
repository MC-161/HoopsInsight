import React from 'react';
import { SeasonStats, TeamData} from '@/types/Dash/TeamDash';
import DataTable from '../components/StatsTable/DataTable';
import { Tradcolumns } from '../components/StatsTable/Cols/Tradcolumns';
import HeadingSection from '@/pages/PlayerDash/Overview/components/HeadingSection';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';

interface DataTableProps {
  data: TeamData;
}

const TraditonalTable: React.FC<DataTableProps> = ({ data }) => {
  const statsByYear = data.teamStats.stats[0]
  const statsArray: SeasonStats[] = Object.values(statsByYear);

  return (
    <div className='pt-8 md:pt-0'>
      <HeadingSection icon={AltRouteOutlinedIcon} title='Traditonal Splits' />
      <DataTable columns={Tradcolumns} data={statsArray}/>
    </div>
  );
};

export default TraditonalTable;
