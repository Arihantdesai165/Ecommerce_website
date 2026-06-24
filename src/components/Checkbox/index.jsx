import React from 'react';

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

export default Checkbox;

/* minor update 9 */
