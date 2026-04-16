import Layout from '../../components/layouts/Layout';
import BookingCTA from '../../components/tours/BookingCTA';
import './FunziIsland.css';

export default function FunziIsland() {
  return (
    <Layout>

      {/* HERO */}
      <div className="hero">
        <h1>Funzi Island Tour</h1>
      </div>

      <div className="content container">

        {/* DESCRIPTION */}
        <div className="section">
          <h2>Description</h2>
          <p>
            Discover the untouched beauty of Funzi Island, a hidden paradise on Kenya’s South Coast
            surrounded by turquoise waters, mangrove forests, and peaceful coastal villages.
          </p>

          <p>
            Located near Bodo Village, Funzi Island remains one of the most secluded and pristine
            destinations in Kenya, making it perfect for travelers seeking tranquility, nature,
            and authentic coastal experiences.
          </p>

          <p>
            The island is famous for its sandbanks, sea turtles, and scenic boat rides along the
            Ramisi River, offering a unique blend of relaxation and adventure.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="section">
          <h2>Experience</h2>
          <p>
            Your journey begins with an early morning pickup followed by a scenic drive to the
            coastal village of Bodo. From here, you will board a traditional motorized canoe
            and cruise through mangrove forests and the Ramisi River.
          </p>

          <p>
            As you sail, you may spot crocodiles, exotic birds, and untouched natural scenery
            that makes this ecosystem so unique and peaceful.
          </p>

          <p>
            The highlight of the trip is the Funzi sandbank — a magical white stretch of sand
            that appears during low tide, perfect for swimming, sunbathing, and photography.
          </p>

          <p>
            You will also visit Funzi village to experience local coastal life before enjoying
            a fresh seafood lunch prepared in traditional Swahili style.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="section">
          <h2>Tour Highlights</h2>
          <ul>
            <li>Boat ride through mangrove forests</li>
            <li>Exploration of Ramisi River ecosystem</li>
            <li>Visit to Funzi sandbank</li>
            <li>Sea turtle conservation area</li>
            <li>Funzi village cultural experience</li>
            <li>Fresh seafood lunch by the ocean</li>
          </ul>
        </div>

        {/* ITINERARY */}
        <div className="section">
          <h2>Day 1: Funzi Island Tour</h2>
          <ul>
            <li>Early morning hotel pickup</li>
            <li>Drive to Bodo village</li>
            <li>Boat ride through mangroves</li>
            <li>Ramisi River exploration</li>
            <li>Visit Funzi sandbank for swimming & relaxation</li>
            <li>Visit Funzi village</li>
            <li>Seafood lunch</li>
            <li>Return to hotel</li>
          </ul>

          <p>
            The day begins with an early morning pickup from your hotel followed by a peaceful drive
            towards Bodo Village, where the landscape slowly shifts into quiet coastal wilderness and
            mangrove-lined waterways.
          </p>

          <p>
            Upon arrival, you board a traditional wooden canoe or boat and begin a calm cruise through
            the winding Ramisi River. The water is calm and reflective, surrounded by dense mangrove
            forests that form a natural green tunnel.
          </p>

          <p>
            As you move deeper into the ecosystem, your guide explains the importance of mangroves
            while you watch for wildlife such as kingfishers, herons, and occasionally crocodiles
            resting along the riverbanks.
          </p>

          <p>
            The journey continues toward the open ocean where the famous Funzi sandbank appears
            depending on the tide. Here, you step onto a pure white stretch of sand surrounded by
            turquoise water — a perfect place for swimming, relaxing, and photography.
          </p>

          <p>
            After enjoying the sandbank, you proceed to Funzi Village where you get a glimpse into
            traditional coastal life, including fishing culture, simple island living, and warm local
            hospitality.
          </p>

          <p>
            Later, you enjoy a freshly prepared Swahili seafood lunch served with ocean views,
            completing the authentic coastal experience.
          </p>

          <p>
            The tour ends with a relaxed boat ride back through the mangroves and a comfortable drive
            to your hotel, leaving you with a peaceful memory of one of Kenya’s most untouched island
            environments.
          </p>
        </div>

        {/* INCLUDED */}
        <div className="section">
          <h2>Included</h2>
          <ul>
            <li>Transport in a 4x4 safari vehicle</li>
            <li>Professional tour guide</li>
            <li>Boat / canoe ride</li>
            <li>Seafood lunch</li>
            <li>Drinking water</li>
            <li>Hotel pickup and drop-off</li>
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
            <li>Optional cultural activities</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="section contact-box">
          <h2>Get In Touch</h2>
          <p>
            Ready to explore one of Kenya’s most peaceful hidden gems? Book your Funzi Island
            adventure today and enjoy nature at its purest form.
          </p>
        </div>

      </div>

      <BookingCTA price="$120" />

    </Layout>
  );
}