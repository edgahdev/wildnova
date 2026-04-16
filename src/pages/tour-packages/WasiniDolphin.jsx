import Layout from '../../components/layouts/Layout';
import BookingCTA from '../../components/tours/BookingCTA';
import './WasiniDolphin.css';

export default function WasiniDolphin() {
  return (
    <Layout>

      {/* HERO */}
      <div className="hero">
        <h1>Wasini Dolphin Tour</h1>
      </div>

      <div className="content container">

        {/* DESCRIPTION */}
        <div className="section">
          <h2>Description</h2>
          <p>
            Experience one of Kenya’s most magical marine adventures with the Wasini Dolphin Tour.
            Located along the pristine southern coastline, this tour takes you into the crystal-clear
            waters of the Indian Ocean, home to playful dolphins and vibrant coral reefs.
          </p>

          <p>
            The journey takes you to Kisite-Mpunguti Marine Park, one of the best snorkeling
            destinations in East Africa, where marine life thrives in colorful coral gardens.
          </p>

          <p>
            This is the perfect tour for ocean lovers, adventure seekers, and anyone looking to
            experience the beauty of Kenya’s underwater world.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="section">
          <h2>Experience</h2>
          <p>
            Your adventure begins early in the morning with a scenic drive to the coastal village
            of Shimoni, where you will board a traditional dhow boat.
          </p>

          <p>
            As you sail across the turquoise waters, you will have the chance to spot dolphins
            swimming freely alongside the boat — a truly unforgettable moment.
          </p>

          <p>
            You will then arrive at Kisite Marine Park, where you can snorkel among colorful fish,
            coral reefs, and crystal-clear waters guided by professional instructors.
          </p>

          <p>
            After the ocean adventure, you will sail to Wasini Island for a delicious Swahili
            seafood lunch overlooking the ocean, followed by a short cultural village walk.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="section">
          <h2>Tour Highlights</h2>
          <ul>
            <li>Dolphin watching in open ocean</li>
            <li>Snorkeling at Kisite-Mpunguti Marine Park</li>
            <li>Traditional dhow sailing experience</li>
            <li>Coral reef exploration</li>
            <li>Swahili seafood lunch on Wasini Island</li>
            <li>Optional village cultural walk</li>
          </ul>
        </div>

        {/* ITINERARY */}
        <div className="section">
          <h2>Day 1: Wasini Dolphin Tour</h2>
          <ul>
            <li>Early morning hotel pickup</li>
            <li>Drive to Shimoni village</li>
            <li>Board traditional dhow boat</li>
            <li>Dolphin watching cruise</li>
            <li>Snorkeling at Kisite Marine Park</li>
            <li>Visit Wasini Island</li>
            <li>Seafood lunch</li>
            <li>Return to hotel</li>
          </ul>

          <p>
            The journey begins with an early morning pickup from your hotel followed by a scenic coastal
            drive towards Shimoni village, giving you a glimpse of Kenya’s coastal beauty and local life.
          </p>

          <p>
            Upon arrival, you are welcomed and briefed before boarding a traditional wooden dhow boat.
            The sailing experience takes you deep into the Indian Ocean where the adventure begins.
          </p>

          <p>
            As you cruise across the turquoise waters, you will witness dolphins swimming freely in their
            natural habitat, often coming close to the boat in playful groups — a highlight of the tour.
          </p>

          <p>
            The dhow then reaches Kisite-Mpunguti Marine Park where you will snorkel among coral reefs,
            tropical fish, and crystal-clear waters under the guidance of professional instructors.
          </p>

          <p>
            After snorkeling, you sail towards Wasini Island where a freshly prepared Swahili seafood lunch
            is served in a peaceful oceanfront setting, offering a relaxing coastal dining experience.
          </p>

          <p>
            The experience concludes with an optional walk through Wasini village to explore local culture
            before returning to Shimoni and later transferring back to your hotel.
          </p>
        </div>

        {/* INCLUDED */}
        <div className="section">
          <h2>Included</h2>
          <ul>
            <li>Transport in a 4x4 safari vehicle</li>
            <li>Professional marine guide</li>
            <li>Dhow boat cruise</li>
            <li>Snorkeling equipment</li>
            <li>Seafood lunch</li>
            <li>Drinking water</li>
            <li>Hotel pickup and drop-off</li>
            <li>Park entry fees</li>
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
            <li>Optional dolphin interaction fees (if applicable)</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="section contact-box">
          <h2>Get In Touch</h2>
          <p>
            Ready for a magical ocean experience? Book your Wasini Dolphin Tour today and
            explore Kenya’s underwater paradise.
          </p>
        </div>

      </div>

      <BookingCTA price="$140" />

    </Layout>
  );
}