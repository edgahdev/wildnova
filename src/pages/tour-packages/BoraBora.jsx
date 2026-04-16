import Layout from '../../components/layouts/Layout';
import BookingCTA from '../../components/tours/BookingCTA';
import './BoraBora.css';

export default function BoraBora() {
  return (
    <Layout>

      {/* HERO */}
      <div className="hero">
        <h1>Bora Bora Wildlife Park</h1>
      </div>

      <div className="content container">

        {/* DESCRIPTION */}
        <div className="section">
          <h2>Description</h2>
          <p>
            Enjoy a peaceful and refreshing escape into nature at Bora Bora Wildlife Park,
            a hidden green sanctuary located near Mombasa. This park offers a relaxing
            environment where visitors can connect with nature, wildlife, and fresh air.
          </p>

          <p>
            It is a perfect destination for families, couples, and nature lovers who want
            a short but meaningful outdoor experience away from the busy city life.
          </p>

          <p>
            The park is home to a variety of animals, birds, and scenic walking trails
            surrounded by natural beauty and calm surroundings.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="section">
          <h2>Experience</h2>
          <p>
            Your journey begins with a hotel pickup followed by a short drive to the
            wildlife park. Upon arrival, you will enjoy a guided nature walk through
            the park’s green landscapes.
          </p>

          <p>
            As you explore, you will encounter different animal species, birds, and
            peaceful picnic areas perfect for relaxation and photography.
          </p>

          <p>
            The experience is slow-paced and calming, giving you time to enjoy nature
            at its purest form while learning about local wildlife.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="section">
          <h2>Tour Highlights</h2>
          <ul>
            <li>Nature walks in a peaceful wildlife park</li>
            <li>Bird watching and animal viewing</li>
            <li>Family-friendly outdoor experience</li>
            <li>Photography in natural surroundings</li>
            <li>Relaxation in green open spaces</li>
            <li>Short escape from city life</li>
          </ul>
        </div>

        {/* ITINERARY */}
        <div className="section">
          <h2>Half Day Itinerary</h2>
          <ul>
            <li>Hotel pickup</li>
            <li>Drive to Bora Bora Wildlife Park</li>
            <li>Entry and guided nature walk</li>
            <li>Wildlife viewing and bird watching</li>
            <li>Relaxation and photography stops</li>
            <li>Optional picnic time</li>
            <li>Return to hotel</li>
          </ul>

          <p>
            The experience begins with a relaxed hotel pickup followed by a short scenic drive
            away from the busy city into a quiet green environment where nature slowly takes over.
          </p>

          <p>
            On arrival at Bora Bora Wildlife Park, you are welcomed into a calm natural setting
            filled with trees, open spaces, and the soft sounds of birds and wildlife.
          </p>

          <p>
            Your guided nature walk begins at a gentle pace, allowing you to fully absorb the
            surroundings while your guide introduces you to the park’s flora and animal life.
          </p>

          <p>
            As you move deeper into the park, you will spot different bird species, small wildlife,
            and peaceful resting areas where animals gather naturally in their habitat.
          </p>

          <p>
            The walk is intentionally slow and immersive, giving you time for photography, quiet
            moments, and connection with nature without rush or pressure.
          </p>

          <p>
            You may choose to relax in designated picnic areas surrounded by greenery, enjoying
            the fresh air and peaceful atmosphere before continuing your exploration.
          </p>

          <p>
            The tour concludes with a smooth drive back to your hotel, leaving you refreshed,
            relaxed, and reconnected with nature after a calm escape from city life.
          </p>
        </div>

        {/* INCLUDED */}
        <div className="section">
          <h2>Included</h2>
          <ul>
            <li>Transport in 4x4 safari vehicle</li>
            <li>Professional tour guide</li>
            <li>Park entrance fees</li>
            <li>Guided nature walk</li>
            <li>Hotel pickup and drop-off</li>
            <li>Bottled drinking water</li>
          </ul>
        </div>

        {/* EXCLUDED */}
        <div className="section">
          <h2>Excluded</h2>
          <ul>
            <li>Visa fees</li>
            <li>Personal expenses</li>
            <li>Tips and gratuities</li>
            <li>Meals (unless arranged)</li>
            <li>Travel insurance</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="section contact-box">
          <h2>Get In Touch</h2>
          <p>
            Looking for a calm nature escape near Mombasa? Book your Bora Bora Wildlife Park
            tour today and enjoy a relaxing connection with nature.
          </p>
        </div>

      </div>

      <BookingCTA price="$70" />

    </Layout>
  );
}