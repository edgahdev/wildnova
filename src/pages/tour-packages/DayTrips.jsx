import { useEffect, useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import './TourPackages.css';
import MeetupLocation from "../../components/MeetupLocation";
const DayTrips = () => {

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
      title: "Tsavo East Safari",
      duration: "1 Days ",
      description:
        "You’ve enjoyed the beautiful Kenya coast, now how about experiencing a true African Safari? This 2-day adventure takes you deep into Tsavo East National Park, the largest national park in Kenya and one of the most iconic wildlife destinations in Africa. Tsavo East is famous for its vast open savannahs, red-dust landscapes, and its incredible diversity of wildlife.\n\nDuring your safari, you will explore the park on guided game drives in search of the legendary red elephants, lions, buffaloes, giraffes, zebras, and many species of antelope. The lions of Tsavo are particularly unique as they are known for their short manes and their fascinating history which dates back to the famous Tsavo man-eaters.\n\nThe safari also offers excellent opportunities to see rhinos, crocodiles along the Galana River, and a wide variety of bird species. With comfortable safari transport, expert guides, and stunning landscapes, this safari provides an unforgettable introduction to Kenya’s wildlife heritage.",

      highlights: [
        "Game drives in Tsavo East National Park",
        "Chance to see the famous red elephants",
        "Visit to the Galana River and Aruba Dam",
        "Spectacular African savannah landscapes"
      ],

      meals: ["L", "D", "B"],
      accommodation: "Overnight stay at a safari lodge or tented camp inside the park"
    },


    {
      title: "Shimba Hills National Reserve Tour",
      duration: "1 Day",
      description:
        "Escape the coastal heat and travel to the lush green hills of Shimba Hills National Reserve, one of the most scenic and unique wildlife reserves in Kenya. Located only a short drive from Mombasa, this reserve is a beautiful blend of tropical rainforest, grasslands, and rolling hills offering breathtaking views of the Indian Ocean.\n\nShimba Hills is home to elephants, buffaloes, giraffes, and the rare sable antelope, which is found in very few places in Kenya. Visitors will also enjoy a guided nature walk to the spectacular Sheldrick Falls, where cool waters cascade down through the forest creating a peaceful natural retreat.\n\nThis tour is perfect for travelers looking for a mix of wildlife viewing, nature exploration, and stunning coastal scenery.",

      highlights: [
        "Game drive in Shimba Hills National Reserve",
        "Visit the beautiful Sheldrick Waterfalls",
        "Opportunity to see the rare sable antelope",
        "Panoramic views of the Kenyan coastline"
      ],

      meals: ["L"],
      accommodation: "Return to Mombasa hotel"
    },


    {
      title: "Full Day Mombasa City Tour",
      duration: "Full Day",
      description:
        "Discover the rich culture, history, and heritage of Mombasa on this immersive full-day city tour. Mombasa is Kenya’s oldest city and has been a cultural crossroads for centuries, blending African, Arab, Indian, and European influences.\n\nYour tour includes a visit to the historic Fort Jesus, a UNESCO World Heritage Site built by the Portuguese in the 16th century. You will also explore the charming narrow streets of Old Town, admire the famous Elephant Tusks monument, and experience the vibrant spice and fruit markets.\n\nThis tour gives visitors a deeper understanding of Mombasa’s fascinating past while allowing time to shop for local crafts and souvenirs.",

      highlights: [
        "Visit Fort Jesus UNESCO heritage site",
        "Explore Old Town Mombasa",
        "Walk through the famous Elephant Tusks",
        "Shopping at local craft markets"
      ],

      meals: ["L"],
      accommodation: "Return to hotel"
    },


    {
      title: "Half Day Mombasa City Tour",
      duration: "Half Day",
      description:
        "Perfect for travelers with limited time, this half-day Mombasa tour introduces you to the highlights of this historic coastal city. With the guidance of an experienced tour guide, you will explore some of the city’s most famous landmarks and cultural attractions.\n\nYou will visit the famous Elephant Tusks monument, explore the colorful Old Town streets, and learn about the city’s Swahili heritage and maritime history. This short yet enriching tour is ideal for cruise passengers or visitors who want to experience the essence of Mombasa in just a few hours.",

      highlights: [
        "Old Town walking tour",
        "Visit the Elephant Tusks monument",
        "Explore spice and fruit markets",
        "Learn about Swahili culture"
      ],

      meals: [],
      accommodation: "Return to hotel"
    },


    {
      title: "Funzi Island Tour",
      duration: "Full Day",
      description:
        "Enjoy a relaxing and scenic escape to Funzi Island, a peaceful tropical paradise located along Kenya’s south coast. This unique tour begins with a traditional boat ride through beautiful mangrove forests and winding waterways leading to the island.\n\nFunzi Island offers visitors a chance to experience authentic Swahili coastal culture and lifestyle. One of the highlights of this trip is visiting the stunning Funzi sandbank, a white sandy strip that emerges in the middle of the ocean during low tide.\n\nGuests will also enjoy a delicious seafood lunch served at a local restaurant before returning to the mainland.",

      highlights: [
        "Boat ride through mangrove channels",
        "Visit the Funzi sandbank",
        "Explore Funzi Island village",
        "Enjoy fresh seafood lunch"
      ],

      meals: ["L"],
      accommodation: "Return to hotel"
    },


    {
      title: "Wasini Island Dolphin Tour",
      duration: "Full Day",
      description:
        "This exciting marine adventure takes you to Wasini Island and the famous Kisite-Mpunguti Marine Park, one of the best snorkeling and dolphin-watching locations in Kenya. The tour begins with a traditional dhow boat cruise across the turquoise waters of the Indian Ocean.\n\nGuests will have the opportunity to spot playful dolphins swimming alongside the boat before arriving at the marine park for snorkeling among colorful coral reefs and tropical fish. After the ocean adventure, you will visit Wasini Island village and enjoy a delicious Swahili seafood lunch overlooking the ocean.",

      highlights: [
        "Dolphin watching experience",
        "Snorkeling in Kisite Marine Park",
        "Traditional dhow boat cruise",
        "Swahili seafood lunch on Wasini Island"
      ],

      meals: ["L"],
      accommodation: "Return to hotel"
    },


    {
      title: "Tuk Tuk Village Experience",
      duration: "Half Day",
      description:
        "Experience the vibrant local life of coastal Kenya with a fun Tuk Tuk village tour. This unique excursion takes you through local neighborhoods and villages where you can interact with friendly residents and learn about daily coastal life.\n\nTraveling in a traditional Tuk Tuk allows you to explore small streets and hidden corners of the community while discovering local markets, craft shops, and traditional Swahili architecture. It is an authentic cultural experience that offers a deeper understanding of the local lifestyle.",

      highlights: [
        "Ride through local villages in a Tuk Tuk",
        "Visit local markets",
        "Experience Swahili culture",
        "Interact with local communities"
      ],

      meals: [],
      accommodation: "Return to hotel"
    },


    {
      title: "Bora Bora Wildlife Park",
      duration: "Half Day",
      description:
        "Bora Bora Wildlife Park offers a relaxing nature experience ideal for families and wildlife lovers. The park is home to a variety of animals and birds within a peaceful natural environment where visitors can enjoy nature walks and wildlife viewing.\n\nThis tour is perfect for travelers who prefer a calm outdoor experience close to Mombasa while still enjoying wildlife encounters and beautiful landscapes.",

      highlights: [
        "Wildlife viewing",
        "Nature walks",
        "Family-friendly experience",
        "Relaxing natural environment"
      ],

      meals: [],
      accommodation: "Return to hotel"
    }

  ];


  const includes = [
    "Professional English-speaking guide",
    "Hotel pickup and drop-off in Mombasa",
    "Transport in comfortable tour vehicle",
    "Park entrance fees where applicable",
    "Lunch for full day tours",
    "Bottled drinking water"
  ];

  const excludes = [
    "Flights",
    "Travel insurance",
    "Tips and gratuities",
    "Personal expenses",
    "Alcoholic beverages",
    "Accommodation unless specified"
  ];

  return (
    <Layout>

      <div className="tour-page" ref={sectionRef}>

        <TourHeader
          title="Coastal Day Trips"
          subtitle="Discover the best experiences along the Kenyan Coast"
          image="/images/package-daytrips.jpg"
          duration="Half Day - 2 Days"
          price="$60 - $350"
          maxGroup="6 - 12 People"
          bestTime="Year Round"
        />

        <section className="itinerary-section">
          <div className="container">

            <h2 className="section-title reveal">
              Available Day Tours
            </h2>

            <p className="section-subtitle reveal">
              Choose from exciting safaris, island adventures, and cultural tours
              across the beautiful Kenyan coast.
            </p>

            <div className="reveal">
              <ItineraryTimeline days={days} />
            </div>

          </div>
        </section>

        <section className="inclusion-section">
          <div className="container">

            <h2 className="section-title reveal">
              What's Included
            </h2>

            <div className="reveal">
              <InclusionCard includes={includes} excludes={excludes} />
            </div>

          </div>
        </section>

        <BookingCTA price="$60" />

      </div>
      <div>
        <MeetupLocation />
      </div>

    </Layout>
  );
};

export default DayTrips;