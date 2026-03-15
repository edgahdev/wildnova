import { useEffect, useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import './TourPackages.css';
import MeetupLocation from "../../components/MeetupLocation";
const MombasaTours = () => {
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
    // 3 Days Maasai Mara by Flight
    {
      package: 1,
      title: "3 Days Maasai Mara by Flight",
      description: `
Welcome to a thrilling 3-day adventure into the heart of the Maasai Mara! Fly from Mombasa and arrive in one of the most iconic wildlife destinations in Africa. As you explore the Mara, you’ll witness vast herds of zebras, wildebeest, and gazelles grazing across golden plains. Lions lounge in the shade while elephants roam majestically, offering incredible photo opportunities. Engage with local Maasai communities and learn about their vibrant culture and traditions. This safari promises immersive game drives at sunrise and sunset, with opportunities to spot cheetahs sprinting across the savannah. Experience the magic of African sunsets and listen to the sounds of the wild at night. Capture moments with breathtaking landscapes, rivers teeming with hippos, and birdlife in abundance. Whether you’re a seasoned safari-goer or a first-time visitor, this short journey delivers intense encounters with nature and culture. Every day is an unforgettable memory waiting to happen in the Maasai Mara.`,
      highlights: [
        "Big Five Safari Experience",
        "Maasai Cultural Visit",
        "Morning and Afternoon Game Drives",
        "Wildlife Photography"
      ]
    },

    // 2 Days Tsavo East & Saltlick Lodge
    {
      package: 2,
      title: "2 Days Tsavo East & Saltlick Lodge",
      description: `
Embark on a 2-day adventure through Tsavo East, Kenya’s iconic red elephant country. The park’s dramatic landscapes are a photographer’s dream, from expansive savannahs to rocky outcrops. Watch herds of elephants bathe in natural waterholes and spot prides of lions lounging under acacia trees. Saltlick Lodge offers unique wildlife viewing, where animals congregate near waterholes creating unforgettable encounters. On your game drives, expect giraffes, zebras, and gazelles wandering freely. The vastness of Tsavo East allows for immersive and private safari experiences. Marvel at the vibrant sunsets painting the sky while listening to the symphony of wildlife. Guides share fascinating insights about the ecosystem, flora, and fauna. This short safari is an ideal introduction to Kenya’s wilderness, combining adventure, wildlife, and awe-inspiring scenery. Enjoy every moment surrounded by nature in its purest form.`,
      highlights: [
        "Red Elephant Sightings",
        "Saltlick Lodge Waterhole Viewing",
        "Guided Safari Game Drives",
        "Scenic Savannah Landscapes"
      ]
    },

    // 4 Days Tsavo East, Amboseli & Saltlick
    {
      package: 3,
      title: "4 Days Tsavo East, Amboseli & Saltlick",
      description: `
Prepare for a 4-day epic journey across some of Kenya’s most famous parks. Begin in Tsavo East, witnessing the iconic red elephants and dramatic savannahs. Continue to Amboseli National Park, where huge elephant herds roam with Mount Kilimanjaro as a magnificent backdrop. Your days are filled with morning and afternoon game drives, guided by expert safari guides who share in-depth knowledge of wildlife behavior. Capture stunning landscapes, from acacia-studded plains to shimmering lakes. Explore Saltlick Lodge and observe wildlife congregating at waterholes, creating intimate encounters with nature. Expect giraffes, lions, zebras, buffaloes, and abundant birdlife. Experience African sunsets, starry skies, and the immersive sounds of the wild. This tour combines diverse ecosystems, thrilling safari adventures, and cultural interactions. Each day offers unique opportunities for photography, wildlife spotting, and unforgettable memories.`,
      highlights: [
        "Tsavo East Game Drives",
        "Amboseli Elephant Herds",
        "Mount Kilimanjaro Views",
        "Saltlick Lodge Waterhole Safari"
      ]
    },

    // 5 Days Saltlick, Amboseli, Ziwani & Tsavo East
    {
      package: 4,
      title: "5 Days Saltlick, Amboseli, Ziwani & Tsavo East",
      description: `
Embark on a 5-day Kenyan safari adventure that spans Saltlick Lodge, Amboseli, Ziwani Forest, and Tsavo East. Witness wildlife at its most raw and natural, with elephants, lions, and giraffes roaming freely. Ziwani Forest introduces a semi-arid ecosystem rich in bird species and smaller wildlife. In Amboseli, marvel at majestic elephants against the backdrop of Kilimanjaro. Tsavo East offers dramatic landscapes, red elephants, and extensive savannahs. Engage with Maasai communities and learn about their customs and traditions. Your expert guides will enhance the experience with insights about wildlife and conservation. Enjoy morning and afternoon game drives, wildlife photography, and immersive sunsets. Each day is crafted to give deep connections with nature and unforgettable safari memories. This tour is perfect for adventurers seeking a comprehensive exploration of Kenya’s top wildlife destinations.`,
      highlights: [
        "Saltlick Lodge Waterholes",
        "Amboseli National Park Game Drives",
        "Ziwani Forest Nature Walks",
        "Tsavo East Red Elephants",
        "Cultural Maasai Interactions"
      ]
    },

    // 3 Days Tsavo West & Tsavo East
    {
      package: 5,
      title: "3 Days Tsavo West & Tsavo East",
      description: `
Experience a thrilling 3-day safari across Tsavo West and Tsavo East National Parks. Explore volcanic hills, Mzima Springs, and hidden valleys teeming with wildlife. Witness large elephant herds, lions, and hippos in their natural habitats. Cross into Tsavo East for expansive savannahs, red elephants, and iconic wildlife encounters. Enjoy the perfect combination of adventure and relaxation, capturing Africa’s breathtaking landscapes. Expert guides provide insights into ecosystems and animal behavior. Marvel at dramatic sunsets, starry skies, and the beauty of untouched wilderness. From game drives to photography, every moment immerses you in Kenya’s natural splendor. This safari is ideal for travelers seeking a condensed yet unforgettable African adventure.`,
      highlights: [
        "Tsavo West Volcanic Landscapes",
        "Mzima Springs Wildlife",
        "Tsavo East Red Elephants",
        "Savannah Game Drives",
        "Photography Opportunities"
      ]
    },

    // 4 Days Tsavo West, Amboseli & Tsavo East
    {
      package: 6,
      title: "4 Days Tsavo West, Amboseli & Tsavo East",
      description: `
Embark on a 4-day safari adventure through Tsavo West, Amboseli, and Tsavo East. Begin in Tsavo West exploring volcanic hills, lush forests, and Mzima Springs. Travel to Amboseli and encounter vast herds of elephants with Mount Kilimanjaro as a breathtaking backdrop. Continue to Tsavo East for iconic red elephants, lions, and giraffes roaming freely across endless plains. Each day includes guided game drives, wildlife photography opportunities, and immersive experiences with nature. Observe African sunsets and starlit skies, feeling the pulse of the wilderness. This tour combines diverse ecosystems, unforgettable wildlife encounters, and iconic landscapes for a once-in-a-lifetime Kenyan safari.`,
      highlights: [
        "Tsavo West Safari Adventures",
        "Amboseli Elephant Herds",
        "Tsavo East Red Elephants",
        "Scenic Game Drives",
        "Photography and Wildlife Immersion"
      ]
    }
  ];

  const includes = [
    "Professional English-speaking guide",
    "All park entrance fees",
    "Private safari vehicle",
    "Morning and afternoon game drives",
    "Wildlife photography opportunities",
    "Cultural interactions with Maasai communities",
    "Airport transfers and flights (if specified in package)"
  ];

  const excludes = [
    "International flights",
    "Travel insurance",
    "Tips and gratuities",
    "Personal expenses",
    "Alcoholic beverages",
    "Optional activities not mentioned"
  ];

  const tourHighlights = [
    "Big Five safari experiences",
    "Scenic game drives",
    "Birdwatching and wildlife photography",
    "Cultural Maasai visits",
    "Immersive nature and landscapes"
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>
        <TourHeader 
          title="Mombasa Safari & Wildlife Tours"
          subtitle="Explore Kenya’s Coast and Iconic National Parks"
          image="/images/package-mombasa.jpg"
          duration="3-5 Days depending on package"
          maxGroup="8 people"
          bestTime="December - March, July - October"
        />

        <section className="tour-overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content reveal">
                <h2 className="section-title">Kenya Wildlife & Safari Adventures</h2>
                <p className="overview-text">
                  Immerse yourself in Kenya’s most iconic wildlife destinations. From Maasai Mara’s rolling savannahs to the red elephant landscapes of Tsavo, each tour is designed to give you unforgettable wildlife encounters, cultural immersion, and breathtaking landscapes. Expert guides will lead you through game drives, nature walks, and cultural interactions that bring Kenya’s natural wonders to life.
                </p>
                <p className="overview-text">
                  Whether you’re witnessing the Big Five, photographing elephants at waterholes, or exploring Ziwani Forest, every moment is curated for adventure, discovery, and lifelong memories. These tours are perfect for travelers seeking a deep connection with Africa’s wildlife and natural beauty.
                </p>
              </div>
              <div className="overview-highlights reveal">
                <h3>Tour Highlights</h3>
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
            <h2 className="section-title reveal">Detailed Safari Tours</h2>
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

        <BookingCTA price="$" />
      </div>
      <div>
        <MeetupLocation />
      </div>
    </Layout>
  );
};

export default MombasaTours;