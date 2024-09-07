import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface StackedBarProps {
  labels: string[]; // Array of strings representing years
  wins: number[]; // Array of numbers representing wins per year
  losses: number[]; // Array of numbers representing losses per year
}

const StackedBar: React.FC<StackedBarProps> = ({ labels, wins, losses }) => {
  // Data configuration for the stacked bar chart
  const data = {
    labels,
    datasets: [
      {
        label: 'Wins',
        data: wins,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(75, 192, 192, 0.6)');
          gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');
          return gradient;
        },
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Losses',
        data: losses,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(230, 108, 133,0.4)');
          gradient.addColorStop(1, 'rgba(230, 108, 133,0)');
          return gradient;
        },
        borderColor: 'rgba(230, 108, 133, 1)',
        borderWidth: 1,
      }
    ],
  };

  // Chart options for customization
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: 'Win-Loss Record',
        font: {
          size: 14,
        },
        color: "white",
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        stacked: true, // Enable stacking on x-axis
      },
      y: {
        stacked: true, // Enable stacking on y-axis
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='h-40 z-20 rounded-md bg-background-alt'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBar;
