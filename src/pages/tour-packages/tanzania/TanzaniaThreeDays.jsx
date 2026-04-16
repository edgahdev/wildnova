import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './Tanzania.css';

export default function TanzaniaThreeDays() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero tanzania-hero-ngorongoro">
          <h1>3 Days Ngorongoro Safari</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 3-day safari takes you into the world-famous Ngorongoro Crater,
            often described as the “Eighth Wonder of the World.” The crater is
            one of the most unique wildlife ecosystems in Africa, formed by a
            collapsed volcano millions of years ago.
          </p>

          <p>
            Inside the crater, you will experience one of the highest densities of
            wildlife in Africa, including lions, elephants, buffalo, zebras, hyenas,
            and the rare black rhino. The scenery is breathtaking, with open grasslands,
            lakes, and forests all within one natural enclosure.
          </p>

          <p>
            This short safari is perfect for travelers who want a powerful wildlife
            experience in a limited time while still enjoying comfort, guided game
            drives, and unforgettable photography opportunities.
          </p>

          <p>
            Over three carefully planned days, you will travel through scenic
            highlands, descend into the crater floor, and experience sunrise and
            sunset game drives in one of the most spectacular wildlife destinations
            on earth. Every moment is designed to maximize wildlife viewing while
            giving you time to relax and absorb the beauty of Tanzania’s landscapes.
          </p>

          <p>
            This safari is also ideal for photography lovers, offering dramatic
            lighting conditions, close wildlife encounters, and panoramic views
            from the crater rim that stretch endlessly across the savannah.
          </p>

          <h2>Itinerary</h2>

          <p><strong>Day 1: Arrival & Transfer to Ngorongoro Highlands</strong></p>
          <p>
            Your journey begins with pickup from Arusha or Kilimanjaro area and a
            scenic drive through the Great Rift Valley towards the Ngorongoro
            Conservation Area. Along the way, you will pass local villages,
            coffee plantations, and rolling green landscapes that define northern Tanzania.
          </p>
          <p>
            Upon arrival at the lodge located on the crater rim or nearby highlands,
            you will check in and enjoy lunch while taking in breathtaking views of
            the crater below. The evening is spent relaxing, preparing for the
            full safari experience ahead.
          </p>

          <p><strong>Day 2: Full Ngorongoro Crater Game Drive</strong></p>
          <p>
            After an early breakfast, you descend 600 meters into the Ngorongoro Crater
            for a full-day game drive. This is the highlight of the safari, where wildlife
            is concentrated within a natural bowl, making sightings highly rewarding.
          </p>
          <p>
            You will explore different habitats including grasslands, swamps, and the
            soda lake where flamingos gather. Expect to see lions, elephants, buffalo,
            wildebeest, zebras, hippos, and if lucky, the rare black rhino.
          </p>
          <p>
            A picnic lunch will be served inside the crater at a designated site
            surrounded by wildlife and stunning scenery. In the afternoon, you continue
            exploring before ascending back to the lodge for dinner and overnight rest.
          </p>

          <p><strong>Day 3: Sunrise Drive & Return Journey</strong></p>
          <p>
            On your final morning, you enjoy a short sunrise drive along the crater rim,
            offering spectacular views as the early light illuminates the landscape
            below. This is one of the most peaceful and photogenic moments of the safari.
          </p>
          <p>
            After breakfast at the lodge, you begin your return journey to Arusha,
            passing through scenic highlands and optional cultural stops depending on
            timing. You arrive in the afternoon with unforgettable memories of Africa’s
            most iconic wildlife destination.
          </p>

        </div>

        <BookingCTA price="$950" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}