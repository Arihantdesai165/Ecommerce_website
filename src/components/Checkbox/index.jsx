import React from 'react';
import PropTypes from 'prop-types';

/**
 * Checkbox component for boolean user input.
 * @param {Object} props - Component props.
 * @param {string} props.label - Checkbox label text.
 * @param {boolean} props.checked - Checked state.
 * @param {Function} props.onChange - Change handler.
 * @param {boolean} props.disabled - Disabled state.
 */
const Checkbox = ({ label, checked, onChange, disabled = false }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 disabled:opacity-50"
      />
      {label && <span className={`text-gray-700 ${disabled ? 'opacity-50' : ''}`}>{label}</span>}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Checkbox;

/* minor update 9 */

// Component enhancement update 9
