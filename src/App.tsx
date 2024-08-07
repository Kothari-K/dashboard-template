import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/Topbar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="flex flex-1 min-h-0 bg-gray-900 text-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
