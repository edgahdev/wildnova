import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './MombasaTourDetails.css';

export default function MombasaThreeDaysTsavo() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>3 Days Tsavo West & Tsavo East Safari</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 3-day safari offers a powerful introduction to Kenya’s legendary Tsavo ecosystem, combining both Tsavo West and Tsavo East National Parks. Together, these two parks form one of the largest protected wildlife areas in Africa, known for their dramatic landscapes, rich biodiversity, and raw untamed wilderness.
          </p>

          <p>
            Tsavo West is characterized by its rugged volcanic terrain, rolling hills, lava flows, and natural springs such as the famous Mzima Springs where crystal-clear water flows directly from underground sources. This area provides a lush contrast to the dry savannah and is home to hippos, crocodiles, elephants, leopards, and numerous bird species.
          </p>

          <p>
            Tsavo East, on the other hand, offers vast open plains stretching to the horizon, creating perfect conditions for large wildlife herds. The park is famous for its red elephants, dust-covered by the iron-rich soil, along with lions, giraffes, buffaloes, zebras, and a wide variety of antelope species. The open landscape also makes wildlife spotting easier and more dramatic.
          </p>

          <p>
            This safari is ideal for travelers seeking a short but intense wildlife experience, combining two contrasting ecosystems that deliver both scenic beauty and high wildlife concentration in a compact itinerary.
          </p>

          <h2>Itinerary</h2>

          <p>
            Day 1: Your safari begins with an early morning departure towards Tsavo West National Park. Upon arrival, you will immediately begin a game drive through the park’s rugged volcanic landscapes, exploring areas shaped by ancient lava flows and dramatic rock formations. A highlight of the day is a visit to Mzima Springs, where crystal-clear water flows through underground channels, creating a unique oasis that attracts hippos, crocodiles, fish, and birdlife. You will enjoy wildlife viewing in both forested and open areas before proceeding to your lodge for dinner and overnight stay in the heart of the wilderness.
          </p>

          <p>
            Day 2: After breakfast, you will depart Tsavo West and travel toward Tsavo East National Park, arriving in time for a mid-morning game drive. As you enter the park, the landscape changes dramatically into vast open plains dotted with acacia trees and red soil. You will explore key wildlife zones including the Galana River, which serves as a lifeline for animals during dry seasons. Expect to encounter large elephant herds, lions resting under shade, giraffes feeding on treetops, and herds of zebras and antelopes moving across the savannah. The afternoon game drive continues deeper into the park before heading to your lodge for dinner and overnight stay.
          </p>

          <p>
            Day 3: The final day begins with an early morning game drive in Tsavo East, the best time to observe predators and active wildlife during cooler hours. You will experience the park at sunrise, when golden light enhances the beauty of the red elephants and open landscapes. After breakfast at the lodge, you will begin your return journey, enjoying final wildlife sightings along the way. The drive back offers scenic views and optional photo stops before arriving at your destination in the afternoon, marking the end of your short but unforgettable Tsavo safari adventure.
          </p>

        </div>

        <BookingCTA price="$700" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}