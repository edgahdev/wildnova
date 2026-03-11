import { useEffect, useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import './TourPackages.css';

const NairobiTours = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const days = [

{
day: 1,
title: "9 Days Safari: Aberdare – Ol Pejeta – Meru – Samburu – Naivasha – Maasai Mara",
description:
"Embark on a remarkable nine-day safari adventure across Kenya’s most diverse and spectacular landscapes. This journey begins in the misty highlands of Aberdare National Park, a region known for its dense forests, dramatic waterfalls, and unique wildlife including elephants, giant forest hogs, and the elusive bongo antelope.\n\nFrom Aberdare, the safari continues to the renowned Ol Pejeta Conservancy, one of Kenya’s leading wildlife conservation areas and home to the last remaining northern white rhinos. Game drives here offer excellent chances of spotting lions, elephants, cheetahs, and rhinos across open savannah landscapes.\n\nThe adventure continues to Meru National Park, a hidden gem famous for its pristine wilderness and rich wildlife populations. The park’s rivers, swamps, and forests create a beautiful and untouched safari environment.\n\nNext travel to Samburu National Reserve in Kenya’s northern frontier, home to rare wildlife species including Grevy’s zebra, reticulated giraffe, Somali ostrich, and the elegant gerenuk. The safari then proceeds to Lake Naivasha where you may enjoy a relaxing boat ride among hippos and abundant birdlife.\n\nThe journey concludes in the legendary Maasai Mara National Reserve where vast plains host an incredible concentration of wildlife including lions, cheetahs, elephants, and the famous Great Migration during the season.",

highlights: [
"Aberdare forest wildlife",
"Ol Pejeta rhino sanctuary",
"Meru wilderness landscapes",
"Samburu special five species",
"Lake Naivasha boat safari",
"Maasai Mara big cats"
],
meals:["B","L","D"],
accommodation:"Safari lodges and tented camps"
},

{
day:2,
title:"7 Days Safari: Amboseli – Nakuru – Maasai Mara",
description:
"This unforgettable seven-day safari takes you to three of Kenya’s most iconic wildlife destinations. Begin your journey in Amboseli National Park, famous for its breathtaking views of Mount Kilimanjaro and large elephant herds roaming across the open plains.\n\nContinue to Lake Nakuru National Park located in the Great Rift Valley. The park is internationally known for its rhino sanctuary and flamingo-filled lake shores. Visitors often encounter white rhinos, Rothschild’s giraffes, lions, and numerous bird species.\n\nThe final destination is the world-famous Maasai Mara National Reserve where sweeping savannah plains host one of the richest wildlife ecosystems in Africa. Game drives here reveal incredible predator activity and large herds of grazing animals roaming freely across the landscape.",

highlights:[
"Amboseli elephants with Kilimanjaro",
"Lake Nakuru flamingos and rhinos",
"Maasai Mara wildlife encounters",
"Big Five safari opportunities"
],
meals:["B","L","D"],
accommodation:"Luxury safari lodges"
},

{
day:3,
title:"6 Days Safari: Amboseli – Nakuru – Naivasha – Maasai Mara",
description:
"Discover Kenya’s famous safari circuit on this exciting six-day wildlife journey. The adventure begins in Amboseli National Park where elephants roam beneath the snow-capped peak of Mount Kilimanjaro.\n\nTravel north into the Great Rift Valley to Lake Nakuru National Park, a sanctuary for endangered rhinos and home to an impressive variety of birdlife. The safari then continues to Lake Naivasha, a freshwater lake surrounded by acacia forests and dramatic escarpments. Here you may enjoy a boat safari among hippos and water birds.\n\nThe safari concludes in the Maasai Mara National Reserve where thrilling game drives provide unforgettable encounters with Africa’s most famous wildlife species.",

highlights:[
"Amboseli elephant herds",
"Lake Nakuru rhino sanctuary",
"Lake Naivasha boat excursion",
"Maasai Mara predator sightings"
],
meals:["B","L","D"],
accommodation:"Safari lodges and camps"
},

{
day:4,
title:"3 Days Maasai Mara Safari by Road",
description:
"This three-day Maasai Mara safari is the perfect short getaway for travelers wishing to experience Kenya’s most famous wildlife reserve. Depart Nairobi and journey through the dramatic landscapes of the Great Rift Valley before arriving in the Maasai Mara.\n\nThe reserve is renowned for its extraordinary wildlife populations including lions, elephants, cheetahs, leopards, buffaloes, and countless plains game species. During the migration season, millions of wildebeest and zebras cross the Mara River creating one of the most spectacular wildlife events on Earth.\n\nEnjoy exciting morning and afternoon game drives across the vast plains before returning to Nairobi with unforgettable safari memories.",

highlights:[
"Great Rift Valley scenery",
"Maasai Mara wildlife safari",
"Great Migration viewing (seasonal)",
"Big cat sightings"
],
meals:["B","L","D"],
accommodation:"Safari lodge or tented camp"
},

{
day:5,
title:"5 Days Safari: Amboseli – Tsavo West – Tsavo East",
description:
"Experience the beauty of Kenya’s southern safari circuit on this five-day adventure through three spectacular national parks. Begin in Amboseli National Park where large elephant herds roam across open plains beneath Mount Kilimanjaro.\n\nThe journey continues to Tsavo West National Park, a landscape of volcanic hills, lava flows, and lush springs. Visit the famous Mzima Springs where crystal clear waters attract hippos and crocodiles.\n\nThe safari concludes in Tsavo East National Park, Kenya’s largest national park and home to the famous red elephants, lions, buffaloes, giraffes, and numerous antelope species roaming across its vast wilderness.",

highlights:[
"Amboseli elephant herds",
"Mzima Springs at Tsavo West",
"Tsavo red elephants",
"Scenic volcanic landscapes"
],
meals:["B","L","D"],
accommodation:"Safari lodges"
},

{
day:6,
title:"10 Days Safari: Tsavo West – Tsavo East – Saltlick – Amboseli – Naivasha – Nakuru – Maasai Mara",
description:
"This comprehensive ten-day safari offers an incredible journey through Kenya’s most famous wildlife destinations. Begin in Tsavo West National Park exploring dramatic landscapes of lava fields and natural springs.\n\nContinue to Tsavo East where vast plains host elephants, lions, and large herds of wildlife. The safari proceeds to the famous Saltlick Safari Lodge located in the Taita Hills Sanctuary where animals gather at waterholes visible from the lodge decks.\n\nNext travel to Amboseli National Park before continuing to Lake Naivasha and Lake Nakuru in the Great Rift Valley. The journey concludes in the world-renowned Maasai Mara where unforgettable wildlife encounters await across the endless savannah plains.",

highlights:[
"Tsavo wilderness safari",
"Saltlick wildlife lodge experience",
"Amboseli Kilimanjaro scenery",
"Lake Nakuru rhino sanctuary",
"Maasai Mara wildlife adventure"
],
meals:["B","L","D"],
accommodation:"Luxury safari lodges and camps"
}

  ];

  const includes = [
    "Safari lodge or tented camp accommodation",
    "All meals during safari",
    "Professional English-speaking safari guide",
    "Private 4x4 safari vehicle",
    "All park entrance fees",
    "Bottled drinking water during safari",
    "Pickup and drop-off in Nairobi"
  ];

  const excludes = [
    "International flights",
    "Travel insurance",
    "Tips and gratuities",
    "Personal expenses",
    "Alcoholic beverages",
    "Optional activities such as hot air balloon safari"
  ];

  const tourHighlights = [
    "Maasai Mara wildlife safari",
    "Amboseli elephants with Mount Kilimanjaro",
    "Great Rift Valley lakes",
    "Tsavo red elephants",
    "Rare Samburu wildlife species"
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>

        <TourHeader
          title="Kenya Safaris from Nairobi"
          subtitle="Explore Kenya’s most iconic wildlife destinations"
          image="/images/package-nairobi.jpg"
          duration="3 – 10 Days"
          price="$650 - $3,500"
          maxGroup="6 people"
          bestTime="Year Round"
        />

        <section className="tour-overview">
          <div className="container">
            <div className="overview-grid">

              <div className="overview-content reveal">
                <h2 className="section-title">Unforgettable Kenya Safari Adventures</h2>
                <p className="overview-text">
                  Kenya offers some of the finest safari experiences in Africa. 
                  From the iconic Maasai Mara plains to the majestic views of 
                  Mount Kilimanjaro in Amboseli and the wildlife-rich parks 
                  of Tsavo and Samburu, these safari packages showcase the 
                  very best of Kenya’s diverse landscapes and wildlife.
                </p>

                <p className="overview-text">
                  Our safaris are carefully designed to provide authentic 
                  wildlife encounters, comfortable accommodations, and 
                  unforgettable journeys through the heart of Africa.
                </p>
              </div>

              <div className="overview-highlights reveal">
                <h3>Safari Highlights</h3>
                <ul>
                  {tourHighlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        <section className="itinerary-section">
          <div className="container">
            <h2 className="section-title reveal">Available Safari Packages</h2>

            <div className="reveal">
              <ItineraryTimeline days={days} />
            </div>
          </div>
        </section>

        <section className="inclusion-section">
          <div className="container">
            <h2 className="section-title reveal">What's Included</h2>
            <div className="reveal">
              <InclusionCard includes={includes} excludes={excludes} />
            </div>
          </div>
        </section>

        <BookingCTA price="$650" />

      </div>
    </Layout>
  );
};

export default NairobiTours;