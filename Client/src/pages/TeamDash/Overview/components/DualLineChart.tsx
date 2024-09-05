import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface DualLineChartProps{
  Data1: number[]
  Data2: number[]
  labels: string[]
}

const DualLineChart: React.FC<DualLineChartProps> = ({Data1, Data2, labels}) => {
  // Labels for each game or time period
  const data = {
    labels,
    datasets: [
      {
        label: 'Offensive',
        data: Data1,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)', // Solid red line for turnovers
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        lineTension: 0.6, // Curve the line slightly
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
      },
      {
        label: 'Defensive',
        data: Data2,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)', // Solid blue line for rebounds
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        lineTension: 0.3, // Curve the line slightly
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
      },
    ],
  };

  // Chart options for customization
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Offensive vs Defensive',
        font: {
          family:"montserrat",
          size: 12,
          weight:"bold",
        },
        color:"white",
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Games',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Ratings',
        },
      },
    },
  };

  return (
    <div className='h-60 z-20 [border-image:linear-gradient(to_top_right,#FC5DFF,#E7FA0F)_30] border-2 border-solid border-transparent bg-background-alt'>
      <Line data={data} options={options} />
    </div>
  );
};

export default DualLineChart;
