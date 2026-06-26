import React, { useState } from 'react';

/**
 * Tooltip component for showing contextual hints on hover.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The element that triggers the tooltip.
 * @param {string} props.text - The text displayed inside the tooltip.
 */
const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

// Component enhancement update 23
