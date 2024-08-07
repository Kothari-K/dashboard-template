// FeedbackCard.tsx
import React from 'react';

const FeedbackCard: React.FC = () => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg h-96 overflow-y-auto">
      <div className="text-lg mb-4">Customer's Feedback</div>
      <div className="space-y-4">
        <div>
          <div className="flex items-center space-x-2">
            <img src="/user/user-09.png" alt="profile" className="w-8 h-8 rounded-full" />
            <div>
              <div>Jenny Wilsome</div>
              <div className="text-xl">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="mt-2">
            <p>"Great service, very satisfied! The updated table component effectively integrates Tailwind CSS for a visually appealing and functional design."</p>
          </div>
          <hr className="my-2 border-gray-600" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <img src="/user/user-08.png" alt="profile" className="w-8 h-8 rounded-full" />
            <div>
              <div>Dianne Russell</div>
              <div>⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="mt-2">
            <p>"Good experience, will come back again! Your table design is well-structured and visually appealing. Using Tailwind CSS to style the statuses."</p>
          </div>
          <hr className="my-2 border-gray-600" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <img src="/user/user-12.png" alt="profile" className="w-8 h-8 rounded-full" />
            <div>
              <div>Devon Lane</div>
              <div>⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="mt-2">
            <p>"Good experience, will come back again! Your table design is well-structured and visually appealing."</p>
          </div>
          <hr className="my-2 border-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
