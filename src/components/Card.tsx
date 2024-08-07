import React from 'react';

interface CardProps {
  icon: string; // SVG content as a string
  iconBg: string; // Class for the background color of the icon
  title: string;
  value: string;
  percentage: string;
  color: string;
  arrow: string;
}

const Card: React.FC<CardProps> = ({ icon, iconBg, title, value, percentage, color, arrow }) => {
  return (
    <div className={`p-2 rounded-lg shadow-lg bg-gray-700 relative`}>
      <div className="flex flex-col items-left space-y-2">
        <div className="p-2 rounded-full">
          <div className={`${iconBg} p-1.5 rounded w-[36px]`}>
            <div dangerouslySetInnerHTML={{ __html: icon }} />
          </div>
        </div>
        <div className='text-sm font-bold'>{title}</div>

      </div>
      <div className="absolute bottom-2 flex text-sm w-full p-1">
        <div className="text-4xl font-bold flex-1">{value}</div>
        <div className="flex items-center justify-end p-2">          
          <div dangerouslySetInnerHTML={{ __html: arrow }} />
          <div className={`${color}`}>{percentage}</div>
        </div>
      </div>

    </div>
  );
};

export default Card;
