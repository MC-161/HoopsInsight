import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface TurnoversReboundsChartProps{
  turnoversData: number[]
  reboundsData: number[]
  labels: string[]
}

const TurnoversReboundsChart: React.FC<TurnoversReboundsChartProps> = ({turnoversData, reboundsData, labels}) => {
  // Labels for each game or time period
  const data = {
    labels,
    datasets: [
      {
        label: 'Turnovers',
        data: turnoversData,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)', // Solid red line for turnovers
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        lineTension: 0.6, // Curve the line slightly
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
      },
      {
        label: 'Rebounds',
        data: reboundsData,
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
        text: 'Turnovers and Rebounds Over Games',
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
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
    <div className='h-56 z-20 [border-image:linear-gradient(to_top_right,#FC5DFF,#E7FA0F)_30] border-2 border-solid border-transparent'>
      <Line data={data} options={options} />
    </div>
  );
};

export default TurnoversReboundsChart;
