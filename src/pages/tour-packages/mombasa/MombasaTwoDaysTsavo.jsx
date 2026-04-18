import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './MombasaTourDetails.css';

export default function MombasaTwoDaysTsavo() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>2 Days Tsavo East Transit Safari & Saltlick Lodge Stay</h1>
          <p className="subtitle">
            A short yet rewarding safari featuring a scenic game drive in Tsavo East
            and an unforgettable overnight stay at the iconic Saltlick Lodge.
          </p>
        </div>

        <div className="content">

          <section className="overview">
            <h2>Safari Overview</h2>

            <p>
              This 2-day safari is designed as a transit experience, combining an exciting
              game drive through Tsavo East National Park with an overnight stay at the
              renowned Saltlick Lodge in Taita Hills Wildlife Sanctuary. It is ideal for
              travelers seeking a compact yet immersive safari without compromising on
              wildlife encounters or comfort.
            </p>

            <p>
              The adventure begins with a game drive in Tsavo East, one of Kenya’s largest
              and most iconic national parks. Known for its vast open plains, red soil,
              and large elephant herds, the park offers excellent opportunities to spot
              lions, giraffes, zebras, buffaloes, antelopes, and diverse birdlife.
            </p>

            <p>
              After the game drive, the safari transitions to Saltlick Lodge—one of Africa’s
              most unique safari accommodations. Elevated on stilts above a natural waterhole,
              the lodge provides continuous wildlife viewing as animals gather below to drink,
              creating exceptional close-range encounters both day and night.
            </p>

            <p>
              This safari perfectly balances adventure and relaxation, offering classic
              game viewing followed by a memorable lodge experience in a truly distinctive setting.
            </p>
          </section>

          <section className="itinerary">
            <h2>Itinerary</h2>

            <div className="day">
              <h3>Day 1: Mombasa – Tsavo East – Saltlick Lodge</h3>
              <p>
                Your safari begins with an early morning departure from Mombasa towards
                Tsavo East National Park. Upon arrival, you will embark on a game drive
                across the park’s expansive savannah, exploring wildlife-rich areas such
                as the Galana River. Expect sightings of elephants, lions, giraffes,
                zebras, and various bird species in their natural habitat.
              </p>

              <p>
                After the game drive, you will exit Tsavo East and proceed to Taita Hills
                Wildlife Sanctuary, arriving at Saltlick Lodge. After check-in, enjoy
                lunch or relaxation before spending the evening observing wildlife at
                the waterhole directly from the lodge’s viewing decks. Dinner and overnight
                at Saltlick Lodge.
              </p>
            </div>

            <div className="day">
              <h3>Day 2: Saltlick Lodge – Mombasa</h3>
              <p>
                After breakfast, enjoy a relaxed morning at Saltlick Lodge with continued
                wildlife viewing from the lodge. Elephants, buffaloes, antelopes, and
                warthogs frequently visit the waterhole, offering excellent photography
                opportunities.
              </p>

              <p>
                Later in the morning, you will begin your return journey to Mombasa,
                arriving in the afternoon with unforgettable safari memories.
              </p>
            </div>
          </section>

        </div>

        <BookingCTA price="$450" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}