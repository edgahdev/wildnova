import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import BookingCTA from '../../components/tours/BookingCTA';
import MeetupLocation from "../../components/MeetupLocation";
import { useNavigate } from "react-router-dom";
import './DayTrips.css';
import PackageSlider from '../../components/home/PackageSlider';
const DayTrips = () => {

  const navigate = useNavigate();

  const packages = [
    { name: "Tsavo East Safari", image: "/images/day-trips/tsavo-east.jpg", path: "/tsavo-east" },
    { name: "Shimba Hills Tour", image: "/images/day-trips/shimba-hills.jpg", path: "/shimba-hills" },
    { name: "Full Day Mombasa Tour", image: "/images/day-trips/mombasa-full.jpg", path: "/mombasa-full" },
    { name: "Half Day Mombasa Tour", image: "/images/day-trips/mombasa-half.jpg", path: "/mombasa-half" },
    { name: "Funzi Island Tour", image: "/images/day-trips/funzi-island.jpg", path: "/funzi-island" },
    { name: "Wasini Dolphin Tour", image: "/images/day-trips/wasini-dolphin.jpg", path: "/wasini-dolphin" },
    { name: "Tuk Tuk Village", image: "/images/day-trips/tuktuk-village.jpg", path: "/tuktuk-village" },
    { name: "Bora Bora Wildlife Park", image: "/images/day-trips/bora-bora-park.jpg", path: "/bora-bora" }
  ];

  return (
    <Layout>

      <div className="daytrips-page">

        <TourHeader
          title="Coastal Day Trips"
          subtitle="Explore the best experiences along the Kenyan Coast"
          image="/images/package-daytrips.jpg"
          duration="Half Day - 2 Days"
          price="$60 - $350"
          maxGroup="6 - 12 People"
          bestTime="Year Round"
        />

        <section className="packages-section">
          <div className="container">

            <h2 className="section-title">Choose Your Experience</h2>

            <div className="packages-grid">
              {packages.map((pkg, index) => (
                <div key={index} className="package-card">

                  <div className="image-wrapper">
                    <img src={pkg.image} alt={pkg.name} />
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
        <PackageSlider />

        <BookingCTA price="$60" />

      </div>

      <MeetupLocation />

    </Layout>
  );
};

export default DayTrips;