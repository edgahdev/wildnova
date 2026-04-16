import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";
import './NairobiDetails.css';

export default function FiveDays() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>5 Days Amboseli & Tsavo Safari</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This safari explores Kenya’s breathtaking southern circuit, taking you through the iconic landscapes of Amboseli National Park and the vast wilderness of Tsavo West and Tsavo East. The journey offers a remarkable blend of open savannahs, volcanic terrain, natural springs, and dramatic horizons, making it one of the most visually diverse safari routes in the country. Amboseli sets the stage with its world-famous backdrop of Mount Kilimanjaro, creating unforgettable scenes of wildlife against Africa’s highest peak.
          </p>

          <p>
            The experience is rich with wildlife encounters, including large herds of elephants roaming freely across Amboseli’s plains, often considered some of the best elephant sightings in Africa. As the safari continues into Tsavo West, you will explore rugged landscapes, lava flows, and the crystal-clear Mzima Springs, home to hippos and crocodiles. Tsavo East, known for its expansive plains, introduces you to the legendary red elephants, along with lions, giraffes, zebras, and a wide range of birdlife.
          </p>

          <p>
            This safari offers the perfect balance between scenic beauty and thrilling game drives, making it ideal for travelers seeking both relaxation and adventure. With carefully selected lodges, professional guides, and well-paced itineraries, every moment is designed to deliver comfort, excitement, and unforgettable memories across Kenya’s most celebrated wildlife destinations.
          </p>

          <p>
            Over five days, you will experience three completely different ecosystems — from the dramatic backdrop of Kilimanjaro in Amboseli, to the volcanic landscapes of Tsavo West, and finally the endless red-dust plains of Tsavo East. Each park offers a unique safari identity, ensuring no two days feel the same.
          </p>

          <h2>Itinerary</h2>

          <p><strong>Day 1: Nairobi to Amboseli National Park</strong></p>
          <p>
            Your journey begins with an early morning pickup from Nairobi and a scenic drive toward Amboseli National Park, located at the foothills of Mount Kilimanjaro. Upon arrival, you will check into your lodge before heading out for your first afternoon game drive.
          </p>
          <p>
            Amboseli is famous for its large elephant herds moving gracefully across open plains, with the snow-capped peak of Kilimanjaro providing a dramatic backdrop. You will also spot lions, cheetahs, giraffes, and numerous bird species before returning to your lodge for dinner and overnight stay.
          </p>

          <p><strong>Day 2: Full Day Amboseli Exploration</strong></p>
          <p>
            This day is dedicated to exploring Amboseli in depth. Early morning and afternoon game drives give you the best chance to witness predators in action and elephants interacting in large family groups.
          </p>
          <p>
            You will visit key observation points such as the Amboseli swamps, where wildlife gathers to drink and feed. The views of Mount Kilimanjaro are most spectacular in the early morning hours when the skies are clear.
          </p>
          <p>
            The day ends with sunset views over the plains followed by dinner and relaxation at your lodge.
          </p>

          <p><strong>Day 3: Amboseli to Tsavo West National Park</strong></p>
          <p>
            After breakfast, you depart Amboseli and head toward Tsavo West National Park. The landscape gradually changes into rugged terrain, volcanic hills, and lava flows that define this unique ecosystem.
          </p>
          <p>
            Upon arrival, you will visit the famous Mzima Springs, where crystal-clear water flows from underground sources, creating a habitat for hippos, crocodiles, and aquatic life visible from underwater viewing points.
          </p>
          <p>
            Later, enjoy an afternoon game drive before settling into your lodge or camp inside the park.
          </p>

          <p><strong>Day 4: Tsavo West to Tsavo East National Park</strong></p>
          <p>
            After an early breakfast, you continue your safari journey into Tsavo East, one of Kenya’s largest and oldest national parks. The drive itself is scenic, transitioning from rocky highlands into wide-open savannah plains.
          </p>
          <p>
            Tsavo East is famous for its red elephants, colored by the region’s iron-rich soil, as well as lions, giraffes, buffaloes, and large herds of antelope. You will enjoy an afternoon game drive exploring watering holes and riverbanks where wildlife gathers.
          </p>
          <p>
            Dinner and overnight stay at a lodge or camp inside Tsavo East.
          </p>

          <p><strong>Day 5: Morning Game Drive & Return to Nairobi</strong></p>
          <p>
            Your final morning begins with an early game drive in Tsavo East, offering one last opportunity to spot wildlife in the golden sunrise light.
          </p>
          <p>
            After breakfast, you begin your journey back to Nairobi, passing through scenic landscapes and rural Kenyan countryside. You arrive in the afternoon with unforgettable memories of Kenya’s southern safari circuit.
          </p>

        </div>

        <BookingCTA price="$1800" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}