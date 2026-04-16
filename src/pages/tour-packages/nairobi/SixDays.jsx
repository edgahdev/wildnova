import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './NairobiDetails.css';

export default function SixDays() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>6 Days Kenya Safari Adventure</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 6-day safari offers a compact yet rewarding journey through
            Kenya’s top destinations including Amboseli, Lake Nakuru,
            Lake Naivasha and Maasai Mara.
          </p>

          <p>
            Experience diverse landscapes from open plains to freshwater
            lakes while encountering elephants, rhinos, hippos and big cats.
          </p>

          <p>
            Perfect for travelers with limited time seeking a full safari
            experience.
          </p>

          <p>
            Despite its shorter duration, this safari is carefully designed
            to deliver a complete Kenyan wildlife experience, combining iconic
            parks, rich biodiversity, and unforgettable scenery in a seamless
            journey.
          </p>

          <p>
            You will move from the dramatic backdrop of Mount Kilimanjaro in
            Amboseli, through the flamingo-filled waters of Lake Nakuru,
            the tranquil beauty of Lake Naivasha, and finally into the legendary
            savannahs of the Maasai Mara.
          </p>

          <h2>Itinerary</h2>

          <p><strong>Day 1–2: Amboseli National Park</strong></p>
          <p>
            Your safari begins with pickup and transfer to Amboseli National Park.
            On arrival, you embark on your first afternoon game drive with views
            of Mount Kilimanjaro dominating the horizon.
          </p>
          <p>
            Over two days, you explore Amboseli’s open plains, swamps, and dry lakebeds,
            home to large elephant herds, lions, giraffes, zebras, and rich birdlife.
            Sunrise and sunset game drives provide the best wildlife photography moments.
          </p>

          <p><strong>Day 3: Amboseli → Lake Nakuru National Park</strong></p>
          <p>
            After breakfast, you travel to Lake Nakuru via the scenic Great Rift Valley.
            The journey offers breathtaking escarpment views and countryside scenery.
          </p>
          <p>
            In the afternoon, enjoy a game drive in Lake Nakuru National Park, famous
            for its rhinos, buffaloes, Rothschild giraffes, and seasonal flamingos that
            transform the lake into a pink spectacle.
          </p>

          <p><strong>Day 4: Lake Naivasha</strong></p>
          <p>
            After breakfast, you proceed to Lake Naivasha, a peaceful freshwater lake
            surrounded by acacia forests and abundant birdlife.
          </p>
          <p>
            Optional activities include a boat ride to see hippos and birds up close,
            and a walking safari on Crescent Island where giraffes and zebras roam freely.
          </p>

          <p><strong>Day 5: Maasai Mara National Reserve</strong></p>
          <p>
            You continue to the world-famous Maasai Mara, Kenya’s premier wildlife reserve.
            Upon arrival, you enjoy an afternoon game drive across its endless golden plains.
          </p>
          <p>
            The Mara is home to the Big Five and offers some of the highest predator
            concentrations in Africa. Lions, cheetahs, elephants, and leopards are
            commonly spotted throughout the reserve.
          </p>
          <p>
            Depending on the season, you may witness the Great Migration, one of the
            most dramatic wildlife events on earth.
          </p>

          <p><strong>Day 6: Maasai Mara → Return to Nairobi</strong></p>
          <p>
            Your final morning begins with an optional sunrise game drive, offering
            a last chance to spot wildlife in the golden morning light.
          </p>
          <p>
            After breakfast, you depart the Mara and travel back to Nairobi, arriving
            in the afternoon with unforgettable safari memories from Kenya’s most
            iconic destinations.
          </p>

        </div>

        <BookingCTA price="$2100" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}