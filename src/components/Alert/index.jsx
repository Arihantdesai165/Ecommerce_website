import React from 'react';

const Alert = ({ children, type = 'info' }) => {
  const typeClasses = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-800 border-red-200',
  };

  return (
    <div className={`p-4 border rounded-md ${typeClasses[type]}`}>
      {children}
    </div>
  );
};

export default Alert;

/* minor update 2 */

// Component enhancement update 2
