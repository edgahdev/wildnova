import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import BookingCTA from '../../components/tours/BookingCTA';
import MeetupLocation from "../../components/MeetupLocation";
import './MombasaTours.css';
import PackageSlider from '../../components/home/PackageSlider';

const MombasaTours = () => {

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

  // ✅ PACKAGES
  const packages = [
    {
      name: "3 Days Maasai Mara by Flight",
      image: "/images/mombasa/maasai-mara-flight.jpg",
      path: "/mombasa/3-days-flight"
    },
    {
      name: "2 Days Tsavo East & Saltlick Lodge",
      image: "/images/mombasa/tsavo-saltlick.jpg",
      path: "/mombasa/2-days-tsavo"
    },
    {
      name: "4 Days Tsavo East, Amboseli & Saltlick",
      image: "/images/mombasa/amboseli-kilimanjaro.jpg",
      path: "/mombasa/4-days-amboseli"
    },
    {
      name: "5 Days Saltlick, Amboseli, Ziwani & Tsavo East",
      image: "/images/mombasa/ziwani-safari.jpg",
      path: "/mombasa/5-days-ziwani"
    },
    {
      name: "3 Days Tsavo West & Tsavo East",
      image: "/images/mombasa/tsavo-west.jpg",
      path: "/mombasa/3-days-tsavo"
    },
    {
      name: "4 Days Tsavo West, Amboseli & Tsavo East",
      image: "/images/mombasa/tsavo-amboseli.jpg",
      path: "/mombasa/4-days-full"
    }
  ];

  // ✅ GALLERY IMAGES (ADD YOUR OWN LATER)
  const gallery = [
    "/images/mombasa/gallery1.jpg",
    "/images/mombasa/gallery2.jpg",
    "/images/mombasa/gallery3.jpg",
    "/images/mombasa/gallery4.jpg",
    "/images/mombasa/gallery5.jpg",
    "/images/mombasa/gallery6.jpg"
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>

        {/* HERO (IMPORTANT: IMAGE MUST EXIST IN TourHeader COMPONENT) */}
        <TourHeader
          title="Mombasa Safari & Wildlife Tours"
          subtitle="Explore Kenya’s Coast and Iconic National Parks"
          image="/images/package-mombasa.jpg"
          duration="2 – 5 Days"
          maxGroup="8 people"
          bestTime="Year Round"
        />

        {/* PACKAGES */}
        <section className="packages-section">
          <div className="container">

            <h2 className="section-title reveal">Mombasa Safari Packages</h2>

            <div className="packages-grid">

              {packages.map((pkg, index) => (
                <div key={index} className="package-card reveal">

                  <div className="package-image">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      loading="lazy"
                    />
                  </div>

                  <h3 className="package-title">{pkg.name}</h3>

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

        {/* GALLERY SECTION (NEW FIX) */}
        <section className="gallery-section">
          <div className="container">
            <h2 className="section-title reveal">Safari Gallery</h2>

            <div className="gallery-grid">

              {gallery.map((img, i) => (
                <div key={i} className="gallery-item reveal">
                  <img src={img} alt={`gallery-${i}`} />
                </div>
              ))}

            </div>
          </div>
        </section>
        <PackageSlider />

        {/* CTA */}
        <BookingCTA price="$150" />

      </div>

      <MeetupLocation />
    </Layout>
  );
};

export default MombasaTours;