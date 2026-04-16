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
            This 4-day safari delivers a carefully balanced journey through three of Kenya’s most iconic wildlife regions — Tsavo East National Park, Saltlick Lodge in Taita Hills Wildlife Sanctuary, and Amboseli National Park. It is designed for travelers who want a rich safari experience in a short time without missing the diversity of Kenya’s southern circuit.
          </p>

          <p>
            Each destination offers a completely different ecosystem. Tsavo East introduces vast open savannahs, red-dust landscapes, and large herds of elephants famously known as “red elephants” due to the iron-rich soil they dust themselves with. The park is also home to lions, giraffes, zebras, buffaloes, and numerous bird species, making it a strong starting point for wildlife immersion.
          </p>

          <p>
            From Tsavo East, the journey continues into the elevated Saltlick Lodge, one of Kenya’s most unique safari accommodations. Built on stilts above a natural waterhole, the lodge provides uninterrupted wildlife viewing where animals come to drink just below your room and observation decks. This creates a rare opportunity to observe wildlife behavior at very close range throughout the day and night.
          </p>

          <p>
            The final destination is Amboseli National Park, one of Africa’s most photographed safari locations. Known for its massive elephant herds and iconic views of Mount Kilimanjaro, Amboseli offers breathtaking scenery combined with rich wildlife density. The park’s swamp-fed ecosystem ensures year-round animal activity, making it one of the best places for close elephant encounters in the world.
          </p>

          <p>
            This safari is ideal for travelers seeking a mix of adventure, comfort, photography opportunities, and unforgettable wildlife encounters across Kenya’s most scenic southern parks.
          </p>

          <h2>Itinerary</h2>

          <p>
            Day 1: Your journey begins with an early morning pickup and departure towards Tsavo East National Park. Upon arrival, you will immediately embark on a game drive across the vast red plains where wildlife roams freely in an untouched natural environment. You will explore key areas such as the Galana River, a vital water source that attracts elephants, hippos, crocodiles, and a variety of birdlife. The afternoon game drive continues deeper into the park, offering chances to spot lions resting under acacia trees, herds of zebras grazing, and giraffes moving gracefully across the horizon. In the evening, you will proceed to your lodge for dinner and overnight stay surrounded by the sounds of the African wilderness.
          </p>

          <p>
            Day 2: After breakfast, you will continue your safari journey towards Taita Hills Wildlife Sanctuary where Saltlick Lodge is located. Upon arrival, you will check in and experience one of Kenya’s most unique safari accommodations. The elevated design of the lodge allows uninterrupted views of a busy waterhole where elephants, buffaloes, antelopes, and warthogs gather throughout the day. You will enjoy both afternoon and evening wildlife viewing from the comfort of your room or observation deck, with floodlights illuminating animals during nighttime visits. This creates a magical and intimate wildlife experience unlike any other safari stop.
          </p>

          <p>
            Day 3: After an early breakfast, you will depart for Amboseli National Park, arriving in time for lunch at your lodge. In the afternoon, you will head out for a game drive across Amboseli’s open plains and swamp areas. The highlight of this park is its large elephant herds that often move across the landscape with Mount Kilimanjaro as a dramatic backdrop. You will also encounter lions, cheetahs, hyenas, giraffes, zebras, and an impressive variety of bird species. The combination of wildlife and scenery makes Amboseli one of the most visually stunning safari destinations in Africa.
          </p>

          <p>
            Day 4: Your final day begins with an early morning game drive, the best time to observe active wildlife and capture stunning sunrise photography. Elephants, predators, and grazing animals are often most active during this period, offering excellent viewing opportunities. After the game drive, you will return to the lodge for breakfast before beginning your journey back. The return drive offers scenic views of the countryside, marking the end of your safari experience. You will arrive in the afternoon with unforgettable memories of Kenya’s southern circuit.
          </p>

        </div>

        <BookingCTA price="$900" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}