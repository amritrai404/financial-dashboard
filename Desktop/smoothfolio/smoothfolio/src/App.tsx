import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './sections/Dashboard';
import Overview from './sections/Overview';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      
      <div className="flex flex-1">
        <Sidebar /> {/* Sidebar on the left */}
        
        <main className="flex-1 p-6 overflow-auto">
          <Overview /> {/* Overview section */}
          <Dashboard /> {/* Dashboard section */}
        </main>
      </div>
    </div>
  );
};

export default App;
