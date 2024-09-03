import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, Filler, PointElement, LineElement } from 'chart.js';
import { OPStats } from '@/types/Dash/PlayerDash';
// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, Filler, PointElement, LineElement);

interface RadarChartProps {
  OPStats: OPStats
}


const RadarChart: React.FC<RadarChartProps> = ({OPStats}) => {


  const data = {
    labels: ["PTS", "AST", "REB", "STL", "BLK", "FG%", "3P%", "FT%"],
    datasets: [
      {
        label: 'Player Stats',
        backgroundColor: "rgba(0, 246, 255, 0.09)",
        borderColor: "rgba(0, 246, 255, 1)",
        pointBackgroundColor: "rgba(0, 246, 255, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0, 246, 255, 1)",
        data: Object.values(OPStats),
        fill: true,
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
          size: 14
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || '';
            const value = context.raw.toFixed(0); // Adjust to 0 decimal places for whole numbers
            return `${label}: ${value}`;
          }
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      r: {
        min: 0,
        max: 100, // Set scale range from 0 to 100
        ticks: {
          precision: 2, // Whole numbers
          backdropColor: "transparent",
          color: 'rgba(255, 255, 255, 0.7)',
          showLabelBackdrop: false,
        },
        pointLabels: {
          color: 'rgba(0, 246, 255, 1)',
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)"
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.3)"
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
