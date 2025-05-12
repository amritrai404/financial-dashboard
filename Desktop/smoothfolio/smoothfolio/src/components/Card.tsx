import React from 'react';

interface CardProps {
  title: string;
  value: string;
  icon?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, className = '' }) => {
  return (
    <div
      className={`bg-white hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 shadow-md text-center ${className}`}
    >
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
    </div>
  );
};

export default Card;
