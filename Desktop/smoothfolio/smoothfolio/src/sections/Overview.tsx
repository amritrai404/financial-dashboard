import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the required chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Overview: React.FC = () => {

  // Chart 1: Income vs Expenses Data (Example data)
  const incomeVsExpensesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [5000, 6000, 7000, 8000, 8500, 9000],
        fill: false,
        borderColor: '#4CAF50', // Green for Income
        tension: 0.1,
      },
      {
        label: 'Expenses',
        data: [2000, 2500, 2200, 2800, 3000, 3200],
        fill: false,
        borderColor: '#FF5733', // Red for Expenses
        tension: 0.1,
      },
    ],
  };

  // Chart 2: Monthly Growth Data (Example data)
  const monthlyGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Growth',
        data: [5, 7, 10, 12, 15, 18],
        fill: false,
        borderColor: '#1E90FF', // Blue for Growth
        tension: 0.1,
      },
    ],
  };

  return (
    <section id="overview" className="my-10 px-4 sm:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-left">
        Financial Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        
        {/* Income vs Expenses Chart */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Income vs Expenses
          </h3>
          <Line data={incomeVsExpensesData} />
        </div>

        {/* Monthly Growth Chart */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Monthly Growth
          </h3>
          <Line data={monthlyGrowthData} />
        </div>
      </div>
    </section>
  );
};

export default Overview;
