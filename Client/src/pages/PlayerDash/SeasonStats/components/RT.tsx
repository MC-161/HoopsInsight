import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TurnoversReboundsChart: React.FC = () => {
  // Labels for each game or time period
  const labels = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10'];

  // Dummy data for turnovers and rebounds
  const turnoversData = [3, 5, 2, 6, 4, 7, 3, 4, 2, 5];
  const reboundsData = [10, 12, 9, 14, 11, 15, 13, 12, 14, 16];

  // Data configuration for the line chart
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
