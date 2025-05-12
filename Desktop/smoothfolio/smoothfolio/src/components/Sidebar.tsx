import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Header with Toggle Button */}
      <div className="sm:hidden p-4 bg-indigo-600 text-white flex justify-between items-center">
        <h2 className="text-lg font-bold">Smoothfolio</h2>
        <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed sm:static top-0 left-0 h-full sm:h-auto w-64 bg-indigo-600 text-white p-6 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:block z-50`}
      >
        <h2 className="text-xl font-bold mb-4">Smoothfolio</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#overview" className="block py-2 px-3 rounded hover:bg-indigo-500 transition">
                Overview
              </a>
            </li>
            <li>
              <a href="#transactions" className="block py-2 px-3 rounded hover:bg-indigo-500 transition">
                Transactions
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
