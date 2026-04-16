import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="container">
        
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-updated">Last Updated: April 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to WildNova Travel. By booking a tour or using our website,
            you agree to the following Terms & Conditions. Please read them carefully.
          </p>
        </section>

        <section>
          <h2>2. Booking & Payments</h2>
          <ul>
            <li>A deposit is required to confirm your booking.</li>
            <li>Full payment must be made before the tour begins.</li>
            <li>Payments can be made via bank transfer, mobile money, or other approved methods.</li>
          </ul>
        </section>

        <section>
          <h2>3. Cancellation Policy</h2>
          <ul>
            <li>Cancellations made 30+ days before travel may receive a partial refund.</li>
            <li>Cancellations within 30 days may incur charges.</li>
            <li>No-shows are non-refundable.</li>
          </ul>
        </section>

        <section>
          <h2>4. Travel Responsibility</h2>
          <p>
            WildNova Travel acts as a tour operator and is not liable for delays,
            injuries, or losses caused by third-party providers such as airlines,
            hotels, or transport services.
          </p>
        </section>

        <section>
          <h2>5. Health & Safety</h2>
          <ul>
            <li>Clients are responsible for ensuring they are medically fit to travel.</li>
            <li>Travel insurance is highly recommended.</li>
            <li>Follow all safety instructions from guides at all times.</li>
          </ul>
        </section>

        <section>
          <h2>6. Changes to Itinerary</h2>
          <p>
            We reserve the right to adjust itineraries due to weather, safety concerns,
            or unforeseen circumstances while ensuring the best possible experience.
          </p>
        </section>

        <section>
          <h2>7. Liability</h2>
          <p>
            WildNova Travel shall not be held responsible for personal injury,
            loss, or damage to personal belongings during the trip.
          </p>
        </section>

        <section>
          <h2>8. Acceptance of Terms</h2>
          <p>
            By booking with us, you acknowledge that you have read, understood,
            and agreed to these Terms & Conditions.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Terms;