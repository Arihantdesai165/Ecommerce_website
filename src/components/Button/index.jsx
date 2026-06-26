import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component for user interactions.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Button content.
 * @param {Function} props.onClick - Click handler.
 * @param {string} props.type - Button type (button, submit, reset).
 * @param {string} props.className - Additional CSS classes.
 * @param {boolean} props.disabled - Whether the button is disabled.
 */
const Button = ({ children, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;

/* minor update 6 */

// Component enhancement update 6
