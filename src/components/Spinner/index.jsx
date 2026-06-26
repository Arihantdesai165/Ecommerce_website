import React from 'react';

/**
 * Spinner component for indicating a loading state.
 * @param {Object} props - Component props.
 * @param {string} props.size - Size of the spinner (sm, md, lg).
 */
const Spinner = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className={`rounded-full border-t-transparent border-blue-600 animate-spin ${sizeClasses[size]}`}></div>
  );
};

export default Spinner;

/* minor update 20 */

// Component enhancement update 19
