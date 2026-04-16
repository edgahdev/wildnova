import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './MombasaTourDetails.css';

export default function MombasaFiveDaysComplete() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>5 Days Saltlick, Amboseli, Ziwani & Tsavo East Safari</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 5-day safari is a carefully curated journey through some of Kenya’s most diverse and wildlife-rich landscapes, combining Tsavo East, Saltlick Sanctuary, Ziwani Conservancy, and Amboseli National Park. It is designed to offer a balance of adventure, scenic beauty, and close wildlife encounters in both open savannah and private conservancies.
          </p>

          <p>
            You will begin your experience in Tsavo East, famous for its vast red-dust plains and iconic red elephants, before moving into the elevated Saltlick Lodge where wildlife gathers around illuminated waterholes visible directly from your room. The journey continues into the Ziwani area of Tsavo West, a peaceful conservancy offering guided walking safaris and close interaction with nature in a controlled environment.
          </p>

          <p>
            The safari concludes in Amboseli National Park, one of Kenya’s most photographed destinations, where large elephant herds roam freely beneath the snow-capped peak of Mount Kilimanjaro. This combination of parks provides a complete wildlife experience across different ecosystems, from dry savannahs to swamp-fed plains.
          </p>

          <p>
            This itinerary is ideal for travelers seeking immersive game viewing, unique lodge experiences, and a well-paced safari that blends comfort with authentic African wilderness.
          </p>

          <h2>Itinerary</h2>

          <p>
            Day 1: Your safari begins with an early departure from Mombasa heading into Tsavo East National Park. Upon arrival, you will enjoy your first game drive across vast open plains where you may encounter elephants, giraffes, zebras, and lions. The afternoon continues with wildlife viewing along the Galana River before checking into your lodge for dinner and overnight stay surrounded by the sounds of the wild.
          </p>

          <p>
            Day 2: After breakfast, you will travel to Saltlick Sanctuary, a unique elevated lodge built on stilts overlooking a busy waterhole. Here, wildlife such as elephants, buffalo, and antelope can be observed from your room or viewing deck throughout the day and night. Evening game viewing provides close and safe encounters with animals as they come to drink water under floodlights.
          </p>

          <p>
            Day 3: You will proceed to Ziwani Conservancy in Tsavo West, a quieter and more exclusive safari area. This day includes a guided walking safari led by trained rangers, offering a chance to experience nature on foot while learning about tracks, plants, and smaller wildlife. You will also enjoy a relaxing boat-style viewing experience along the Sante River where hippos and crocodiles are commonly seen.
          </p>

          <p>
            Day 4: After breakfast, you will continue your journey to Amboseli National Park. Upon arrival, you will check in and head out for an afternoon game drive where large elephant herds roam freely across open plains with Mount Kilimanjaro providing a dramatic backdrop. Wildlife sightings often include lions, cheetahs, giraffes, and numerous bird species.
          </p>

          <p>
            Day 5: Your final day begins with an early morning game drive in Amboseli, the best time to capture wildlife activity and photography under soft sunrise light. After breakfast at the lodge, you will begin your return journey, arriving in the afternoon with unforgettable memories of Kenya’s most diverse safari circuit.
          </p>

        </div>

        <BookingCTA price="$1100" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}