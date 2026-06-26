import React from 'react';

/**
 * Input component for collecting user text input.
 * @param {Object} props - Component props.
 * @param {string} props.label - Label text above the input.
 * @param {string} props.type - Input type (text, email, password, etc.).
 * @param {string} props.value - Controlled value.
 * @param {Function} props.onChange - Change handler.
 * @param {string} props.placeholder - Placeholder text.
 * @param {boolean} props.required - Whether the input is required.
 */
const Input = ({ label, type = 'text', value, onChange, placeholder = '', required = false }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-2 font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Input;

/* minor update 13 */

// Component enhancement update 12
