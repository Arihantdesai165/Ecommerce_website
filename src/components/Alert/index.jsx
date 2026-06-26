import React from 'react';
import PropTypes from 'prop-types';

/**
 * Alert component for displaying styled messages.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The content of the alert.
 * @param {string} props.type - The type of alert (info, success, warning, error).
 */
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

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
};

export default Alert;

/* minor update 2 */

// Component enhancement update 2
