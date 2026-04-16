import Layout from '../../components/layouts/Layout';
import BookingCTA from '../../components/tours/BookingCTA';
import './TsavoEast.css';

export default function TsavoEast() {
  return (
    <Layout>

      {/* HERO */}
      <div className="hero">
        <h1>Tsavo East Safari</h1>
      </div>

      <div className="content container">

        {/* DESCRIPTION */}
        <div className="section">
          <h2>Description</h2>
          <p>
            Experience the true African wilderness with a safari to Tsavo East National Park,
            one of the largest and oldest parks in Kenya. Famous for its vast open savannah,
            red-dust landscapes, and incredible wildlife, Tsavo East offers an unforgettable
            safari adventure.
          </p>

          <p>
            The park is home to the iconic red elephants, lions, buffaloes, giraffes,
            zebras, and a wide variety of bird species. The unique red soil gives the animals
            their distinctive color, creating one of the most memorable safari sights in Africa.
          </p>

          <p>
            Whether you're a first-time visitor or a seasoned traveler, Tsavo East delivers
            breathtaking scenery and thrilling wildlife encounters in their natural habitat.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="section">
          <h2>Experience</h2>
          <p>
            Your safari begins early in the morning with a comfortable pickup from your hotel
            and a scenic drive towards Tsavo East National Park. Upon arrival, you will embark
            on an exciting game drive in a 4x4 safari vehicle with a professional guide.
          </p>

          <p>
            As you explore the park, you will track wildlife across the plains, visit watering
            holes like the famous Aruba Dam, and enjoy stunning views along the Galana River,
            where crocodiles and hippos can often be spotted.
          </p>

          <p>
            A relaxing lunch break will be provided at a lodge or picnic site before continuing
            with an afternoon game drive. The tour ends with a return journey back to your hotel.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="section">
          <h2>Tour Highlights</h2>
          <ul>
            <li>Game drives in Tsavo East National Park</li>
            <li>Spot the famous red elephants</li>
            <li>Visit Aruba Dam and Galana River</li>
            <li>See lions, giraffes, zebras, and buffaloes</li>
            <li>Beautiful African savannah landscapes</li>
          </ul>
        </div>

        {/* ITINERARY */}
        <div className="section">
          <h2>Day 1: Tsavo East Safari</h2>
          <ul>
            <li>Early morning pickup from hotel</li>
            <li>Drive to Tsavo East National Park</li>
            <li>Morning game drive</li>
            <li>Visit Aruba Dam & Galana River</li>
            <li>Lunch at lodge/picnic site</li>
            <li>Afternoon game drive</li>
            <li>Return to hotel</li>
          </ul>

          <p>
            The safari begins early in the morning with pickup from your hotel followed by a scenic drive
            towards Tsavo East National Park. Along the way, you transition from coastal landscapes into
            the vast open savannah, building anticipation for the wildlife experience ahead.
          </p>

          <p>
            Upon arrival at the park, you proceed through the main gate and begin your first game drive.
            This is where you start encountering wildlife in their natural habitat, including elephants,
            giraffes, zebras, and antelopes roaming freely across the red-dust plains.
          </p>

          <p>
            The morning game drive continues deeper into the park where your guide tracks wildlife movements
            and explains animal behavior, ecosystem patterns, and the unique features of Tsavo East. You may
            also spot predators such as lions or cheetahs depending on movement patterns.
          </p>

          <p>
            You then visit key water points such as Aruba Dam and the Galana River, which attract large
            concentrations of animals. Here you can observe crocodiles basking along the riverbanks and
            hippos partially submerged in water while herds of elephants gather to drink and cool off.
          </p>

          <p>
            A mid-day break follows at a designated lodge or picnic site where you enjoy lunch while
            surrounded by the sounds of the wild. This is a relaxing moment to rest, refresh, and take in
            the vastness of the African landscape.
          </p>

          <p>
            In the afternoon, you continue with another game drive as temperatures cool down and animals
            become more active again. This is often the best time for photography and final wildlife sightings
            before exiting the park.
          </p>

          <p>
            The safari concludes with an evening drive out of Tsavo East and a comfortable return journey
            back to your hotel, carrying unforgettable memories of Africa’s iconic wilderness.
          </p>
        </div>

        {/* INCLUDED */}
        <div className="section">
          <h2>Included</h2>
          <ul>
            <li>Transport in a 4x4 safari vehicle with pop-up roof</li>
            <li>Professional English-speaking guide</li>
            <li>Park entrance fees</li>
            <li>Lunch during safari</li>
            <li>Drinking water (2 bottles)</li>
            <li>Hotel pickup and drop-off</li>
            <li>Government taxes and levies</li>
            <li>Wi-Fi and charging ports onboard</li>
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
            <li>Alcoholic beverages</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="section contact-box">
          <h2>Get In Touch</h2>
          <p>
            Ready for an unforgettable safari? Contact us today to book your Tsavo East
            adventure or customize your experience to suit your travel needs.
          </p>
        </div>

      </div>

      <BookingCTA price="$150" />

    </Layout>
  );
}