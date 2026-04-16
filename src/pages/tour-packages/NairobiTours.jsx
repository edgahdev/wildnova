import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import MeetupLocation from "../../components/MeetupLocation";
import './NairobiTours.css';
import PackageSlider from '../../components/home/PackageSlider';

const NairobiTours = () => {

  const sectionRef = useRef(null);
  const navigate = useNavigate();

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

  // 🟢 PACKAGES (NAMES EXACTLY AS YOU REQUESTED)
  const packages = [
    {
      name: "9 days Aberdare national park, Ol pejeta conservancy, Meru national park, Samburu national park, Naivasha and Maasai Mara (2 nights)",
      image: "/images/nairobi-safaris/9-days-kenya-safari.jpg",
      path: "/tour-packages/nairobi/9-days"
    },
    {
      name: "7 days Amboseli (2), Nakuru and Maasai Mara (3)",
      image: "/images/nairobi-safaris/7-days-kenya-safari.jpg",
      path: "/tour-packages/nairobi/7-days"
    },
    {
      name: "6 days Amboseli, Nakuru, Naivasha and Maasai Mara (2)",
      image: "/images/nairobi-safaris/6-days-kenya-safari.jpg",
      path: "/tour-packages/nairobi/6-days"
    },
    {
      name: "3 days Maasai Mara by road",
      image: "/images/nairobi-safaris/3-days-maasai-mara.jpg",
      path: "/tour-packages/nairobi/3-days"
    },
    {
      name: "5 days Amboseli (2), Tsavo west and Tsavo east",
      image: "/images/nairobi-safaris/5-days-tsavo-amboseli.jpg",
      path: "/tour-packages/nairobi/5-days"
    },
    {
      name: "10 days Tsavo west, Tsavo east, saltlick, Amboseli (2), Naivasha, Nakuru and maasai mara(2)",
      image: "/images/nairobi-safaris/10-days-grand-safari.jpg",
      path: "/tour-packages/nairobi/10-days"
    }
  ];

  // keep your existing data (unchanged placeholders)
  const days = [];
 const includes = [
  "Transport in a comfortable 4x4 safari vehicle with pop-up roof",
  "Professional English-speaking safari guide/driver",
  "Park entrance fees for all listed destinations",
  "Unlimited game drives as per itinerary",
  "Accommodation in budget, comfort, or luxury lodges/tented camps",
  "All meals during safari (breakfast, lunch, and dinner)",
  "Bottled drinking water during game drives",
  "Pickup and drop-off at airport or hotel",
  "Government taxes and park conservation fees",
  "Emergency medical evacuation cover (Flying Doctors service)"
];
  const excludes = [
  "International and domestic flights",
  "Visa fees and travel documents",
  "Travel insurance (highly recommended)",
  "Personal expenses such as laundry and souvenirs",
  "Alcoholic and soft drinks",
  "Tips and gratuities for driver/guide",
  "Optional activities not mentioned in itinerary",
  "Hot air balloon safari (available at extra cost)"
];
  const tourHighlights = [ "Close encounters with elephants, lions, and giraffes", "Big Five wildlife viewing experience","Scenic African savannah landscapes","Professional guided game drives"];

  

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>

        {/* HERO */}
        <TourHeader
          title="Kenya Safaris from Nairobi"
          subtitle="Explore Kenya’s most iconic wildlife destinations"
          image="/images/package-nairobi.jpg"
          duration="3 – 10 Days"
          price="$650 - $3,500"
          maxGroup="6 people"
          bestTime="Year Round"
        />

        {/* 🟢 PACKAGES GRID */}
        <section className="packages-section">
          <div className="container">

            <h2 className="section-title reveal">
              Nairobi Safari Packages
            </h2>

            <div className="packages-grid">

              {packages.map((pkg, index) => (
                <div key={index} className="package-card reveal">

                  {/* IMAGE (UNCHANGED STRUCTURE) */}
                  <div className="package-image">
                    <img src={pkg.image} alt={pkg.name} />
                  </div>

                  {/* NAME */}
                  <h3 className="package-title">
                    {pkg.name}
                  </h3>

                  {/* EXPLORE BUTTON */}
                  <button
                    className="explore-btn"
                    onClick={() => navigate(pkg.path)}
                  >
                    Explore
                  </button>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="tour-overview">
          <div className="container">

            <div className="overview-grid">

              <div className="overview-content reveal">
                <h2 className="section-title">
                  Unforgettable Kenya Safari Adventures
                </h2>

                <p className="overview-text">
                  Kenya offers world-class safari experiences from the Maasai Mara
                  to Amboseli and the vast Tsavo ecosystem.
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

        {/* ITINERARY */}
        <section className="itinerary-section">
          <div className="container">
            <h2 className="section-title reveal">
              Available Safari Packages
            </h2>

            <div className="reveal">
              <ItineraryTimeline days={days} />
            </div>
          </div>
        </section>

        {/* INCLUSIONS */}
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
        <PackageSlider />

        {/* CTA */}
        <BookingCTA price="$650" />

      </div>

      <MeetupLocation />
    </Layout>
  );
};

export default NairobiTours;