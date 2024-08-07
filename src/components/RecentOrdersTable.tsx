// RecentOrdersTable.tsx
import React from 'react';

const RecentOrdersTable: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white md:p-4 rounded-lg shadow-md">
      <table className="w-full bg-gray-800">
        <tbody>
          <tr className="border-t border-b border-gray-700">
            <td className="p-3">Customer</td>
            <td className="py-4">Order No</td>
            <td className="py-4">Amount</td>
            <td className="py-4">Status</td>
          </tr>
          <tr className="border-t border-b border-gray-700">
            <td className="py-4 px-2 flex items-center ">
              <img
                src="/user/user-06.png"
                alt="avatar"
                className="w-8 h-8 rounded-full mr-2 md:block hidden"
              />
              Wade Warren
            </td>
            <td className="py-4">15478256</td>
            <td className="py-4">$124.00</td>
            <td className="py-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-green text-green-950">
              <span className='md:hidden'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6ec229"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
              </span><span className='hidden md:inline'>Delivered</span>
              </span>
            </td>
          </tr>
          <tr className="border-t border-b border-gray-700">
            <td className="py-4 px-2 flex items-center">
              <img
                src="/user/user-07.png"
                alt="avatar"
                className="w-8 h-8 rounded-full mr-2 md:block hidden"
              />
              Jane Cooper
            </td>
            <td className="py-4">48965786</td>
            <td className="py-4">$365.02</td>
            <td className="py-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-red text-rose-950">
                <span className='md:hidden'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BB271A"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </span>
                <span className='hidden md:inline'>Cancelled</span>
              </span>
            </td>
          </tr>
          <tr className="border-t border-b border-gray-700">
            <td className="py-4 px-2 flex items-center">
              <img
                src="/user/user-10.png"
                alt="avatar"
                className="w-8 h-8 rounded-full mr-2 md:block hidden"
              />
              Cody Fisher
            </td>
            <td className="py-4">78542567</td>
            <td className="py-4">$100.04</td>
            <td className="py-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-red text-rose-950">
              <span className='md:hidden'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BB271A"><path d="M280-420q25 0 42.5-17.5T340-480q0-25-17.5-42.5T280-540q-25 0-42.5 17.5T220-480q0 25 17.5 42.5T280-420Zm200 0q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm200 0q25 0 42.5-17.5T740-480q0-25-17.5-42.5T680-540q-25 0-42.5 17.5T620-480q0 25 17.5 42.5T680-420ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </span><span className='hidden md:inline'>Pending</span></span>
            </td>
          </tr>
          <tr className="border-t border-b border-gray-700">
            <td className="py-4 px-2 flex items-center">
              <img
                src="/user/user-09.png"
                alt="avatar"
                className="w-8 h-8 rounded-full mr-2 md:block hidden"
              />
              Kristin Waston
            </td>
            <td className="py-4">20965732</td>
            <td className="py-4">$45.00</td>
            <td className="py-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-green text-green-950">
              <span className='md:hidden'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6ec229"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
              </span><span className='hidden md:inline'>Delivered</span></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrdersTable;
