import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './MombasaTourDetails.css';

export default function ThreeDaysMaasaiMaraByFlightFromDiani() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>3 Days Maasai Mara Safari by Flight 
            
          </h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 3-day Maasai Mara safari by flight offers a seamless and luxurious escape from the white sandy beaches of Diani to Kenya’s most celebrated wildlife reserve. Designed for travelers who want to maximize their safari experience within a short time, this package eliminates long road journeys and replaces them with a scenic flight directly into the heart of the Maasai Mara.
          </p>

          <p>
            The Maasai Mara National Reserve is world-renowned for its exceptional wildlife density and is home to the iconic Big Five — lions, elephants, buffaloes, leopards, and rhinos. The reserve also hosts the Great Migration (seasonal), one of the most spectacular wildlife events on Earth, where thousands of wildebeest and zebras cross the Mara River in dramatic fashion.
          </p>

          <p>
            From vast open savannahs dotted with acacia trees to riverine forests and rolling plains, the Mara offers one of Africa’s richest ecosystems. Game drives here provide unmatched opportunities to witness predator-prey interactions, large herds of grazing animals, and breathtaking landscapes ideal for photography.
          </p>

          <p>
            This safari is perfect for honeymooners, beach holidaymakers, and travelers seeking a high-impact safari experience with comfort, efficiency, and unforgettable wildlife encounters.
          </p>

          <h2>Itinerary</h2>

          <p>
            Day 1: Your safari begins with a transfer from your hotel in Diani Beach to Ukunda Airstrip for your scheduled morning flight to the Maasai Mara. The flight offers stunning aerial views of Kenya’s diverse landscapes, from the coastline to the Great Rift Valley. Upon arrival at the Mara airstrip, you will be met by your guide and transferred to your lodge or camp with a game drive en route. After lunch and some relaxation, you will head out for an afternoon game drive across the reserve, where you may encounter lions, elephants, giraffes, zebras, and other wildlife in their natural habitat. Return to your lodge in the evening for dinner and overnight stay.
          </p>

          <p>
            Day 2: This is a full day dedicated to exploring the Maasai Mara. After an early breakfast, you will depart with packed lunch boxes for an extended game drive across different sections of the reserve. This allows you to maximize wildlife viewing and explore areas known for high predator activity. Depending on the season, you may witness the Great Migration or observe dramatic river crossings. You will also visit the Mara River, home to hippos and crocodiles. Throughout the day, expect close encounters with a wide variety of wildlife and exceptional photography opportunities. Return to the lodge in the evening for dinner and overnight.
          </p>

          <p>
            Day 3: Begin your final day with an early morning game drive, the best time to spot active predators and enjoy the beauty of the savannah at sunrise. After the game drive, return to the lodge for breakfast before transferring to the airstrip for your return flight to Diani. Upon arrival, you will be transferred back to your hotel, marking the end of your unforgettable Maasai Mara safari experience.
          </p>

        </div>

        <BookingCTA price="$1,200" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}