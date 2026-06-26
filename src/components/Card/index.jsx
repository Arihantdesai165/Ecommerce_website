import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a structured box.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Card content.
 * @param {string} props.className - Additional CSS classes.
 */
const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 border border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;

/* minor update 7 */

// Component enhancement update 7
