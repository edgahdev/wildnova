import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="container">

        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-updated">Last Updated: April 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            WildNova Travel respects your privacy and is committed to protecting
            your personal information. This policy explains how we collect, use,
            and safeguard your data when you use our services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li>Full name and contact details</li>
            <li>Email address and phone number</li>
            <li>Booking and travel preferences</li>
            <li>Any information you voluntarily provide</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To process bookings and inquiries</li>
            <li>To communicate important travel updates</li>
            <li>To improve our services and customer experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal
            data from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2>5. Sharing of Information</h2>
          <p>
            We do not sell or rent your personal information. However, we may
            share necessary details with trusted partners such as hotels,
            transport providers, or guides to complete your booking.
          </p>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>
            Our website may use cookies to improve user experience and analyze
            website traffic. You can disable cookies in your browser settings.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <ul>
            <li>You may request access to your personal data</li>
            <li>You may request corrections or deletion of your data</li>
            <li>You may opt out of marketing communications at any time</li>
          </ul>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, contact us at:
            <br />
            <strong>Email:</strong> wildnovatravel@gmail.com
            <br />
            <strong>Phone:</strong> +254 792 157566
          </p>
        </section>

      </div>
    </div>
  );
};

export default Privacy;