import React from 'react';

const Transactions: React.FC = () => {
  return (
    <section id="transactions" className="my-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transactions</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">2025-05-12</td>
            <td className="px-4 py-2">Salary</td>
            <td className="px-4 py-2 text-green-600">+$3,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2025-05-10</td>
            <td className="px-4 py-2">Grocery</td>
            <td className="px-4 py-2 text-red-600">-$200</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2025-05-09</td>
            <td className="px-4 py-2">Rent</td>
            <td className="px-4 py-2 text-red-600">-$1,500</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2025-05-08</td>
            <td className="px-4 py-2">Freelance</td>
            <td className="px-4 py-2 text-green-600">+$800</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2025-05-07</td>
            <td className="px-4 py-2">Utilities</td>
            <td className="px-4 py-2 text-red-600">-$150</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2025-05-06</td>
            <td className="px-4 py-2">Investments</td>
            <td className="px-4 py-2 text-green-600">+$1,200</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Transactions;
