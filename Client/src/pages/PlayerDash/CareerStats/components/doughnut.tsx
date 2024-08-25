import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  // Data for Points, Assists, and Rebounds
  const primaryData = {
    labels: ["Points", "Assists", "Rebounds"],
    datasets: [
      {
        label: "Player Stats",
        data: [24.9, 7.5, 7.4], // Example data for PTS, AST, REB
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Color for Points
          "rgba(54, 162, 235, 0.6)", // Color for Assists
          "rgba(255, 206, 86, 0.6)", // Color for Rebounds
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Data for Efficiency (FG%, 3P%, FT%)
  const efficiencyData = {
    labels: ["Field Goal %", "Three-Point %", "Free Throw %"],
    datasets: [
      {
        label: "Efficiency Breakdown",
        data: [51.8, 38.7, 73.4], // Example efficiency data
        backgroundColor: [
          "rgba(153, 102, 255, 0.6)", // Color for FG%
          "rgba(255, 159, 64, 0.6)", // Color for 3P%
          "rgba(255, 99, 132, 0.6)", // Color for FT%
        ],
        borderColor: [
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options for customization
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart fills the container
    plugins: {
      legend: {
        position: "right",
        labels:{
          
        }
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="h-24 w-56 backdrop-blur-sm bg-background-alt rounded-md grid gap-2">
      <div className="relative h-24 w-56">
        <Doughnut className="p-2" data={primaryData} options={options} />
      </div>
      <div className="relative h-24 w-56">
        <Doughnut className="p-2" data={efficiencyData} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
