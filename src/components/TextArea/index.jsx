import React from 'react';

/**
 * TextArea component for collecting multi-line user input.
 * @param {Object} props - Component props.
 * @param {string} props.label - Label text above the textarea.
 * @param {string} props.value - Controlled value.
 * @param {Function} props.onChange - Change handler.
 * @param {string} props.placeholder - Placeholder text.
 * @param {number} props.rows - Number of visible rows.
 * @param {boolean} props.required - Whether the field is required.
 */
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

// Component enhancement update 22
