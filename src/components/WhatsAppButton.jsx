import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "254703609395";

  const message =
    "Hello Wildnova, I would like to inquire about your tour packages.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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