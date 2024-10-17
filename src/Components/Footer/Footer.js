import React, { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer style={{ backgroundColor: '#082D9A', color: 'white' }} className="text-center py-4 mt-auto">
       <div>
          &copy; 2024 LearnTech. All rights reserved.{' '}
          <button onClick={openModal} className="underline text-blue-400">
            Privacy Policy
          </button>
        </div>
        <PrivacyPolicyModal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
};

export default Footer;
