import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './NairobiDetails.css';

export default function NineDays() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>9 Days Kenya Safari Expedition</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 9-day safari is a complete journey through Kenya’s most diverse
            landscapes and wildlife ecosystems. From the misty highlands of
            Aberdare National Park to the conservation haven of Ol Pejeta,
            the untouched wilderness of Meru, and the unique northern species
            found in Samburu, each destination offers a distinct experience.
            The journey continues to the peaceful Lake Naivasha before
            concluding in the world-famous Maasai Mara.
          </p>

          <p>
            Expect incredible wildlife encounters including elephants, lions,
            rhinos, giraffes and rare species like the Grevy’s zebra and
            gerenuk. This safari blends scenic beauty, thrilling game drives
            and comfortable lodge stays to create a rich and immersive African
            experience.
          </p>

          <p>
            Ideal for travelers seeking a comprehensive safari, this package
            guarantees unforgettable moments, professional guidance and
            exceptional wildlife viewing across Kenya’s most iconic parks.
          </p>

          <p>
            Over nine carefully designed days, you will move through forests,
            savannahs, lakes, and semi-arid landscapes — experiencing Kenya’s
            full ecological diversity in one continuous journey. Each park
            offers a different rhythm, wildlife behavior, and scenery, making
            this one of the most complete safari circuits in East Africa.
          </p>

          <p>
            This expedition is ideal for photographers, wildlife enthusiasts,
            and travelers who want a deep, slow-paced exploration of Kenya’s
            natural beauty. From private conservancies to Big Five reserves,
            every day builds into a powerful safari story.
          </p>

          <h3>Included</h3>
          <ul>
            <li>4x4 Safari Land Cruiser</li>
            <li>Professional guide</li>
            <li>All meals</li>
            <li>Park fees</li>
            <li>Accommodation</li>
          </ul>

          <h3>Excluded</h3>
          <ul>
            <li>Flights & visa</li>
            <li>Personal expenses</li>
          </ul>

          <h2>Itinerary</h2>

          <p><strong>Day 1: Nairobi → Aberdare National Park</strong></p>
          <p>
            Your journey begins with pickup in Nairobi followed by a scenic drive
            into Kenya’s central highlands. Aberdare National Park introduces you
            to dense forest landscapes, waterfalls, and cool mountain air.
          </p>
          <p>
            In the afternoon, you may enjoy wildlife viewing from lodge observation
            decks where elephants, buffalos, and antelopes frequently visit
            nearby waterholes.
          </p>

          <p><strong>Day 2: Aberdare → Ol Pejeta Conservancy</strong></p>
          <p>
            After breakfast, you travel to Ol Pejeta Conservancy, one of Kenya’s
            leading wildlife protection areas and home to the last northern white
            rhinos in the world.
          </p>
          <p>
            You will enjoy game drives with opportunities to see the Big Five,
            visit the chimpanzee sanctuary, and learn about conservation efforts
            protecting endangered species.
          </p>

          <p><strong>Days 3–4: Meru National Park</strong></p>
          <p>
            You continue eastward into the remote wilderness of Meru National Park,
            a less-crowded gem known for its raw and untouched safari experience.
          </p>
          <p>
            Over two days, you will explore rivers, savannahs, and bushland where
            elephants, lions, leopards, and buffalo roam freely with minimal human
            disturbance.
          </p>
          <p>
            This region is also historically linked to conservation legend Elsa the
            lioness, making it both scenic and culturally significant.
          </p>

          <p><strong>Day 5: Meru → Samburu National Reserve</strong></p>
          <p>
            After breakfast, you head north to Samburu, a semi-arid landscape
            famous for its unique wildlife species not found in southern parks.
          </p>
          <p>
            Expect sightings of Grevy’s zebra, reticulated giraffe, Somali ostrich,
            and gerenuk. The Ewaso Nyiro River attracts large concentrations of
            wildlife, making game viewing exceptional.
          </p>

          <p><strong>Day 6: Samburu → Lake Naivasha</strong></p>
          <p>
            You travel south toward the Great Rift Valley and arrive at Lake Naivasha,
            a freshwater lake surrounded by birdlife, hippos, and scenic landscapes.
          </p>
          <p>
            Optional activities include a boat ride on the lake and a walking safari
            on Crescent Island among giraffes and zebras.
          </p>

          <p><strong>Days 7–8: Maasai Mara National Reserve</strong></p>
          <p>
            You continue to Kenya’s most famous wildlife destination — the Maasai Mara.
            This vast savannah is home to the Big Five and offers some of the best
            predator sightings in Africa.
          </p>
          <p>
            Over two full days, you will enjoy morning and afternoon game drives,
            tracking lions, cheetahs, elephants, and possibly witnessing the Great
            Migration depending on the season.
          </p>
          <p>
            Sunsets over the Mara plains create unforgettable photography moments
            before returning to your lodge or tented camp.
          </p>

          <p><strong>Day 9: Maasai Mara → Nairobi</strong></p>
          <p>
            After a relaxed breakfast and optional short morning game drive, you
            begin your journey back to Nairobi.
          </p>
          <p>
            You arrive in the afternoon with a deep appreciation of Kenya’s
            landscapes, wildlife, and cultural richness after an extraordinary
            nine-day safari expedition.
          </p>

          <h3>Excluded</h3>
          <ul>
            <li>Flights & visa</li>
            <li>Personal expenses</li>
          </ul>

        </div>

        <BookingCTA price="$3200" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}