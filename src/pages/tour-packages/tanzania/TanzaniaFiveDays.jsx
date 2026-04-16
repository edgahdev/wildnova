import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './Tanzania.css';

export default function TanzaniaFiveDays() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero tanzania-hero-serengeti">
          <h1>5 Days Serengeti Safari Adventure</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 5-day safari is a classic Tanzania adventure covering Lake Manyara,
            Ngorongoro Crater, and the world-famous Serengeti National Park.
            It is designed for travelers seeking the ultimate wildlife experience.
          </p>

          <p>
            Serengeti is the highlight of this journey, known for its endless plains,
            large predator populations, and the Great Migration where millions of
            wildebeest and zebras move across the ecosystem.
          </p>

          <p>
            Combined with Ngorongoro’s dense wildlife and Manyara’s scenic beauty,
            this safari delivers unmatched diversity and unforgettable game viewing.
          </p>

          <p>
            Over five carefully designed days, you will move through three of Africa’s
            most iconic ecosystems — each offering a completely different safari
            experience. From forested lakes and volcanic crater floors to the vast
            golden plains of the Serengeti, every day feels like entering a new world.
          </p>

          <p>
            This safari is ideal for travelers who want maximum wildlife exposure,
            including Big Five sightings, predator action, and possibly the Great
            Migration depending on the season. Expect long scenic drives, sunrise
            game drives, and sunset views that define the true African safari dream.
          </p>

          <h2>Itinerary</h2>

          <p><strong>Day 1: Lake Manyara National Park</strong></p>
          <p>
            Your journey begins with pickup from Arusha and a drive into Lake Manyara
            National Park, located at the base of the Great Rift Valley escarpment.
          </p>
          <p>
            The park is a lush green paradise filled with groundwater forests,
            flamingo-covered lakes, and diverse wildlife including elephants,
            baboons, giraffes, and the famous tree-climbing lions.
          </p>
          <p>
            You enjoy a full-day game drive exploring different habitats before
            heading to your lodge for dinner and overnight stay.
          </p>

          <p><strong>Day 2: Ngorongoro Crater Experience</strong></p>
          <p>
            After breakfast, you travel toward the Ngorongoro Conservation Area
            and descend into the crater floor for a full-day wildlife safari.
          </p>
          <p>
            This UNESCO World Heritage Site offers one of the highest densities
            of wildlife in Africa, including lions, elephants, buffalo, zebras,
            hyenas, and the rare black rhino.
          </p>
          <p>
            You enjoy a picnic lunch inside the crater near hippo pools before
            continuing your game drive and later ascending to the rim for sunset
            views and overnight stay.
          </p>

          <p><strong>Day 3: Journey to Serengeti National Park</strong></p>
          <p>
            After an early breakfast, you begin your scenic drive through the
            Ngorongoro highlands and into the vast plains of Serengeti National Park.
          </p>
          <p>
            Along the way, wildlife begins to appear as the landscape opens into
            endless golden savannah. This drive itself feels like part of the safari.
          </p>
          <p>
            Upon arrival, you enjoy an afternoon game drive where you may encounter
            lions, elephants, giraffes, and large herds of herbivores roaming freely
            across the plains before heading to your camp or lodge.
          </p>

          <p><strong>Day 4: Full Day Serengeti Game Drives</strong></p>
          <p>
            This is the heart of your safari experience. You spend a full day
            exploring different regions of the Serengeti in search of predators,
            migration herds, and dramatic wildlife interactions.
          </p>
          <p>
            Early morning and late afternoon game drives offer the best chances
            of spotting lions hunting, cheetahs scanning the plains, and elephants
            moving in large family groups.
          </p>
          <p>
            Depending on the season, you may witness the Great Migration — one of
            the most spectacular wildlife events on Earth, where millions of wildebeest
            and zebras cross the plains in search of fresh grazing.
          </p>
          <p>
            The day ends with a breathtaking Serengeti sunset and dinner under the
            African sky at your lodge or tented camp.
          </p>

          <p><strong>Day 5: Morning Game Drive & Return to Arusha</strong></p>
          <p>
            On your final morning, you enjoy a relaxed sunrise game drive,
            capturing final wildlife moments in the golden light of the Serengeti.
          </p>
          <p>
            After breakfast, you begin your journey back through the Ngorongoro
            region toward Arusha, passing scenic landscapes and Maasai villages
            along the way.
          </p>
          <p>
            You arrive in the afternoon with unforgettable memories of one of
            Africa’s greatest safari circuits.
          </p>

        </div>

        <BookingCTA price="$1,650" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}