import React from 'react';
import PropTypes from 'prop-types';

/**
 * Divider component to separate content visually.
 * @param {Object} props - Component props.
 * @param {string} props.className - Additional CSS classes.
 */
const Divider = ({ className = '' }) => {
  return (
    <hr className={`border-t border-gray-200 my-4 ${className}`} />
  );
};

Divider.propTypes = {
  className: PropTypes.string,
};

export default Divider;

/* minor update 10 */

// Component enhancement update 10
