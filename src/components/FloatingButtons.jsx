import React, { useState } from 'react';
import { FaWhatsapp, FaCommentDots } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

import './FloatingButtons.css'; // Make sure this path is correct

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtons = () => setIsOpen(!isOpen);

  return (
    <div className="floating-container">
      {isOpen && (
        <>
          {/* WhatsApp button */}
          <a
            href="https://wa.me/9779802379442?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="floating-button green"
          >
            <FaWhatsapp size={24} color="white" />
          </a>

          {/* Email button */}
          <a
            href="mailto:sandarbhikns@gmail.com?subject=Service%20Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20construction%20services."
            target="_blank"
            rel="noreferrer"
            className="floating-button blue"
          >
            <FaCommentDots size={24} color="white" />
          </a>
        </>
      )}

      {/* Toggle Button */}
      <div className="floating-button orange" onClick={toggleButtons}>
        {isOpen ? (
        <FaXmark size={24} color="white" />

        ) : (
          <FaCommentDots size={24} color="white" />
        )}
      </div>
    </div>
  );
};

export default FloatingButtons;