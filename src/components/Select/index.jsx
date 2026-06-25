import React from 'react';

const Select = ({ label, options, value, onChange, required = false }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-2 font-medium text-gray-700">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

/* minor update 18 */

// Component enhancement update 17
