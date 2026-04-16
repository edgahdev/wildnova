import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './NairobiDetails.css';

export default function SevenDays() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>7 Days Amboseli, Nakuru & Maasai Mara Safari</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 7-day safari takes you to three of Kenya’s most iconic
            destinations. Begin in Amboseli National Park, famous for its
            large elephant herds and stunning views of Mount Kilimanjaro.
            The journey continues to Lake Nakuru, a bird lover’s paradise
            and home to rhinos and flamingos.
          </p>

          <p>
            The highlight of the safari is the Maasai Mara, one of Africa’s
            richest wildlife reserves. Here, you will experience thrilling
            game drives with opportunities to spot the Big Five and witness
            incredible predator-prey interactions.
          </p>

          <p>
            This safari offers a perfect balance of scenic beauty,
            wildlife diversity and authentic African adventure.
          </p>

          <p>
            Across seven days, you will experience three very different ecosystems:
            the open plains of Amboseli beneath Mount Kilimanjaro, the alkaline
            lake ecosystem of Nakuru filled with flamingos and rhinos, and the
            endless golden savannahs of the Maasai Mara.
          </p>

          <p>
            This carefully designed itinerary ensures maximum wildlife viewing
            opportunities while maintaining a relaxed travel pace, allowing you
            to fully enjoy each destination without rushing.
          </p>

          <h3>Included</h3>
          <ul>
            <li>Transport in 4x4 jeep</li>
            <li>Accommodation</li>
            <li>Meals</li>
            <li>Park fees</li>
          </ul>

          <h3>Excluded</h3>
          <ul>
            <li>Visa</li>
            <li>Tips</li>
          </ul>

          <h2>Itinerary</h2>

          <p><strong>Day 1–2: Amboseli National Park</strong></p>
          <p>
            Your safari begins with pickup and a drive to Amboseli National Park.
            Upon arrival, you will enjoy your first afternoon game drive with
            stunning views of Mount Kilimanjaro in the background.
          </p>
          <p>
            Over two days, you will explore Amboseli’s open plains, swamps, and
            dry lakebeds, home to large elephant herds, lions, giraffes, zebras,
            and a variety of birdlife. Sunrise and sunset game drives offer
            the best photographic moments.
          </p>

          <p><strong>Day 3: Amboseli → Lake Nakuru National Park</strong></p>
          <p>
            After breakfast, you travel through the Great Rift Valley to Lake Nakuru.
            The journey offers scenic views of escarpments and rural Kenyan landscapes.
          </p>
          <p>
            On arrival, you enjoy an afternoon game drive in a park famous for its
            rhinos, Rothschild giraffes, buffaloes, and seasonal flocks of flamingos
            that paint the lake pink.
          </p>

          <p><strong>Days 4–6: Maasai Mara National Reserve</strong></p>
          <p>
            You continue to Kenya’s most famous safari destination — the Maasai Mara.
            After arrival, you begin with an afternoon game drive across the vast
            golden savannah.
          </p>
          <p>
            Over three days, you will explore different regions of the reserve in
            search of lions, cheetahs, elephants, leopards, and large herds of
            herbivores. The Mara offers some of the best predator sightings in Africa.
          </p>
          <p>
            Depending on the season, you may witness the Great Migration, where
            thousands of wildebeest and zebras cross crocodile-filled rivers in
            dramatic survival scenes.
          </p>
          <p>
            Each day includes morning and evening game drives, with optional visits
            to Maasai villages for cultural interaction and sunset photography over
            the plains.
          </p>

          <p><strong>Day 7: Maasai Mara → Return to Nairobi</strong></p>
          <p>
            After a relaxed breakfast, you enjoy a final short game drive as you
            exit the park, giving you one last chance to spot wildlife.
          </p>
          <p>
            You then begin your journey back to Nairobi, arriving in the afternoon
            with unforgettable memories of Kenya’s most iconic safari circuit.
          </p>

        </div>

        <BookingCTA price="$2400" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}