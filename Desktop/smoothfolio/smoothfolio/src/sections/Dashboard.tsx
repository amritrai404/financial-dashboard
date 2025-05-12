import React from 'react';
import Card from '../components/Card';
import Transactions from './Transactions';  // Import Transactions component

const Dashboard: React.FC = () => {
  return (
    <section
      id="dashboard"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 p-6 bg-cyan-50 border border-gray-300 rounded-lg"
    >
      {/* Total Income Card */}
      <Card
        title="Total Income"
        value="$5,000"
        icon="💰"
        className="dashboard-card transition-shadow duration-300 ease-in-out hover:shadow-lg hover:scale-105"
      />
      
      {/* Total Expenses Card */}
      <Card
        title="Total Expenses"
        value="$2,200"
        icon="📉"
        className="dashboard-card transition-shadow duration-300 ease-in-out hover:shadow-lg hover:scale-105"
      />
      
      {/* Net Balance Card */}
      <Card
        title="Net Balance"
        value="$2,800"
        icon="📈"
        className="dashboard-card transition-shadow duration-300 ease-in-out hover:shadow-lg hover:scale-105"
      />
      
      {/* Transactions Section */}
      <div className="col-span-1 sm:col-span-2 md:col-span-3 mt-6">
        <Transactions />  {/* Render the Transactions component here */}
      </div>
    </section>
  );
};

export default Dashboard;
