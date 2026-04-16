import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './MombasaTourDetails.css';

export default function MombasaTwoDaysTsavo() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>2 Days Tsavo East & Saltlick Lodge Safari</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 2-day safari offers a fast yet immersive wildlife experience into Tsavo East National Park and the famous Saltlick Lodge in Taita Hills Wildlife Sanctuary. It is designed for travelers with limited time who still want to experience Kenya’s iconic safari landscapes and close-up wildlife encounters.
          </p>

          <p>
            Tsavo East is one of Kenya’s largest and oldest national parks, known for its vast open plains, red soil landscapes, and large herds of elephants famously coated in red dust. The park also supports lions, giraffes, zebras, buffaloes, antelopes, and a wide variety of bird species, making it an excellent introduction to Kenya’s wilderness.
          </p>

          <p>
            The experience continues at Saltlick Lodge, one of the most unique safari accommodations in Africa. Built on stilts above a natural waterhole, the lodge offers uninterrupted wildlife viewing directly from your room and observation decks. Animals frequently gather below to drink water, creating rare and intimate wildlife encounters throughout the day and night.
          </p>

          <p>
            This short safari is perfect for travelers who want maximum wildlife exposure in minimal time while enjoying comfort, convenience, and unforgettable photographic moments.
          </p>

          <h2>Itinerary</h2>

          <p>
            Day 1: Your safari begins with an early morning departure from Mombasa heading towards Tsavo East National Park. Upon arrival, you will immediately start a game drive across vast savannah plains where wildlife roams freely in their natural habitat. You will explore key areas such as the Galana River, which attracts elephants, hippos, crocodiles, and a variety of birds. The afternoon game drive provides opportunities to spot lions resting under acacia trees, giraffes feeding on treetops, and large herds of zebras and antelopes moving across the open plains. In the evening, you will proceed to your lodge for dinner and overnight stay surrounded by the sounds of the African wilderness.
          </p>

          <p>
            Day 2: After an early breakfast, you will depart for Saltlick Lodge located within the Taita Hills Wildlife Sanctuary. Upon arrival, you will experience one of Kenya’s most unique safari settings, where wildlife gathers at a busy waterhole visible directly from the elevated lodge structure. Elephants, buffaloes, antelopes, and warthogs frequently appear throughout the morning, offering exceptional close-range viewing. After enjoying the wildlife activity and taking photographs, you will begin your return journey back to Mombasa, with optional scenic stops along the way, arriving in the afternoon with unforgettable safari memories.
          </p>

        </div>

        <BookingCTA price="$450" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}