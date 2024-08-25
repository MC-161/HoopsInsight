import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  labels: string[];
  dataPoints: number[];
  options?: any; // To allow custom options
}

const LineChart: React.FC<LineChartProps> = ({ labels, dataPoints, options }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Scoring Trend',
        data: dataPoints,
        fill: true, // Enable fill under the line
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(230, 108, 133,0.4)');
          gradient.addColorStop(1, 'rgba(230, 108, 133,0)');
          return gradient;
        },
        borderColor: 'rgba(230, 108, 133, 1)',
        pointBackgroundColor: 'rgba(230, 108, 133, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '230, 108, 133, 1)',
      }
    ],
  };

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Scoring Trend Over Games',
        color:"white",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='h-56 z-20 [border-image:linear-gradient(to_top_right,#FC5DFF,#E7FA0F)_30] border-2 border-solid border-transparent'>
      <Line data={data} options={options || defaultOptions} />
    </div>
  );
};

export default LineChart;
