import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = ({ agentNumber, message }) => {
  const whatsappLink = `https://wa.me/${agentNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <span className="whatsapp-icon">💬</span>
      <span className="whatsapp-text">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;