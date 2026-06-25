import React from 'react';

const Switch = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div className={`block w-10 h-6 rounded-full transition ${checked ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
        <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${checked ? 'translate-x-4' : ''}`}></div>
      </div>
      {label && <div className="ml-3 text-gray-700 font-medium">{label}</div>}
    </label>
  );
};

export default Switch;

// Component enhancement update 20
