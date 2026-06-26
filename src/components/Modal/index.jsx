import React from 'react';

/**
 * Modal component for displaying overlay dialogs.
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal is visible.
 * @param {Function} props.onClose - Handler called when the modal is closed.
 * @param {string} props.title - Modal heading text.
 * @param {React.ReactNode} props.children - Modal body content.
 */
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

/* minor update 14 */

// Component enhancement update 13
