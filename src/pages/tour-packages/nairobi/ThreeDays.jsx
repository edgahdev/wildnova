import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './NairobiDetails.css';

export default function ThreeDays() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>3 Days Maasai Mara Safari</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 3-day Maasai Mara safari is a short but immersive journey into Kenya’s most celebrated wildlife reserve. The Maasai Mara is globally recognized for its vast open savannahs, incredible wildlife density, and the annual Great Migration where millions of wildebeest and zebras cross the plains in search of greener pastures.
          </p>

          <p>
            The reserve is home to the Big Five — lion, elephant, buffalo, leopard, and rhino — along with cheetahs, hyenas, giraffes, zebras, and countless antelope species. Every game drive offers a different experience, as wildlife movement changes throughout the day, creating unpredictable and exciting encounters.
          </p>

          <p>
            Beyond wildlife, Maasai Mara offers breathtaking landscapes of rolling grasslands, acacia-dotted plains, and golden sunsets that stretch endlessly across the horizon. This safari is perfect for travelers who want a concentrated, high-impact wildlife experience within a short time frame.
          </p>

          <p>
            It is designed for both first-time safari travelers and returning visitors who want to experience the raw beauty of Africa’s most iconic reserve in a compact and well-organized itinerary.
          </p>

          <h2>Itinerary</h2>

          <p>
            Day 1: Your safari begins early in the morning with a pickup from Nairobi, followed by a scenic drive through the Great Rift Valley with a stop at a viewpoint for photography and stretching. You will arrive at Maasai Mara by midday, check into your lodge or camp, and have lunch. In the afternoon, you will head out for your first game drive where you will begin spotting wildlife such as elephants, giraffes, zebras, and possibly lions as they become active during cooler hours. The day ends with a sunset drive before returning to the lodge for dinner and overnight stay.
          </p>

          <p>
            Day 2: This is a full-day exploration of the Maasai Mara ecosystem. After an early breakfast, you will depart with packed lunch for an extended game drive covering different regions of the reserve. You will follow animal tracks and explore predator territories where lions and cheetahs are often seen hunting. You will also visit river areas where hippos and crocodiles are found. The day is focused on maximizing wildlife sightings, including chances of witnessing dramatic predator-prey interactions. A picnic lunch is enjoyed inside the park before continuing with afternoon game viewing until sunset.
          </p>

          <p>
            Day 3: You will begin the day with an early morning sunrise game drive, the best time to see predators returning from night hunts and herbivores grazing in the golden light. This is also a perfect photography session with soft lighting and active wildlife. After the game drive, you will return to the lodge for breakfast, check out, and begin your journey back to Nairobi. Along the way, you will enjoy views of the Rift Valley landscapes, arriving in the afternoon with unforgettable safari memories.
          </p>

        </div>

        <BookingCTA price="$1200" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}