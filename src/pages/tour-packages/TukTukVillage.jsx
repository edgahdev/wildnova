import Layout from '../../components/layouts/Layout';
import BookingCTA from '../../components/tours/BookingCTA';
import './TukTukVillage.css';

export default function TukTukVillage() {
  return (
    <Layout>

      {/* HERO */}
      <div className="hero">
        <h1>Tuk Tuk Village Experience</h1>
      </div>

      <div className="content container">

        {/* DESCRIPTION */}
        <div className="section">
          <h2>Description</h2>
          <p>
            Discover the real heartbeat of coastal Kenya with the Tuk Tuk Village Experience.
            This unique cultural tour takes you deep into local communities where daily life,
            traditions, and Swahili culture come alive in the most authentic way.
          </p>

          <p>
            Travel through narrow village paths in a traditional Tuk Tuk, the most popular
            local transport, and experience the charm of everyday life along the Kenyan coast.
          </p>

          <p>
            This tour is perfect for travelers who want to go beyond beaches and resorts
            and truly connect with local people and culture.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="section">
          <h2>Experience</h2>
          <p>
            Your journey begins with a hotel pickup followed by a short drive to a local
            coastal village where your Tuk Tuk adventure begins.
          </p>

          <p>
            Ride through vibrant neighborhoods, passing by small shops, schools, markets,
            and traditional Swahili homes built with coral stone and mangrove wood.
          </p>

          <p>
            Along the way, you will interact with friendly locals, learn about their daily
            activities, and gain insight into coastal traditions and lifestyle.
          </p>

          <p>
            You will also stop at local markets and craft shops where handmade items,
            fresh produce, and cultural artifacts are displayed.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="section">
          <h2>Tour Highlights</h2>
          <ul>
            <li>Ride in a traditional Tuk Tuk</li>
            <li>Explore local coastal villages</li>
            <li>Interact with friendly communities</li>
            <li>Visit local markets and craft shops</li>
            <li>Learn Swahili culture and traditions</li>
            <li>Authentic everyday life experience</li>
          </ul>
        </div>

        {/* ITINERARY */}
        <div className="section">
          <h2>Half Day Itinerary</h2>
          <ul>
            <li>Hotel pickup</li>
            <li>Transfer to village starting point</li>
            <li>Tuk Tuk village ride begins</li>
            <li>Local market visit</li>
            <li>Cultural interaction with locals</li>
            <li>Photo stops and storytelling</li>
            <li>Return to hotel</li>
          </ul>

          <p>
            The experience begins with a convenient hotel pickup followed by a short drive
            to the coastal village where your Tuk Tuk adventure officially starts.
          </p>

          <p>
            Once you arrive, you are welcomed by your local guide who introduces you to the
            village setting and explains the cultural significance of the Tuk Tuk transport
            in daily coastal life.
          </p>

          <p>
            You then begin your ride through narrow village paths, passing through lively
            neighborhoods, small shops, schools, and traditional Swahili homes built using
            coral stone and natural coastal materials.
          </p>

          <p>
            Along the journey, you will stop at a local market where you experience real
            daily trading activity, interact with vendors, and explore fresh produce,
            handmade crafts, and cultural items.
          </p>

          <p>
            The tour continues with meaningful interactions with local residents, where you
            learn about their lifestyle, traditions, and community values in an authentic
            and respectful setting.
          </p>

          <p>
            There will also be designated photo stops and storytelling moments where your
            guide shares historical and cultural insights about the village and coastal life.
          </p>

          <p>
            The experience concludes with a relaxed ride back to the starting point before
            being transferred to your hotel with a deeper understanding of real Kenyan
            coastal culture.
          </p>
        </div>

        {/* INCLUDED */}
        <div className="section">
          <h2>Included</h2>
          <ul>
            <li>Transport in 4x4 vehicle</li>
            <li>Professional local guide</li>
            <li>Tuk Tuk village ride</li>
            <li>Hotel pickup and drop-off</li>
            <li>Bottled drinking water</li>
            <li>Cultural guidance and interpretation</li>
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
            <li>Optional shopping items</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="section contact-box">
          <h2>Get In Touch</h2>
          <p>
            Want to experience real Kenyan village life? Book your Tuk Tuk Village tour today
            and connect with authentic coastal culture.
          </p>
        </div>

      </div>

      <BookingCTA price="$50" />

    </Layout>
  );
}