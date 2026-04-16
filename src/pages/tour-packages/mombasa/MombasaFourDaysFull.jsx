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
            This 5-day safari is a premium cross-park journey designed to showcase the very best of Kenya’s southern wildlife circuit. It connects Tsavo East, Saltlick Sanctuary, Ziwani Conservancy in Tsavo West, and Amboseli National Park into one seamless and immersive safari experience. Each destination has its own unique ecosystem, giving travelers a chance to experience Kenya’s incredible diversity in landscapes, wildlife behavior, and safari styles.
          </p>

          <p>
            The adventure begins in Tsavo East, a vast wilderness known for its endless red-earth plains, dramatic skies, and large herds of “red elephants” dusted with the park’s signature soil. From there, you move into Saltlick Sanctuary, one of the most unique safari lodges in Africa, where elevated viewing decks allow you to observe wildlife up close at a busy waterhole throughout the day and night.
          </p>

          <p>
            The journey continues into Ziwani Conservancy, a quieter and more exclusive part of Tsavo West. Here, the safari becomes more intimate with guided walking experiences, river-based wildlife viewing, and opportunities to learn about smaller ecosystem details often missed during vehicle safaris. The final destination, Amboseli National Park, delivers one of Africa’s most iconic views — elephants walking freely beneath the towering snow-capped peak of Mount Kilimanjaro.
          </p>

          <p>
            This itinerary is designed for travelers seeking a well-balanced safari that combines adventure, relaxation, photography opportunities, and diverse ecosystems. From open savannahs and volcanic terrain to wetlands and mountain backdrops, every day brings a completely new experience.
          </p>

          <h2>Itinerary</h2>

          <p>
            Day 1: Your journey begins early in the morning with departure from Mombasa, traveling through scenic coastal landscapes toward Tsavo East National Park. Upon arrival, you will embark on your first game drive across vast open plains where wildlife is often seen immediately. Expect encounters with elephants, giraffes, zebras, ostriches, and predators such as lions resting under acacia trees. In the afternoon, the safari continues along the Galana River, a key wildlife gathering point, before heading to your lodge for dinner and overnight stay surrounded by natural wilderness sounds.
          </p>

          <p>
            Day 2: After breakfast, you will continue deeper into the Tsavo ecosystem toward Saltlick Sanctuary. This unique lodge experience places you above a busy wildlife waterhole, offering uninterrupted viewing of animals as they come to drink throughout the day. Elephants, buffaloes, warthogs, and antelope frequently pass directly below your room. In the evening, illuminated floodlights create a dramatic nighttime safari experience where wildlife activity continues long after sunset.
          </p>

          <p>
            Day 3: Today you travel to Ziwani Conservancy in Tsavo West, a peaceful and less crowded safari environment. The highlight of this day is a guided walking safari led by experienced rangers, allowing you to explore nature on foot while learning about animal tracks, medicinal plants, and smaller wildlife species. Later, you will enjoy a unique water-based viewing experience along the Sante River, where hippos and crocodiles are commonly seen, along with diverse birdlife in a tranquil setting.
          </p>

          <p>
            Day 4: After breakfast, you proceed to Amboseli National Park, one of Kenya’s most famous wildlife destinations. Upon arrival, you will check into your lodge and head out for an afternoon game drive across open plains dominated by Mount Kilimanjaro in the background. This park is known for its large elephant herds, often seen walking gracefully across swampy areas. Other sightings include lions, cheetahs, giraffes, wildebeest, and a rich variety of bird species, making it a paradise for wildlife photographers.
          </p>

          <p>
            Day 5: The final day begins with an early morning game drive when wildlife is most active and lighting conditions are perfect for photography. You may witness predators returning from night hunts or herds grazing peacefully in the golden sunrise light. After breakfast at the lodge, you will begin your journey back to Mombasa, reflecting on five days of diverse landscapes, rich wildlife encounters, and unforgettable safari moments.
          </p>

        </div>

        <BookingCTA price="$1100" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}