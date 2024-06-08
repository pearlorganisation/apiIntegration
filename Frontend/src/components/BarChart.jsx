import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

// Register the components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({data}) => {
//   const data = {
//     labels: ["Chocolate", "Vanilla", "Strawberry"],
//     datasets: [
//       {
//         label: "Blue",
//         backgroundColor: "blue",
//         data: [3, 7, 4]
//       },
//       {
//         label: "Red",
//         backgroundColor: "red",
//         data: [4, 3, 5]
//       },
//       {
//         label: "Green",
//         backgroundColor: "green",
//         data: [7, 2, 6]
//       }
//     ]
//   };

  const options = {
    scales: {
      x: {
        type: 'category', // Correct type for x-axis
        barPercentage: 0.5,
        categoryPercentage: 0.5
      },
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
