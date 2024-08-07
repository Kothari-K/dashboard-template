// ListItem.tsx
import React from 'react';

interface ListItemProps {
  icon: string;
  text: string;
  color: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, text, color }) => {
  return (
    <div className="flex items-center p-4 bg-gray-800">
      <div className={`p-4 rounded-full ${color}`}>
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="flex-grow ml-4">{text}</div>
      <div className="p-1 rounded-full bg-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF">
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </div>
    </div>
  );
};

export default ListItem;
