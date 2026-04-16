import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './Tanzania.css';

export default function TanzaniaFourDays() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero tanzania-hero-manyara">
          <h1>4 Days Manyara, Ngorongoro & Tarangire Safari</h1> 
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 4-day safari explores three of Tanzania’s most beautiful northern
            circuit parks. Lake Manyara introduces you to lush forests, flamingos,
            and the famous tree-climbing lions.
          </p>

          <p>
            You then descend into the Ngorongoro Crater, a natural wildlife sanctuary
            filled with elephants, lions, rhinos, and thousands of grazing animals
            living inside a collapsed volcanic caldera.
          </p>

          <p>
            The journey ends in Tarangire National Park, known for massive elephant
            herds and iconic baobab trees that dominate the landscape, especially
            during dry season.
          </p>

          <p>
            Over four days, this safari offers a complete transition of ecosystems —
            from lush forest lakes to volcanic crater floors and finally to vast,
            elephant-rich savannah plains. Each destination offers a completely
            different wildlife experience, making this one of the most diverse
            safari circuits in East Africa.
          </p>

          <p>
            Expect early morning game drives, golden sunset views, and close wildlife
            encounters guided by experienced safari professionals who bring each
            landscape to life through storytelling and tracking expertise.
          </p>

          <h2>Itinerary</h2>

          <p><strong>Day 1: Lake Manyara National Park</strong></p>
          <p>
            Your safari begins with pickup from Arusha followed by a scenic drive
            through the Great Rift Valley escarpment into Lake Manyara National Park.
          </p>
          <p>
            The park is a lush green paradise filled with groundwater forests,
            flamingo-lined lake shores, and diverse wildlife including elephants,
            baboons, giraffes, and the famous tree-climbing lions.
          </p>
          <p>
            You enjoy a full-day game drive exploring different habitats before
            heading to your lodge for dinner and overnight stay near the park.
          </p>

          <p><strong>Day 2: Ngorongoro Crater Experience</strong></p>
          <p>
            After an early breakfast, you drive toward the Ngorongoro Conservation Area
            and descend into the crater floor for a full-day wildlife experience.
          </p>
          <p>
            The crater is one of the densest wildlife areas on earth, offering
            exceptional chances to see the Big Five in a single day, including
            elephants, lions, buffalo, and the rare black rhino.
          </p>
          <p>
            A picnic lunch is served inside the crater near hippo pools before
            continuing game viewing in the afternoon and returning to the lodge
            on the crater rim for sunset views.
          </p>

          <p><strong>Day 3: Tarangire National Park Safari</strong></p>
          <p>
            After breakfast, you journey toward Tarangire National Park, famous
            for its massive elephant herds and ancient baobab trees.
          </p>
          <p>
            The park offers a more remote and peaceful safari experience with fewer
            vehicles, making wildlife encounters more intimate and natural.
          </p>
          <p>
            You explore river valleys where animals gather, spotting lions,
            zebras, wildebeests, and hundreds of bird species throughout the day.
            Evening is spent at a lodge or camp near the park.
          </p>

          <p><strong>Day 4: Morning Game Drive & Return to Arusha</strong></p>
          <p>
            On your final day, you enjoy a relaxed morning game drive in Tarangire
            to catch early wildlife activity as the sun rises over the savannah.
          </p>
          <p>
            After breakfast, you begin your journey back to Arusha, passing through
            scenic landscapes and local villages, arriving in the afternoon with
            unforgettable memories of Tanzania’s northern safari circuit.
          </p>

        </div>

        <BookingCTA price="$1,250" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}