import Layout from '../../components/layouts/Layout';
import BookingCTA from '../../components/tours/BookingCTA';
import './MombasaFull.css';

export default function MombasaFull() {
  return (
    <Layout>

      {/* HERO */}
      <div className="hero">
        <h1>1 Day Mombasa City Tour</h1>
      </div>

      <div className="content container">

        {/* DESCRIPTION */}
        <div className="section">
          <h2>Description</h2>
          <p>
            Discover the vibrant heartbeat of Kenya’s coastal culture with a full-day Mombasa City Tour.
            Mombasa is Kenya’s oldest city, rich in history, culture, and architectural beauty shaped
            by African, Arab, Portuguese, and Indian influences.
          </p>

          <p>
            This tour takes you through centuries of history, from the iconic Fort Jesus to the narrow
            streets of Old Town, bustling spice markets, and the famous Elephant Tusks monument.
            Every stop tells a story of trade, culture, and civilization.
          </p>

          <p>
            Perfect for culture lovers, history enthusiasts, and first-time visitors who want to experience
            the real essence of Mombasa in just one day.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="section">
          <h2>Experience</h2>
          <p>
            Your journey begins at Fort Jesus, a UNESCO World Heritage Site built by the Portuguese in 1593.
            Here, your guide will walk you through centuries of coastal defense history, trade routes, and
            cultural transformation.
          </p>

          <p>
            Next, explore Old Town Mombasa, where narrow streets, carved wooden doors, and ancient Swahili
            architecture bring history to life. You’ll learn about culture, religion, food, and heritage
            of the coastal people.
          </p>

          <p>
            Continue to the Spice Market, where you will experience local trade, fresh produce, and aromatic
            spices that shaped Mombasa’s identity as a trading hub.
          </p>

          <p>
            Finally, visit the iconic Elephant Tusks monument built in 1952 to honor Queen Elizabeth’s visit
            to Kenya — a perfect photo stop before enjoying a local Swahili lunch.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="section">
          <h2>Tour Highlights</h2>
          <ul>
            <li>Visit Fort Jesus UNESCO World Heritage Site</li>
            <li>Explore Old Town Mombasa</li>
            <li>Walk through spice and fruit markets</li>
            <li>See the iconic Elephant Tusks monument</li>
            <li>Experience Swahili culture and history</li>
            <li>Local Swahili lunch experience</li>
          </ul>
        </div>

        {/* ITINERARY */}
        <div className="section">
          <h2>Day 1: Mombasa City Tour</h2>
          <ul>
            <li>Hotel pickup in the morning</li>
            <li>Start at Fort Jesus (2 hours guided tour)</li>
            <li>Old Town exploration (1 hour)</li>
            <li>Spice Market visit (30 minutes)</li>
            <li>Elephant Tusks monument stop (30 minutes)</li>
            <li>Local Swahili lunch</li>
            <li>Return to hotel</li>
          </ul>

          <p>
            The day begins with a morning hotel pickup and a smooth drive into Mombasa Island, where the
            city’s deep history and cultural energy immediately start to unfold as you approach the old
            coastal settlement.
          </p>

          <p>
            Your first major stop is Fort Jesus, a UNESCO World Heritage Site. Here, your guide takes you
            through ancient corridors, stone walls, and historical exhibits that explain centuries of
            Portuguese rule, coastal trade, and cultural evolution along the East African coast.
          </p>

          <p>
            From the fort, you continue into Old Town Mombasa where time seems to slow down. You walk
            through narrow winding streets lined with carved wooden doors, balconies, and buildings
            influenced by Swahili, Arab, and Indian architecture.
          </p>

          <p>
            The journey continues into the bustling spice and fruit markets, where the air is filled with
            rich aromas of cloves, cinnamon, cardamom, and fresh produce. This is a sensory experience
            that reflects Mombasa’s historical role as a major trading hub.
          </p>

          <p>
            You then proceed to the iconic Elephant Tusks monument along Moi Avenue, a symbolic landmark
            representing the entrance to the city center and a popular photo stop for visitors exploring
            Mombasa.
          </p>

          <p>
            After a morning full of exploration, you enjoy a well-deserved Swahili lunch at a local
            restaurant where you experience authentic coastal cuisine influenced by centuries of cultural
            fusion.
          </p>

          <p>
            The tour concludes with a relaxed drive back to your hotel, giving you time to reflect on a
            full day of history, culture, architecture, and everyday life in one of Africa’s most
            historically rich coastal cities.
          </p>
        </div>

        {/* INCLUDED */}
        <div className="section">
          <h2>Included</h2>
          <ul>
            <li>Transport in 4x4 safari vehicle</li>
            <li>Professional English-speaking guide</li>
            <li>Hotel pickup and drop-off</li>
            <li>Fort Jesus entrance fees</li>
            <li>Bottled drinking water</li>
            <li>Soft drinks (Fanta, Sprite, Coca-Cola)</li>
            <li>Lunch during tour</li>
            <li>Wi-Fi onboard</li>
          </ul>
        </div>

        {/* EXCLUDED */}
        <div className="section">
          <h2>Excluded</h2>
          <ul>
            <li>Visa fees</li>
            <li>Personal expenses</li>
            <li>Tips and gratuities</li>
            <li>Travel insurance</li>
            <li>Optional activities not listed</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="section contact-box">
          <h2>Get In Touch</h2>
          <p>
            Want to experience the true culture of Mombasa? Contact us today to book your city tour or
            customize your Swahili cultural experience.
          </p>
        </div>

      </div>

      <BookingCTA price="$80" />

    </Layout>
  );
}