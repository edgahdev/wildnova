import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import BookingCTA from '../../components/tours/BookingCTA';
import MeetupLocation from "../../components/MeetupLocation";
import './TanzaniaSafaris.css';
import PackageSlider from '../../components/home/PackageSlider';
const TanzaniaSafaris = () => {

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

  // ✅ PACKAGES (VISUAL CARDS)
  const packages = [
    {
      name: "3 Days Ngorongoro Safari",
      image: "/images/tanzania/ngorongoro-crater-safari.jpg",
      path: "/tanzania/3-days-ngorongoro"
    },
    {
      name: "4 Days Lake Manyara, Ngorongoro & Tarangire",
      image: "/images/tanzania/manyara-ngorongoro-tarangire.jpg",
      path: "/tanzania/4-days-manyara"
    },
    {
      name: "5 Days Lake Manyara, Ngorongoro & Serengeti",
      image: "/images/tanzania/serengeti-manyara-ngorongoro.jpg",
      path: "/tanzania/5-days-serengeti"
    }
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>

        {/* HERO */}
        <TourHeader
          title="Tanzania Safaris"
          subtitle="Explore the Best of Tanzania Wildlife Destinations"
          image="/images/package-tanzania.jpg"
          duration="3 – 5 Days"
          price="$900 - $2,100"
          maxGroup="6 people"
          bestTime="Year Round"
        />

        {/* PACKAGES */}
        <section className="packages-section">
          <div className="container">

            <h2 className="section-title reveal">
              Tanzania Safari Packages
            </h2>

            <div className="packages-grid">

              {packages.map((pkg, index) => (
                <div key={index} className="package-card reveal">

                  {/* IMAGE */}
                  <div className="image-wrapper">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                    />
                  </div>

                  {/* NAME ONLY */}
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
        <PackageSlider />

        <BookingCTA price="$900" />

      </div>

      <MeetupLocation />
    </Layout>
  );
};

export default TanzaniaSafaris;