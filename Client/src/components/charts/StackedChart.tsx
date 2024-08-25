import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ScoringAveragesBarChart: React.FC = () => {
  // Labels for each game or category
  const labels = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'];

  // Corresponding scoring averages (dummy data)
  const dataPoints = [25, 30, 22, 28, 35, 20, 27, 40, 33, 29];

  // Data configuration for the bar chart
  const data = {
    labels,
    datasets: [
      {
        label: 'Scoring Averages',
        data: dataPoints,
        backgroundColor: 'rgba(230, 108, 133, 0.6)', // Semi-transparent blue fill
        borderColor: 'rgba(230, 108, 133, 1)', // Solid blue border
        borderWidth: 1, // Border width of the bars
      }
    ],
  };

  // Chart options for customization
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Player Scoring Averages Across Games',
        font: {
          size: 12,
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
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='h-52 z-20 [border-image:linear-gradient(to_top_right,#FC5DFF,#E7FA0F)_30] border-2 border-solid border-transparent'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ScoringAveragesBarChart;
