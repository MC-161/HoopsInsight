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

interface DoughnutChartProps{
  attendance: number;
  capacity: number;
}


const DoughnutChart: React.FC<DoughnutChartProps> = ({attendance, capacity}) => {
  const remainingSeats = capacity - attendance;
  // Data for Points, Assists, and Rebounds
  const primaryData = {
    labels: ["Filled", "Not Filled",],
    datasets: [
      {
        label: "Player Stats",
        data: [attendance, remainingSeats,], // Example data for PTS, AST, REB
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

  // Chart options for customization
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart fills the container
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="h-36 w-48 backdrop-blur-sm bg-background-alt rounded-md grid">
      <Doughnut className="" data={primaryData} options={options} />
    </div>
  );
};

export default DoughnutChart;
