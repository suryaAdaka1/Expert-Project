// src/PrivacyPolicyModal.js
import React from 'react';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Close modal when clicking outside of the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick} // Attach the click handler to the overlay
    >
      <div className="bg-white rounded-lg w-11/12 md:w-1/2 p-4">
        <h2 className="text-xl text-black font-bold mb-4">Privacy Policy</h2>
        <p className="mb-4 text-black">
          This is a sample privacy policy. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque imperdiet, orci ut pharetra placerat, metus metus cursus enim, a vehicula est
          nisi ut est. Vivamus venenatis mollis odio, a ultricies orci efficitur eget. Sed vestibulum
          diam ut eros feugiat, nec tristique arcu accumsan.
        </p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
