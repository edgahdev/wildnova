import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './NairobiDetails.css';

export default function TenDays() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>10 Days Grand Kenya Safari (Mombasa to Nairobi)</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 10-day safari is one of our premium Mombasa-based itineraries, beginning from the Kenyan coast in Mombasa and ending in Nairobi. It is carefully designed to take you through the country’s most iconic and diverse destinations including Tsavo West, Tsavo East, Saltlick Sanctuary, Amboseli National Park, Lake Naivasha, Lake Nakuru, and the world-famous Maasai Mara.
          </p>

          <p>
            Starting from the coastal region, the journey gradually transitions from the warm Indian Ocean landscapes into Kenya’s vast wilderness, offering a unique experience that combines both coastal and inland safari adventures. From the red-earth plains of Tsavo to the dramatic backdrop of Mount Kilimanjaro in Amboseli and the wildlife-rich plains of Maasai Mara, this safari delivers a complete East African experience.
          </p>

          <p>
            Throughout the safari, you will encounter an incredible variety of wildlife including the Big Five—lion, elephant, buffalo, leopard, and rhino—as well as giraffes, zebras, cheetahs, hippos, crocodiles, and hundreds of bird species. Each destination offers a unique ecosystem: Tsavo is known for its red elephants and rugged terrain, Amboseli provides stunning views of Mount Kilimanjaro with large elephant herds, while Lake Nakuru is a sanctuary for rhinos and flamingos.
          </p>

          <p>
            The journey concludes in the Maasai Mara, where you will experience some of Africa’s best game viewing. During migration season, this reserve hosts one of the greatest wildlife spectacles on earth—the Great Migration.
          </p>

          <p>
            Beyond wildlife, this safari also offers rich cultural encounters, scenic drives across the Great Rift Valley, optional boat rides at Lake Naivasha, and comfortable lodge stays. With professional guides and seamless planning, this safari promises a smooth and unforgettable journey from Mombasa to Nairobi.
          </p>

          <p>
            This itinerary is ideal for travelers seeking a well-paced safari that blends coastal departure, wildlife adventure, photography opportunities, and cultural discovery across Kenya’s most celebrated parks.
          </p>

          <h2>Itinerary</h2>

          <p>
            Your safari begins in Mombasa and concludes in Nairobi, offering a scenic cross-country journey through Kenya’s most iconic wildlife destinations.
          </p>

          <p>
            <strong>Day 1-2:</strong> Your safari begins with an early pick-up from your hotel or residence in Mombasa. You will then embark on a scenic drive to Tsavo West National Park. After check-in at your lodge, enjoy your first afternoon game drive exploring volcanic hills, lava flows, and spotting wildlife such as elephants, giraffes, and antelopes. The following day includes a full game drive and a visit to Mzima Springs, where crystal-clear waters reveal hippos and crocodiles, followed by evening relaxation at the lodge.
          </p>

          <p>
            <strong>Day 3-4:</strong> Proceed to Tsavo East National Park, known for its vast open plains and iconic red-dust elephants. These two days are dedicated to extensive game drives where you may encounter lions, buffalo herds, zebras, and large elephant families. Visits to the Galana River and Aruba Dam provide excellent wildlife viewing opportunities.
          </p>

          <p>
            <strong>Day 5:</strong> Travel to the unique Saltlick Wildlife Sanctuary, famous for its elevated lodge built above a busy waterhole. Here, wildlife comes directly beneath your accommodation, offering rare close-up viewing of elephants, buffalo, and antelope. Evening and night game viewing provide a memorable experience.
          </p>

          <p>
            <strong>Day 6-7:</strong> Continue to Amboseli National Park, where you will enjoy breathtaking views of Mount Kilimanjaro. These days include morning and evening game drives across open plains and swamp areas where large elephant herds roam freely. Expect excellent photography opportunities with wildlife set against the mountain backdrop.
          </p>

          <p>
            <strong>Day 8:</strong> Depart for Lake Naivasha in the Great Rift Valley. Upon arrival, enjoy a relaxing boat ride where you can observe hippos and water birds up close. Optional visit to Crescent Island for a guided walking safari among zebras, giraffes, and antelopes.
          </p>

          <p>
            <strong>Day 9:</strong> Continue to Lake Nakuru National Park, a renowned rhino sanctuary and birdwatching destination. Game drives take you through forested areas and lake shores where flamingos and pelicans gather. You will also search for rhinos, lions, and Rothschild giraffes.
          </p>

          <p>
            <strong>Day 10:</strong> Transfer to Maasai Mara National Reserve, the highlight of your safari. Enjoy a full-day game drive across the savannah, home to abundant wildlife. Depending on the season, you may witness the Great Migration or significant predator activity. After this unforgettable experience, your safari concludes with a drop-off in Nairobi or onward travel arrangements.
          </p>

        </div>

        <BookingCTA price="$3500" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}