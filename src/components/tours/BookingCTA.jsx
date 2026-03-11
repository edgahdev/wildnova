import React, { useState } from 'react';
import './BookingCTA.css';

const BookingCTA = ({ agentNumber = '254700000000' }) => {
  const tourCategories = {
    "Day Trips": [
      "1 Day Tsavo East",
      "1 Day Shimba Hills National Park",
      "Full Day Mombasa City Tour",
      "Half Day Mombasa City Tour",
      "Funzi Island",
      "Wasini Island (Dolphin)",
      "Tuk Tuk Trip to the Village",
      "Bora Bora Park"
    ],
    "Nairobi Tours": [
      "9 Days Aberdare, Ol Pejeta, Meru, Samburu, Naivasha & Maasai Mara (2 Nights)",
      "7 Days Amboseli (2), Nakuru & Maasai Mara (3)",
      "6 Days Amboseli, Nakuru, Naivasha & Maasai Mara (2)",
      "3 Days Maasai Mara by Road",
      "5 Days Amboseli (2), Tsavo West & Tsavo East",
      "10 Days Tsavo West, Tsavo East, Saltlick, Amboseli (2), Naivasha, Nakuru & Maasai Mara (2)"
    ],
    "Mombasa Tours": [
      "3 Days Maasai Mara by Flight",
      "2 Days Tsavo East & Saltlick Lodge",
      "4 Days Tsavo East, Amboseli & Saltlick",
      "5 Days Saltlick, Amboseli, Ziwani & Tsavo East",
      "3 Days Tsavo West & Tsavo East",
      "4 Days Tsavo West, Amboseli & Tsavo East"
    ],
    "Kenya-Tanzania Safaris": [
      "9 Days Naivasha, Maasai Mara, Serengeti & Ngorongoro",
      "12 Days Amboseli, Naivasha, Nakuru, Maasai Mara, Serengeti drop off Arusha",
      "13 Days Samburu, Naivasha, Nakuru, Maasai Mara, Serengeti, Tarangire & Amboseli"
    ],
    "Tanzania Safaris": [
      "3 Days Ngorongoro Safari",
      "4 Days Manyara, Ngorongoro & Tarangire",
      "5 Days Manyara, Ngorongoro & Serengeti"
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState("Day Trips");
  const [selectedTour, setSelectedTour] = useState(tourCategories["Day Trips"][0]);

  const whatsappLink = `https://wa.me/${agentNumber}?text=${encodeURIComponent(
    `Hello Admin, I am interested in booking the following tour: ${selectedTour} under category: ${selectedCategory}`
  )}`;

  return (
    <section className="booking-cta">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-info">
            <h2>Ready for Your Adventure?</h2>
            <p>Choose your tour category and tour, then send a message to book instantly!</p>

            {/* Category Select */}
            <label htmlFor="category-select" className="tour-select-label">
              Select a Tour Category:
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => {
                const category = e.target.value;
                setSelectedCategory(category);
                setSelectedTour(tourCategories[category][0]);
              }}
              className="tour-select"
            >
              {Object.keys(tourCategories).map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Tour Select */}
            <label htmlFor="tour-select" className="tour-select-label">
              Select a Tour:
            </label>
            <select
              id="tour-select"
              value={selectedTour}
              onChange={(e) => setSelectedTour(e.target.value)}
              className="tour-select"
            >
              {tourCategories[selectedCategory].map((tour, idx) => (
                <option key={idx} value={tour}>
                  {tour}
                </option>
              ))}
            </select>
          </div>

          <div className="cta-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Now
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;