import React from "react";
import "./MeetupLocation.css";

const MeetupLocation = () => {
  const directionsLink =
    "https://www.google.com/maps/dir/?api=1&destination=Diani+Bazaar+Kenya";

  return (
    <section className="meetup-location">
      <div className="container">
        <h2>Meet-Up Location</h2>

        <p>
          All tours can start from our Wildnova office located in Diani Bazaar,
          near the beautiful Diani Beach coastline. Guests can meet our guide
          here before departure or get directions using the button below.
        </p>

        <div className="map-wrapper">
          <iframe
            title="Wildnova Office Location"
            src="https://maps.google.com/maps?q=diani%20bazaar%20kenya&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="map-actions">
          <a
            href={directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="directions-btn"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetupLocation;