import Layout from '../../../components/layouts/Layout';
import BookingCTA from '../../../components/tours/BookingCTA';
import MeetupLocation from "../../../components/MeetupLocation";

export default function ThirteenDaysKenyaTanzania() {
  return (
    <Layout>
      <div className="tour-details">

        <div className="hero">
          <h1>13 Days Grand East Africa Safari</h1>
        </div>

        <div className="content">

          <h2>Safari Overview</h2>

          <p>
            This 13-day Grand East Africa Safari is a once-in-a-lifetime journey through the most iconic
            wildlife destinations in Kenya and Tanzania. It is carefully designed to showcase the full
            diversity of East Africa’s ecosystems — from northern drylands and Rift Valley lakes to vast
            savannah plains and volcanic crater landscapes.
          </p>

          <p>
            The adventure begins in Samburu National Reserve, a rugged and less-crowded wilderness known
            for its unique “Special Five” species including Grevy’s zebra, reticulated giraffe, Somali ostrich,
            gerenuk, and Beisa oryx. The journey then moves through the scenic Great Rift Valley with stops
            at Lake Naivasha and Lake Nakuru, where freshwater habitats support hippos, flamingos, rhinos,
            and a wide variety of birdlife.
          </p>

          <p>
            From Kenya’s heartlands, the safari continues into the legendary Maasai Mara, home to the Big Five
            and the dramatic Great Migration. You then cross into Tanzania’s Serengeti National Park, where
            endless golden plains stretch beyond the horizon and predator-prey interactions unfold daily in
            one of the world’s most famous ecosystems.
          </p>

          <p>
            The journey concludes with Tarangire National Park, known for massive elephant herds and ancient
            baobab trees, before heading to Amboseli National Park, where large elephant families roam freely
            beneath the towering snow-capped peak of Mount Kilimanjaro. This safari combines luxury, adventure,
            and deep wilderness immersion into one seamless experience.
          </p>

          <h2>Itinerary</h2>

          <p>
            Day 1–2: Arrival and exploration of Samburu National Reserve. These two days focus on game drives
            across semi-arid landscapes where you will encounter rare northern species, predators such as lions
            and leopards, and scenic views along the Ewaso Nyiro River, a lifeline for wildlife in the region.
          </p>

          <p>
            Day 3: Transfer to Lake Naivasha in the Great Rift Valley. You will enjoy a relaxing boat ride
            on the lake, spotting hippos and exotic bird species, followed by optional walking safari activities
            on Crescent Island where wildlife roams freely in a peaceful environment.
          </p>

          <p>
            Day 4: Proceed to Lake Nakuru National Park, a UNESCO-protected sanctuary famous for its rhino
            population and seasonal flamingo flocks. A full game drive offers opportunities to see both white
            and black rhinos, lions, buffaloes, and Rothschild giraffes in a scenic lake setting.
          </p>

          <p>
            Day 5–6: Enter the world-famous Maasai Mara National Reserve for two full days of immersive game
            drives. You will explore open savannah plains filled with elephants, lions, cheetahs, and wildebeest.
            If traveling during migration season, you may witness the dramatic river crossings of the Great Migration.
          </p>

          <p>
            Day 7–9: Cross into Tanzania and enter Serengeti National Park for extended game viewing across
            endless plains. These days focus on tracking predators, observing large herbivore herds, and
            experiencing sunrise and sunset game drives in one of Africa’s richest wildlife ecosystems.
          </p>

          <p>
            Day 10: Travel to Tarangire National Park, known for its massive elephant herds and ancient baobab
            trees. The park offers excellent wildlife photography opportunities, especially during dry seasons
            when animals gather around the Tarangire River.
          </p>

          <p>
            Day 11–12: Continue to Amboseli National Park in Kenya, where you will enjoy breathtaking views of
            Mount Kilimanjaro. These two days include morning and afternoon game drives focused on elephants,
            lions, cheetahs, and diverse birdlife in swamp-fed ecosystems.
          </p>

          <p>
            Day 13: Final morning departure with a scenic drive and transfer to your drop-off point. This marks
            the end of an unforgettable East African safari experience filled with wildlife, landscapes, and
            cultural encounters.
          </p>

        </div>

        <BookingCTA price="$5800" />
      </div>

      <MeetupLocation />
    </Layout>
  );
}