import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { useEffect } from 'react';
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TourPackage from './pages/TourPackage';
import DayTrips from './pages/tour-packages/DayTrips';
import NairobiTours from './pages/tour-packages/NairobiTours';
import MombasaTours from './pages/tour-packages/MombasaTours';
import KenyaTanzaniaSafaris from './pages/tour-packages/KenyaTanzaniaSafaris';
import TanzaniaSafaris from './pages/tour-packages/TanzaniaSafaris';
import './App.css';
import WhatsAppButton from './components/WhatsAppButton';
import LanguageSelector from './components/LanguageSelector';
// pages 
import TsavoEast from './pages/tour-packages/TsavoEast';
import ShimbaHills from './pages/tour-packages/ShimbaHills';
import MombasaFull from './pages/tour-packages/MombasaFull';
import MombasaHalf from './pages/tour-packages/MombasaHalf';
import FunziIsland from './pages/tour-packages/FunziIsland';
import WasiniDolphin from './pages/tour-packages/WasiniDolphin';
import TukTukVillage from './pages/tour-packages/TukTukVillage';
import BoraBora from './pages/tour-packages/BoraBora';
// NAIROBI TOURS
import NineDays from './pages/tour-packages/nairobi/NineDays';
import SevenDays from './pages/tour-packages/nairobi/SevenDays';
import SixDays from './pages/tour-packages/nairobi/SixDays';
import ThreeDays from './pages/tour-packages/nairobi/ThreeDays';
import FiveDays from './pages/tour-packages/nairobi/FiveDays';
import TenDays from './pages/tour-packages/nairobi/TenDays';
//MOMBASA SAFARIS
import MombasaThreeDaysFlight from "./pages/tour-packages/mombasa/MombasaThreeDaysFlight";
import MombasaTwoDaysTsavo from "./pages/tour-packages/mombasa/MombasaTwoDaysTsavo";
import MombasaFourDaysTsavoAmboseli from "./pages/tour-packages/mombasa/MombasaFourDaysTsavoAmboseli";
import MombasaFiveDaysComplete from "./pages/tour-packages/mombasa/MombasaFiveDaysComplete";
import MombasaThreeDaysTsavo from "./pages/tour-packages/mombasa/MombasaThreeDaysTsavo";
import MombasaFourDaysFull from "./pages/tour-packages/mombasa/MombasaFourDaysFull";

import NineDaysKenyaTanzania from './pages/tour-packages/kenya-tanzania/9DaysKenyaTanzania';
import TwelveDaysKenyaTanzania from './pages/tour-packages/kenya-tanzania/12DaysKenyaTanzania';
import ThirteenDaysKenyaTanzania from './pages/tour-packages/kenya-tanzania/13DaysKenyaTanzania';

import TanzaniaThreeDays from "./pages/tour-packages/tanzania/TanzaniaThreeDays";
import TanzaniaFourDays from "./pages/tour-packages/tanzania/TanzaniaFourDays";
import TanzaniaFiveDays from "./pages/tour-packages/tanzania/TanzaniaFiveDays";
function App() {
  // Smooth scroll initialization
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const hash = target.hash;
      if (hash && hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Router>
      {/* Floating Google Translate Dropdown */}
      <LanguageSelector />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tour-packages" element={<TourPackage />} />
        <Route path="/tour-packages/day-trips" element={<DayTrips />} />
        <Route path="/tour-packages/nairobi-tours" element={<NairobiTours />} />
        <Route path="/tour-packages/mombasa-tours" element={<MombasaTours />} />
        <Route path="/tour-packages/kenya-tanzania-safaris" element={<KenyaTanzaniaSafaris />} />
        <Route path="/tour-packages/tanzania-safaris" element={<TanzaniaSafaris />} />
        <Route path="/tsavo-east" element={<TsavoEast />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

<Route path="/shimba-hills" element={<ShimbaHills />} />
<Route path="/mombasa-full" element={<MombasaFull />} />
<Route path="/mombasa-half" element={<MombasaHalf />} />
<Route path="/funzi-island" element={<FunziIsland />} />
<Route path="/wasini-dolphin" element={<WasiniDolphin />} />
<Route path="/tuktuk-village" element={<TukTukVillage />} />
<Route path="/bora-bora" element={<BoraBora />} />
    <Route path="/tour-packages/nairobi/9-days" element={<NineDays />} />
<Route path="/tour-packages/nairobi/7-days" element={<SevenDays />} />
<Route path="/tour-packages/nairobi/6-days" element={<SixDays />} />
<Route path="/tour-packages/nairobi/3-days" element={<ThreeDays />} />
<Route path="/tour-packages/nairobi/5-days" element={<FiveDays />} />
<Route path="/tour-packages/nairobi/10-days" element={<TenDays />} />

<Route path="/mombasa/3-days-flight" element={<MombasaThreeDaysFlight />} />
<Route path="/mombasa/2-days-tsavo" element={<MombasaTwoDaysTsavo />} />
<Route path="/mombasa/4-days-amboseli" element={<MombasaFourDaysTsavoAmboseli />} />
<Route path="/mombasa/5-days-ziwani" element={<MombasaFiveDaysComplete />} />
<Route path="/mombasa/3-days-tsavo" element={<MombasaThreeDaysTsavo />} />
<Route path="/mombasa/4-days-full" element={<MombasaFourDaysFull />} />

<Route path="/kenya-tanzania/9-days" element={<NineDaysKenyaTanzania />} />
<Route path="/kenya-tanzania/12-days" element={<TwelveDaysKenyaTanzania />} />
<Route path="/kenya-tanzania/13-days" element={<ThirteenDaysKenyaTanzania />} />

<Route path="/tanzania/3-days-ngorongoro" element={<TanzaniaThreeDays />} />
<Route path="/tanzania/4-days-manyara" element={<TanzaniaFourDays />} />
<Route path="/tanzania/5-days-serengeti" element={<TanzaniaFiveDays />} />
      </Routes>

      {/* WhatsApp Floating Button visible on all pages */}
      <WhatsAppButton
        agentNumber="+254792157566"
        message="Hello Admin, I would like to book a tour!"
      />
    </Router>
  );
}

export default App;