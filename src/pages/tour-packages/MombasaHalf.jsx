import Layout from '../../components/layouts/Layout';
import BookingCTA from '../../components/tours/BookingCTA';
import './MombasaHalf.css';

export default function MombasaHalf() {
  return (
    <Layout>

      {/* HERO */}
      <div className="hero">
        <h1>Half Day Mombasa City Tour</h1>
      </div>

      <div className="content container">

        {/* DESCRIPTION */}
        <div className="section">
          <h2>Description</h2>
          <p>
            Experience the essence of Mombasa in a short but unforgettable half-day city tour.
            This excursion is perfect for travelers with limited time who still want to explore
            the culture, history, and beauty of Kenya’s coastal city.
          </p>

          <p>
            Mombasa is a vibrant blend of Swahili, Arab, Portuguese, and Indian influences.
            In just a few hours, you will explore iconic landmarks, bustling markets, and
            historical streets that tell the story of centuries of coastal heritage.
          </p>

          <p>
            This tour is ideal for cruise passengers, business travelers, or anyone looking
            for a quick cultural immersion in Mombasa.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="section">
          <h2>Experience</h2>
          <p>
            Your journey begins with a hotel pickup followed by a guided drive into Mombasa Island.
            The first stop is the famous Elephant Tusks monument, one of the city’s most iconic landmarks.
          </p>

          <p>
            Next, you will explore the historic Old Town, where narrow streets, carved doors,
            and ancient buildings reflect centuries of Swahili heritage and coastal trade.
          </p>

          <p>
            You will also visit local spice and fruit markets, where the vibrant colors,
            aromas, and energy of daily life bring the city to life.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="section">
          <h2>Tour Highlights</h2>
          <ul>
            <li>Visit Elephant Tusks monument</li>
            <li>Old Town walking tour</li>
            <li>Explore local spice & fruit markets</li>
            <li>Learn Swahili culture & history</li>
            <li>Quick but rich cultural experience</li>
          </ul>
        </div>

        {/* ITINERARY */}
        <div className="section">
          <h2>Half Day Itinerary</h2>
          <ul>
            <li>Hotel pickup (morning or afternoon)</li>
            <li>Visit Elephant Tusks monument</li>
            <li>Guided Old Town exploration</li>
            <li>Spice & fruit market visit</li>
            <li>Photo stops & cultural briefing</li>
            <li>Return to hotel</li>
          </ul>

          <p>
            The experience begins with a convenient hotel pickup either in the morning or afternoon,
            followed by a short drive into the heart of Mombasa Island where the city’s vibrant culture
            starts to unfold.
          </p>

          <p>
            Your first stop is the iconic Elephant Tusks monument along Moi Avenue, a symbolic landmark
            representing the gateway to Mombasa’s central business and cultural district.
          </p>

          <p>
            From here, you proceed into the historic Old Town where you walk through narrow streets lined
            with carved wooden doors, ancient buildings, and architecture influenced by Swahili, Arab,
            and Portuguese heritage.
          </p>

          <p>
            The journey continues into the bustling spice and fruit markets where the city comes alive
            with color, scent, and sound. Here you experience local trade activity and interact with
            vendors offering fresh produce and aromatic spices.
          </p>

          <p>
            Throughout the tour, your guide provides cultural insights, historical background, and
            storytelling that brings Mombasa’s centuries-old heritage to life while making stops for
            photography and exploration.
          </p>

          <p>
            The experience concludes with a relaxed drive back to your hotel, leaving you with a rich
            impression of Mombasa’s culture, history, and daily life within just a few hours.
          </p>
        </div>

        {/* INCLUDED */}
        <div className="section">
          <h2>Included</h2>
          <ul>
            <li>Transport in a 4x4 safari vehicle</li>
            <li>Professional English-speaking guide</li>
            <li>Hotel pickup and drop-off</li>
            <li>Bottled drinking water</li>
            <li>Soft drinks (Fanta, Sprite, Coca-Cola)</li>
            <li>Wi-Fi onboard</li>
          </ul>
        </div>

        {/* EXCLUDED */}
        <div className="section">
          <h2>Excluded</h2>
          <ul>
            <li>Entry fees where applicable</li>
            <li>Personal expenses</li>
            <li>Tips and gratuities</li>
            <li>Meals</li>
            <li>Travel insurance</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="section contact-box">
          <h2>Get In Touch</h2>
          <p>
            Short on time but want to experience Mombasa? Book your half-day tour today
            and enjoy a fast but meaningful cultural journey.
          </p>
        </div>

      </div>

      <BookingCTA price="$60" />

    </Layout>
  );
}