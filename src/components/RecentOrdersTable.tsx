import React from 'react';

const Table: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <table className="w-full  bg-gray-800">        
        <tbody>
        <tr className="border-t border-b border-gray-700">
            <td className="p-3">Customer</td>
            <td className="py-4">Order No</td>
            <td className="py-4">Amount</td>
            <td className="py-4">Status</td>
          </tr>
          <tr className="border-t border-b border-gray-700">
          <td className="py-4 px-2 flex items-center">
              <img
                src="/user/user-06.png"
                alt="avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
              Wade Warren
            </td>
            <td className="py-4">15478256</td>
            <td className="py-4">$124.00</td>
            <td className="py-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-green text-green-950`}>
            Delivered
              </span></td>
          </tr>
          <tr className="border-t border-b border-gray-700">
          <td className="py-4 px-2 flex items-center">
              <img
                src="/user/user-07.png"
                alt="avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
             Jane Cooper
            </td>
            <td className="py-4">48965786</td>
            <td className="py-4">$365.02</td>
            <td className="py-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-red text-rose-950`}>
            Cancelled
              </span></td>
          </tr>
          <tr className="border-t border-b border-gray-700">
          <td className="py-4 px-2 flex items-center">
              <img
                src="/user/user-10.png"
                alt="avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
             Cody Fisher
            </td>
            <td className="py-4">78542567</td>
            <td className="py-4">$100.04</td>
            <td className="py-4 ">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-red text-rose-950`}>
                Pending
              </span>
            </td>
          </tr>
          <tr className="border-t border-b border-gray-700">
          <td className="py-4 px-2 flex items-center">
              <img
                src="/user/user-09.png"
                alt="avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
              Kristin Waston
            </td>
            <td className="py-4">20965732</td>
            <td className="py-4">$45.00</td>
            <td className="py-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-green text-green-950`}>
            Delivered
              </span></td>
          </tr>
         
          

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
