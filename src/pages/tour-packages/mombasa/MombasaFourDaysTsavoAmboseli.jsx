import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './MombasaTourDetails.css';

export default function MombasaFourDaysTsavoAmboseli() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>4 Days Tsavo East, Amboseli & Saltlick Safari</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 4-day safari offers an exciting journey through three of Kenya’s most iconic wildlife destinations — Tsavo East, Saltlick Lodge (Taita Hills Wildlife Sanctuary), and Amboseli National Park. It is designed to give travelers a rich variety of landscapes, wildlife encounters, and photography moments within a short but immersive itinerary.
          </p>

          <p>
            The adventure begins in Tsavo East, one of Kenya’s largest national parks, known for its endless open plains, red-dust elephants, and dramatic savannah scenery. From there, the journey continues into the exclusive Saltlick Lodge, where wildlife gathers at floodlit waterholes directly visible from your elevated rooms, offering rare close-range viewing experiences both day and night.
          </p>

          <p>
            The final destination is Amboseli National Park, famous worldwide for its large elephant herds and breathtaking views of Mount Kilimanjaro. The park’s swamp-fed ecosystem supports a wide variety of wildlife, making it one of the best places in Africa for close elephant encounters and scenic photography.
          </p>

          <p>
            This safari is ideal for travelers seeking a balanced combination of adventure, comfort, and unforgettable wildlife moments across Kenya’s southern circuit.
          </p>

          <h2>Itinerary</h2>

          <p>
            Day 1: Your safari begins with an early morning departure toward Tsavo East National Park. Upon arrival, you will enjoy a full game drive across vast red-soil plains where elephants, lions, giraffes, zebras, and antelopes roam freely. You will also visit key wildlife areas such as the Galana River, a lifeline for many animals in the park. In the evening, you will check into your lodge for dinner and overnight stay surrounded by natural wilderness sounds.
          </p>

          <p>
            Day 2: After breakfast, you will proceed to Saltlick Lodge located within the Taita Hills Wildlife Sanctuary. This unique lodge is built on stilts above a busy waterhole, allowing you to observe elephants, buffaloes, and antelopes as they gather to drink water just meters away. Afternoon and evening game viewing from the lodge offers one of the most intimate wildlife experiences in Kenya.
          </p>

          <p>
            Day 3: After an early breakfast, you will depart for Amboseli National Park, arriving in time for lunch and a short rest. In the afternoon, you will head out for a game drive across open plains with stunning views of Mount Kilimanjaro. Amboseli is well known for its large elephant herds, often seen walking gracefully across swamp areas, along with lions, cheetahs, giraffes, and rich birdlife.
          </p>

          <p>
            Day 4: The final day begins with an early morning game drive in Amboseli, the best time for wildlife activity and photography due to soft sunrise lighting. After breakfast at the lodge, you will begin your return journey, enjoying scenic views along the way before arriving back in the afternoon with unforgettable safari memories.
          </p>

        </div>

        <BookingCTA price="$900" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}