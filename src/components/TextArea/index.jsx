import React from 'react';

const TextArea = ({ label, value, onChange, placeholder = '', rows = 4, required = false }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-2 font-medium text-gray-700">{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-y"
      />
    </div>
  );
};

export default TextArea;
