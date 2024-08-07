import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityCard: React.FC = () => {

  const data = {
    labels: [5, 10, 12, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 10, 18, 16,23,43],
    datasets: [
      {
        label: 'Activity',
        data: [13,23,67,15,20,24,21,32,44,50,10,30,45,89,58,55,45,40,20,45,56,12,34],
        backgroundColor: 'rgba(62, 62, 236, 1)', // Light blue bars with some transparency
        borderColor: 'rgba(62, 62, 236, 1)', // Solid border color for the bars
        borderWidth: 1,
        barThickness: 16,
        borderRadius: 8,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Important for controlling aspect ratio
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#ffffff', // X-axis label color
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Light grid lines
        },
        ticks: {
          callback: function (value: string | number) {
            if (typeof value === 'number') {
              return `${value / 10}k`; // Format y-axis labels
            }
            return value;
          },
          color: '#ffffff', // Y-axis label color
        },
      },    
    },
    
  };

  return (
    <div className="col-span-2 p-4 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg">Activity</div>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-gray-700 rounded flex">Weekly
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="M480-384 288-576h384L480-384Z"/></svg>
          </button>
          
        </div>
      </div>
      <div className="relative h-48 w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivityCard;
