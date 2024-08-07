import React from 'react';
import Card from './Card';
import NetProfitCard from './NetProfitCard';
import ActivityCard from './ActivityCard';
import ListItem from './ListItem';
import RecentOrdersTable from './RecentOrdersTable';
import FeedbackCard from './Feedback';

const Dashboard: React.FC = () => {

  
const cancelledIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BB271A"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm280-320q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85Z"/></svg>`



  return (
    <div className="flex-grow p-6 grid grid-cols-3 gap-6">
      {/* First Row */}
      <div className="col-span-2 grid grid-cols-4 gap-6">
        <Card 
          icon={`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111fe4"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>`}
          iconBg="bg-gray-blue"
          title="Total Order"
          value="75"
          percentage="3%"
          arrow={`<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#68e260"><path d="m288-384 192-192 192 192H288Z"/></svg>`}
          color="text-green-500"
        />
        <Card 
          icon={ `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#34c060">
              <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm280-320q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85Z"/>
            </svg>`}
          iconBg="bg-dash-green"
          title="Total Delivered"
          value="70"
          percentage="3%"
          arrow={`<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EA3323"><path d="M480-384 288-576h384L480-384Z"/></svg>`}
          color="text-red-500"
        />
        <Card 
          icon={cancelledIcon}
          iconBg="bg-gray-red"
          title="Total Cancelled"
          value="05"
          percentage="3%"
          arrow={`<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#68e260"><path d="m288-384 192-192 192 192H288Z"/></svg>`}
          color="text-green-500"
        />
        <Card 
          icon={`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f207a8"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`}
          iconBg="bg-gray-pink"
          title="Total Revenue"
          value="$12k"
          percentage="3%"
           arrow={`<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EA3323"><path d="M480-384 288-576h384L480-384Z"/></svg>`}
          color="text-red-500"
        />
      </div>
      <NetProfitCard />

      {/* Second Row */}
      <ActivityCard />
      <div className="bg-gray-900 p-1 rounded-lg shadow-lg">
        <ListItem 
          icon={`<svg xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 -960 960 960" width="24px" fill="#8C1A10"><path d="M184-235q-42-50-65-112.5T96-479.9q0-69.9 23-132.5Q142-675 184-725l52 51q-32 40-50 89.27-18 49.27-18 104.5t18 104.73q18 49.5 50 89.5l-52 51ZM479.9-96q-69.9 0-132.4-23T235-184l51-52q40 32 89.27 50 49.27 18 104.5 18t104.73-18q49.5-18 89.5-50l51 52q-50 42-112.6 65-62.6 23-132.5 23ZM776-235l-52-51q32-40 50-89.56 18-49.55 18-104.5 0-54.94-18-104.44T724-674l52-51q42 50 65 112.6 23 62.6 23 132.5t-23 132.4Q818-285 776-235ZM286-724l-51-52q50-42 112.63-65 62.62-23 131.98-23 70.39 0 132.89 23Q675-818 725-776l-51 52q-40-32-89.56-50-49.55-18-104.5-18-54.94 0-104.44 18T286-724Zm193.77 436Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56Z"/></svg>`}
          color="bg-gray-red"
          text="Goal"
          
        />
        <ListItem 
          icon={`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M160-120q-33 0-56.5-23.5T80-200v-120h800v120q0 33-23.5 56.5T800-120H160Zm0-120v40h640v-40H160Zm320-180q-36 0-57 20t-77 20q-56 0-76-20t-56-20q-36 0-57 20t-77 20v-80q36 0 57-20t77-20q56 0 76 20t56 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 56-20t76-20q56 0 79 20t55 20v80q-56 0-75-20t-55-20q-36 0-58 20t-78 20q-56 0-77-20t-57-20ZM80-560v-40q0-115 108.5-177.5T480-840q183 0 291.5 62.5T880-600v40H80Zm400-200q-124 0-207.5 31T166-640h628q-23-58-106.5-89T480-760Zm0 520Zm0-400Z"/></svg>`}
          color="bg-gray-blue"
          text="Popular Dishes"
        />
        <ListItem 
          icon={`<img width="24" height="24" src="https://img.icons8.com/wired/24/22C3E6/room-service.png" alt="room-service"/>`}
          color="bg-gray-cyan"
          text="Menu"
        />
      </div>

      {/* Third Row */}
      <div className="col-span-2  bg-gray-800">
        <RecentOrdersTable />
      </div>
      <FeedbackCard />
    </div>
  );
};

export default Dashboard;
