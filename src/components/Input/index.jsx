import React from 'react';

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
