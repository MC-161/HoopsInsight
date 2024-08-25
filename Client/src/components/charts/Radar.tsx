import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, Filler, PointElement, LineElement } from 'chart.js';
// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, Filler, PointElement, LineElement);

interface RadarChartProps {}

const RadarChart: React.FC<RadarChartProps> = () => {
  const stats = {
    "PTS": 3.9,
    "AST": 63.5,
    "REB": 63.4,
    "STL": 58.3,
    "BLK": 60.6,
    "FG%": 54.8,
    "3P%": 58.7,
    "FT%": 73.4
  };

  // Player stats
  const data = {
    labels: ["PTS", "AST", "REB", "STL", "BLK", "FG%", "3P%", "FT%"],
    datasets: [
      {
        color: '#ffffff',
        label: 'Player Stats',
        backgroundColor: "rgba(0, 246, 255, 0.09)",
        borderColor: "rgba(0, 246, 255, 1)",
        pointBackgroundColor: "rgba(0, 246, 255, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0, 246, 255, 1)",
        data: Object.values(stats)
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: "Player Performance Radar Chart",
        color: "rgba(0, 246, 255, 1)",
        font: {
          size: 14 // Use a number for font size, not a string
        },
      },
      legend: {
        display: false
      }
    },
    scales: {
      r: {
        ticks: {
          precision: 0,
          backdropColor: "transparent",
        },
        pointLabels: {
          color: 'rgba(0, 246, 255, 1)'
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)"
        }
      },
    }
  };

  return (
    <div className='h-[90%] w-full backdrop-blur-sm bg-background-alt rounded-md'> 
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
