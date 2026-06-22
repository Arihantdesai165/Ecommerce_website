import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            aria-expanded={activeIndex === index}
            className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 font-medium focus:outline-none flex justify-between items-center"
            onClick={() => toggleIndex(index)}
          >
            <span>{item.title}</span>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-3 bg-white text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Accordion;
