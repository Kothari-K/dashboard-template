// NetProfitCard.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const NetProfitCard: React.FC = () => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#1781de', '#2d3748'],
        hoverBackgroundColor: ['#6ec229', '#4a5568'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg relative">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-center">
        <div>
          <div className="text-md pb-4 mb-4">Net Profit</div>
          <div className="text-4xl">
            <b>$6759.25</b>
          </div>
          <div className="text-lime-400 flex items-center text-sm absolute bottom-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#6ec229">
              <path d="m288-384 192-192 192 192H288Z" />
            </svg>
            3%
          </div>
        </div>
        <div className="relative">
          <div className="w-32 h-32 mx-auto">
            <Doughnut data={data} options={options} />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-sm text-white">
            <div>70%</div>
            <div className="text-xs">Goal Completed</div>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400 absolute bottom-0 right-4 p-2">
        *The values here have been rounded off.
      </div>
    </div>
  );
};

export default NetProfitCard;
