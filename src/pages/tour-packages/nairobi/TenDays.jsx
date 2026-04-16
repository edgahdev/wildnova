import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './NairobiDetails.css';

export default function TenDays() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>10 Days Grand Kenya Safari</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 10-day safari is the ultimate Kenyan adventure, carefully designed to take you through the country’s most iconic and diverse destinations including Tsavo West, Tsavo East, Saltlick Sanctuary, Amboseli National Park, Lake Naivasha, Lake Nakuru, and the world-famous Maasai Mara. From vast open savannahs and volcanic landscapes to freshwater lakes and wildlife-rich plains, this journey offers a complete and immersive East African safari experience.
          </p>

          <p>
            Throughout the safari, you will encounter an incredible variety of wildlife including the Big Five—lion, elephant, buffalo, leopard, and rhino—as well as giraffes, zebras, cheetahs, hippos, crocodiles, and hundreds of bird species. Each destination offers a unique ecosystem: Tsavo is known for its red elephants and rugged terrain, Amboseli provides stunning views of Mount Kilimanjaro with large elephant herds, while Lake Nakuru is a sanctuary for rhinos and flamingos. The Maasai Mara crowns the journey with unmatched game viewing and, during migration season, one of the greatest wildlife spectacles on earth.
          </p>

          <p>
            Beyond wildlife, this safari also delivers rich cultural encounters, breathtaking scenery, and exceptional comfort throughout your journey. Enjoy scenic drives across the Great Rift Valley, optional boat rides at Lake Naivasha, and luxurious lodge stays overlooking waterholes and plains. With professional guides, well-planned routes, and seamless logistics, this safari promises not just a trip, but a once-in-a-lifetime African experience filled with unforgettable memories.
          </p>

          <p>
            This itinerary is ideal for travelers who want a deep, slow-paced safari that balances adventure, relaxation, photography opportunities, and cultural discovery across Kenya’s most celebrated national parks.
          </p>

          <h2>Itinerary</h2>

          <p>
            Day 1-2: Upon arrival in Kenya, you will be met by your safari guide and begin your journey to Tsavo West National Park. After check-in at your lodge, you will enjoy your first afternoon game drive, exploring volcanic hills, lava flows, and spotting wildlife such as elephants, giraffes, and antelopes. The following day includes a full game drive and a visit to Mzima Springs, where crystal-clear waters reveal hippos and crocodiles beneath the surface, followed by evening relaxation at the lodge surrounded by wilderness sounds.
          </p>

          <p>
            Day 3-4: You will proceed to Tsavo East National Park, known for its vast open plains and iconic red-dust elephants. These two days are dedicated to extensive game drives where you may encounter lions, buffalo herds, zebras, and large elephant families. You will also visit the Galana River and Aruba Dam, both excellent wildlife viewing points where animals gather to drink, especially during sunrise and sunset.
          </p>

          <p>
            Day 5: Travel to the unique Saltlick Wildlife Sanctuary, famous for its elevated lodge built above a busy waterhole. Here, wildlife comes directly beneath your accommodation, offering rare close-up viewing of elephants, buffalo, and antelope. Evening and night game viewing provide a completely different safari experience, making this one of the most memorable stops of the journey.
          </p>

          <p>
            Day 6-7: Continue to Amboseli National Park, where you will enjoy breathtaking views of Mount Kilimanjaro, Africa’s highest peak. These days include morning and evening game drives across open plains and swamp areas where large elephant herds roam freely. You will also have opportunities to photograph lions, cheetahs, giraffes, and diverse birdlife against the dramatic mountain backdrop.
          </p>

          <p>
            Day 8: Depart for Lake Naivasha in the Great Rift Valley. Upon arrival, enjoy a relaxing boat ride where you can observe hippos and water birds up close. You may also visit Crescent Island for a guided walking safari among zebras, giraffes, and antelopes, offering a peaceful break from vehicle-based game drives.
          </p>

          <p>
            Day 9: Continue to Lake Nakuru National Park, a world-renowned rhino sanctuary and birdwatching paradise. Your game drive will take you through forested areas, rocky cliffs, and lake shores where flamingos and pelicans gather. You will also search for white and black rhinos, lions, and Rothschild giraffes in this compact but wildlife-rich park.
          </p>

          <p>
            Day 10: Final transfer to Maasai Mara National Reserve, the highlight of your safari experience. Enjoy a thrilling full-day game drive across rolling savannahs filled with wildlife. Depending on the season, you may witness the Great Migration or large predator activity including lions, leopards, and cheetahs. After an unforgettable safari experience, you will begin your return journey or onward travel.
          </p>

        </div>

        <BookingCTA price="$3500" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}