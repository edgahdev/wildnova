import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import BookingCTA from '../../components/tours/BookingCTA';
import MeetupLocation from "../../components/MeetupLocation";
import './KenyaTanzaniaSafaris.css';
import PackageSlider from '../../components/home/PackageSlider';

const KenyaTanzaniaSafaris = () => {
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
      name: "9 Days Naivasha, Maasai Mara, Serengeti & Ngorongoro",
      image: "/images/kenya-tanzania/9-days-naivasha-mara-serengeti.jpg",
      path: "/kenya-tanzania/9-days",
      search: "maasai mara serengeti ngorongoro safari landscapes"
    },
    {
      name: "12 Days Amboseli, Naivasha, Nakuru, Maasai Mara, Serengeti (Drop Off Arusha)",
      image: "/images/kenya-tanzania/12-days-amboseli-serengeti.jpg",
      path: "/kenya-tanzania/12-days",
      search: "amboseli kilimanjaro elephants serengeti safari africa"
    },
    {
      name: "13 Days Samburu, Naivasha, Nakuru, Maasai Mara, Serengeti, Tarangire & Amboseli",
      image: "/images/kenya-tanzania/13-days-grand-safari.jpg",
      path: "/kenya-tanzania/13-days",
      search: "samburu rare wildlife tarangire elephants serengeti safari"
    }
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>

        {/* HERO */}
        <TourHeader
          title="Kenya - Tanzania Safaris"
          subtitle="Cross-border East Africa Wildlife Adventures"
          image="/images/package-kenya-tanzania.jpg"
          duration="9 – 13 Days"
          maxGroup="6 people"
          bestTime="Year Round"
        />

        {/* PACKAGES */}
        <section className="packages-section">
          <div className="container">

            <h2 className="section-title reveal">
              Kenya & Tanzania Safari Packages
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

                  {/* NAME */}
                  <h3 className="package-title">
                    {pkg.name}
                  </h3>

                  {/* BUTTON */}
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

        <BookingCTA price="$3200" />

      </div>
    

      <MeetupLocation />
    </Layout>
  );
};

export default KenyaTanzaniaSafaris;