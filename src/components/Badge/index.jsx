import React from 'react';

const Badge = ({ children, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${colorClasses[color]}`}>
      {children}
    </span>
  );
};

export default Badge;

/* minor update 4 */
