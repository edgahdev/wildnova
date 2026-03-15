import { useEffect, useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import './TourPackages.css';
import MeetupLocation from "../../components/MeetupLocation";

const TanzaniaSafaris = () => {

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
title: "3 Days Ngorongoro Safari",
description:
"Experience one of Africa’s most extraordinary wildlife destinations on this unforgettable three-day safari to the world-famous Ngorongoro Crater. Often described as the Eighth Wonder of the World, the Ngorongoro Crater is the largest intact volcanic caldera on Earth and home to an incredible concentration of wildlife within a breathtaking natural setting.\n\nYour journey begins in Arusha as you travel through the scenic landscapes of northern Tanzania toward the Ngorongoro Conservation Area. Along the way, enjoy spectacular views of rolling hills, traditional Maasai villages, and fertile highlands that make this region one of the most picturesque in East Africa.\n\nDescending over 600 meters into the crater floor reveals a unique ecosystem teeming with wildlife. Here visitors may encounter lions, elephants, buffaloes, hyenas, zebras, and the endangered black rhino all living within this remarkable natural sanctuary. Flamingos can often be seen decorating the shores of Lake Magadi, adding vibrant color to the crater landscape.\n\nThis short yet rewarding safari offers travelers an exceptional opportunity to experience Tanzania’s wildlife and dramatic scenery within a compact and perfectly designed adventure.",

highlights: [
"Ngorongoro Crater descent",
"Black rhino sanctuary",
"Incredible wildlife density",
"Spectacular volcanic landscapes"
],
meals: ["B","L","D"],
accommodation: "Ngorongoro safari lodge or tented camp"
},

{
day: 2,
title: "4 Days Safari: Lake Manyara – Ngorongoro – Tarangire",
description:
"Embark on an exciting four-day safari journey through three of Tanzania’s most beautiful national parks. This adventure combines diverse landscapes, remarkable wildlife encounters, and unforgettable safari experiences across northern Tanzania’s famous safari circuit.\n\nThe safari begins at Lake Manyara National Park, a scenic wildlife haven nestled beneath the dramatic cliffs of the Great Rift Valley escarpment. The park is famous for its lush groundwater forest, large troops of baboons, and the legendary tree-climbing lions that make this destination unique. Along the lake’s shoreline, thousands of flamingos and other water birds create a colorful spectacle.\n\nThe journey continues to the magnificent Ngorongoro Conservation Area, where visitors descend into the iconic Ngorongoro Crater for a spectacular wildlife safari. The crater floor offers one of the best places in Africa to view wildlife, including lions, elephants, buffaloes, and the endangered black rhino.\n\nYour adventure concludes in Tarangire National Park, a beautiful and less crowded park known for its ancient baobab trees and large elephant herds that gather along the Tarangire River. During the dry season, this park hosts one of the largest concentrations of wildlife in Tanzania, making it a perfect final destination for this remarkable safari.",

highlights: [
"Tree-climbing lions of Lake Manyara",
"Ngorongoro Crater safari",
"Flamingos and hippos",
"Tarangire elephant herds",
"Baobab tree landscapes"
],
meals: ["B","L","D"],
accommodation: "Safari lodges and tented camps"
},

{
day: 3,
title: "5 Days Safari: Lake Manyara – Ngorongoro – Serengeti",
description:
"Discover the magic of Tanzania on this extraordinary five-day safari exploring three of the country’s most celebrated wildlife destinations. This carefully crafted adventure offers travelers an incredible combination of dramatic landscapes, abundant wildlife, and unforgettable safari moments.\n\nYour journey begins at Lake Manyara National Park, a compact yet diverse park famous for its dense forests, large elephant populations, and the fascinating tree-climbing lions often spotted resting on acacia branches. The alkaline lake also attracts thousands of flamingos and a wide variety of birdlife, making it a paradise for bird watchers.\n\nFrom Lake Manyara, the safari continues to the Ngorongoro Conservation Area where you descend into the breathtaking Ngorongoro Crater. The crater floor forms a natural wildlife sanctuary with one of the highest densities of animals in Africa. Lions, elephants, buffaloes, zebras, and rhinos can all be spotted within this spectacular natural amphitheater.\n\nThe highlight of this safari is the legendary Serengeti National Park, a vast wilderness that stretches endlessly across northern Tanzania. The Serengeti is world-renowned for its incredible wildlife populations and the dramatic Great Migration where millions of wildebeest and zebras travel across the plains in search of fresh grazing.\n\nGame drives through the Serengeti reveal an abundance of predators including lions, cheetahs, and leopards, creating unforgettable wildlife encounters and breathtaking photographic opportunities.",

highlights: [
"Serengeti endless plains",
"Great Migration (seasonal)",
"Ngorongoro Crater wildlife",
"Lake Manyara tree-climbing lions",
"Big cat sightings"
],
meals: ["B","L","D"],
accommodation: "Luxury safari lodges and tented camps"
}

  ];

  const includes = [
    "Luxury lodge or tented camp accommodation",
    "All meals during safari",
    "Professional English-speaking safari guide",
    "Private 4x4 safari vehicle with pop-up roof",
    "All national park entrance fees",
    "Bottled drinking water during game drives",
    "Airport transfers in Arusha",
    "Government taxes and levies"
  ];

  const excludes = [
    "International flights",
    "Travel insurance",
    "Tips and gratuities",
    "Personal expenses",
    "Alcoholic beverages",
    "Visa fees",
    "Optional hot air balloon safari"
  ];

  const tourHighlights = [
    "Ngorongoro Crater safari experience",
    "Serengeti wildlife encounters",
    "Tarangire elephant herds",
    "Lake Manyara tree-climbing lions",
    "Scenic Great Rift Valley landscapes"
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>

        <TourHeader 
          title="Tanzania Safaris"
          subtitle="Explore Tanzania’s most iconic wildlife destinations"
          image="/images/package-tanzania.jpg"
          duration="3 – 5 Days"
          price="$900 - $2,100"
          maxGroup="6 people"
          bestTime="Year Round"
        />

        <section className="tour-overview">
          <div className="container">
            <div className="overview-grid">

              <div className="overview-content reveal">
                <h2 className="section-title">Discover Tanzania's Wildlife Wonders</h2>
                <p className="overview-text">
                  Tanzania is home to some of the most remarkable wildlife destinations 
                  on Earth. From the breathtaking Ngorongoro Crater to the legendary 
                  Serengeti plains and the beautiful landscapes of Lake Manyara and 
                  Tarangire, these safari packages offer unforgettable adventures 
                  through Africa’s most spectacular ecosystems.
                </p>

                <p className="overview-text">
                  Each safari is designed to provide authentic wildlife encounters, 
                  breathtaking scenery, and comfortable lodge accommodations while 
                  guided by experienced professional safari guides.
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

        <BookingCTA price="$900" />

      </div>
      <div>
        <MeetupLocation />
      </div>
    </Layout>
  );
};

export default TanzaniaSafaris;