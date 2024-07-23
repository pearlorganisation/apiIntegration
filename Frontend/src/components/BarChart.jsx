import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

// Register the components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({data}) => {
  console.log('chart data', data)
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
