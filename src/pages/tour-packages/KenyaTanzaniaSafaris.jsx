import { useEffect, useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import './TourPackages.css';
import MeetupLocation from "../../components/MeetupLocation";

const KenyaTanzaniaSafaris = () => {

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
title: "9 Days Safari: Naivasha – Maasai Mara – Serengeti – Ngorongoro",
description:
"Welcome to an extraordinary nine-day safari adventure through the breathtaking landscapes of Kenya and Tanzania. This carefully designed journey combines some of East Africa’s most celebrated wildlife destinations, offering travelers the perfect balance of scenic beauty, rich culture, and unforgettable wildlife encounters.\n\nOur adventure begins in the beautiful Great Rift Valley at Lake Naivasha, a serene freshwater lake surrounded by acacia forests and dramatic escarpments. Here you may enjoy a peaceful boat safari across the calm waters while spotting hippos resting near the shoreline and fish eagles soaring above the lake. The surrounding landscapes are home to giraffes, zebras, and antelope roaming freely across Crescent Island.\n\nFrom the tranquil lakeside scenery, the journey continues to the world-famous Maasai Mara National Reserve. Known for its sweeping savannah plains and remarkable concentration of wildlife, the Mara offers thrilling game drives where visitors can encounter lions, cheetahs, elephants, and large herds of grazing animals. During the migration season, the plains become the stage for one of nature’s greatest spectacles as thousands of wildebeest and zebras cross the Mara River.\n\nCrossing the border into Tanzania, the safari continues into the legendary Serengeti National Park, a vast ecosystem often described as the heart of African wildlife. Endless golden plains stretch beyond the horizon, supporting one of the most impressive concentrations of wildlife on Earth.\n\nThe journey concludes at the magnificent Ngorongoro Crater, a UNESCO World Heritage Site formed millions of years ago by a collapsed volcano. Descending into the crater floor reveals an extraordinary natural sanctuary where lions, elephants, flamingos, and the endangered black rhino thrive within this breathtaking natural amphitheater.\n\nThis safari promises an unforgettable exploration of East Africa’s most iconic landscapes and wildlife destinations.",

highlights: [
"Boat safari on Lake Naivasha",
"Maasai Mara wildlife encounters",
"Serengeti endless plains",
"Ngorongoro Crater descent",
"Great Migration viewing (seasonal)"
],
meals: ["B","L","D"],
accommodation: "Safari lodges and luxury tented camps"
},

{
day: 2,
title: "12 Days Safari: Amboseli – Naivasha – Nakuru – Maasai Mara – Serengeti (Drop Off Arusha)",
description:
"Embark on an unforgettable twelve-day safari expedition across Kenya and Tanzania, exploring some of the most remarkable wildlife destinations in Africa. This journey offers travelers a rich combination of dramatic landscapes, diverse ecosystems, and incredible wildlife encounters.\n\nYour safari begins in Amboseli National Park, famous for its breathtaking views of Mount Kilimanjaro rising majestically above the plains. Amboseli is particularly renowned for its large elephant herds that roam freely across the open savannah, creating some of the most iconic safari scenes in Africa.\n\nFrom the shadow of Kilimanjaro, the adventure continues into Kenya’s Great Rift Valley to Lake Naivasha. Surrounded by lush vegetation and volcanic landscapes, the lake provides a tranquil setting for boat excursions where visitors can observe hippos and a remarkable variety of birdlife.\n\nThe journey proceeds to Lake Nakuru National Park, a spectacular wildlife sanctuary known for its flamingo-lined shores and important rhino conservation efforts. Here visitors may encounter white and black rhinos, Rothschild’s giraffes, lions, and leopards among the park’s woodlands and open plains.\n\nNext, travel to the legendary Maasai Mara National Reserve where thrilling game drives reveal Africa’s most famous predators and vast herds of wildlife roaming the endless plains. The Mara offers some of the finest wildlife viewing opportunities anywhere on the continent.\n\nCross into Tanzania and explore the iconic Serengeti National Park, where vast savannah landscapes support one of the richest wildlife ecosystems on Earth. From dramatic predator encounters to the incredible movement of migrating herds, the Serengeti delivers an authentic and unforgettable African safari experience.\n\nYour safari concludes in Arusha, Tanzania, leaving you with lasting memories of East Africa’s extraordinary wildlife and landscapes.",

highlights: [
"Amboseli elephants with Kilimanjaro views",
"Boat safari at Lake Naivasha",
"Flamingos and rhinos at Lake Nakuru",
"Maasai Mara big cat sightings",
"Serengeti wildlife adventure"
],
meals: ["B","L","D"],
accommodation: "Premium safari lodges and camps"
},

{
day: 3,
title: "13 Days Grand Safari: Samburu – Naivasha – Nakuru – Maasai Mara – Serengeti – Tarangire – Amboseli",
description:
"Prepare for the ultimate East African safari experience with this extraordinary thirteen-day journey through Kenya and Tanzania’s most spectacular wildlife destinations. This grand expedition takes you across diverse landscapes ranging from rugged northern wilderness to vast savannah plains and volcanic highlands.\n\nThe adventure begins in Samburu National Reserve, a remote and dramatic landscape in northern Kenya known for its rare and unique wildlife species. Here you may encounter the famous Samburu Special Five including the Grevy’s zebra, reticulated giraffe, Somali ostrich, Beisa oryx, and the elegant long-necked gerenuk.\n\nFrom Samburu the journey continues south into the Great Rift Valley to Lake Naivasha, a peaceful oasis surrounded by acacia forests and volcanic hills. Boat rides across the lake offer close encounters with hippos and numerous bird species.\n\nNext explore Lake Nakuru National Park, one of Kenya’s most important wildlife sanctuaries and a haven for rhino conservation. The park’s beautiful landscapes host flamingos, giraffes, lions, and many other fascinating species.\n\nContinue to the world-famous Maasai Mara where sweeping plains provide the perfect stage for unforgettable wildlife encounters. Game drives here often reveal lions stalking prey, cheetahs sprinting across the savannah, and elephants moving gracefully through the grasslands.\n\nCross into Tanzania and discover the legendary Serengeti National Park, a wildlife paradise where millions of animals roam across the vast plains. The safari continues to Tarangire National Park, famous for its towering baobab trees and massive elephant herds gathering along the Tarangire River.\n\nThe adventure concludes in Amboseli National Park where elephants roam beneath the snow-capped peak of Mount Kilimanjaro, offering one of the most iconic safari landscapes in Africa.\n\nThis grand safari is the ultimate journey for wildlife enthusiasts seeking a complete exploration of East Africa’s natural wonders.",

highlights: [
"Samburu rare wildlife species",
"Lake Naivasha boat safari",
"Lake Nakuru rhino sanctuary",
"Maasai Mara predator sightings",
"Serengeti endless plains",
"Tarangire elephant herds",
"Amboseli Kilimanjaro scenery"
],
meals: ["B","L","D"],
accommodation: "Luxury safari lodges and tented camps"
}

  ];

  const includes = [
    "Luxury lodge and tented camp accommodation",
    "All meals during safari",
    "Professional English-speaking safari guide",
    "Private 4x4 safari vehicle",
    "All national park entrance fees",
    "Bottled water during game drives",
    "Airport transfers",
    "Cross-border safari coordination"
  ];

  const excludes = [
    "International flights",
    "Travel insurance",
    "Tips and gratuities",
    "Personal expenses",
    "Alcoholic beverages",
    "Visa fees for Kenya and Tanzania"
  ];

  const tourHighlights = [
    "Serengeti Great Migration",
    "Ngorongoro Crater wildlife safari",
    "Maasai Mara big cats",
    "Amboseli elephants with Kilimanjaro",
    "Samburu rare wildlife species"
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>

        <TourHeader
          title="Kenya - Tanzania Safaris"
          subtitle="Discover the best wildlife adventures across East Africa"
          image="/images/package-kenya-tanzania.jpg"
          duration="9 – 13 Days"
          price="$3,200 - $5,800"
          maxGroup="6 people"
          bestTime="Year Round"
        />

        <section className="tour-overview">
          <div className="container">
            <div className="overview-grid">

              <div className="overview-content reveal">
                <h2 className="section-title">Epic East African Safari Journeys</h2>
                <p className="overview-text">
                  Our Kenya and Tanzania safari journeys are carefully designed to showcase 
                  the very best of East Africa’s wildlife and landscapes. From the famous 
                  Maasai Mara and Serengeti plains to the dramatic Ngorongoro Crater and 
                  the elephant-rich Amboseli National Park, these safaris provide an 
                  extraordinary opportunity to explore Africa’s most iconic destinations.
                </p>

                <p className="overview-text">
                  Guided by experienced safari professionals and staying in comfortable 
                  lodges and tented camps, travelers can enjoy unforgettable wildlife 
                  encounters, breathtaking scenery, and authentic African hospitality.
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
            <h2 className="section-title reveal">Safari Packages</h2>

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

        <BookingCTA price="$3,200" />

      </div>
      <div>
        <MeetupLocation />
      </div>
    </Layout>
  );
};

export default KenyaTanzaniaSafaris;