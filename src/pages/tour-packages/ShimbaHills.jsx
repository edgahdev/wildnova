import Layout from '../../components/layouts/Layout';
import BookingCTA from '../../components/tours/BookingCTA';
import './ShimbaHills.css';

export default function ShimbaHills() {
  return (
    <Layout>

      {/* HERO */}
      <div className="hero">
        <h1>Shimba Hills National Reserve</h1>
      </div>

      <div className="content container">

        {/* DESCRIPTION */}
        <div className="section">
          <h2>Description</h2>
          <p>
            Escape the coastal heat and discover the lush green paradise of Shimba Hills National Reserve,
            one of Kenya’s most beautiful and underrated safari destinations. Located just a short drive
            from Mombasa, this reserve is a perfect blend of tropical rainforest, rolling hills, and open
            grasslands.
          </p>

          <p>
            Shimba Hills is home to a rich variety of wildlife including elephants, buffaloes, giraffes,
            monkeys, and the rare and endangered sable antelope, found in very few places in Kenya.
            The cool breeze and scenic landscapes make it a refreshing safari experience.
          </p>

          <p>
            This destination is ideal for travelers looking for a peaceful nature escape combined with
            light adventure and breathtaking views of Kenya’s coastal region.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="section">
          <h2>Experience</h2>
          <p>
            Your journey begins with an early morning pickup from your hotel, followed by a scenic drive
            through coastal countryside towards Shimba Hills. On arrival, you will begin a guided game drive
            through the forested reserve.
          </p>

          <p>
            One of the highlights of this tour is a guided nature walk to the famous Sheldrick Falls,
            where water cascades through the forest creating a refreshing and peaceful atmosphere.
          </p>

          <p>
            Along the way, your guide will help you spot wildlife, explain the ecosystem, and take you to
            viewpoints overlooking the coastline of the Indian Ocean.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="section">
          <h2>Tour Highlights</h2>
          <ul>
            <li>Game drive in Shimba Hills National Reserve</li>
            <li>Visit to Sheldrick Waterfalls</li>
            <li>Opportunity to see rare sable antelope</li>
            <li>Scenic views of the Indian Ocean coastline</li>
            <li>Forest and nature walking experience</li>
          </ul>
        </div>

        {/* ITINERARY */}
        <div className="section">
          <h2>Day 1: Shimba Hills Tour</h2>
          <ul>
            <li>Morning hotel pickup</li>
            <li>Drive to Shimba Hills Reserve</li>
            <li>Morning game drive</li>
            <li>Guided walk to Sheldrick Falls</li>
            <li>Lunch at lodge or picnic site</li>
            <li>Afternoon scenic drive & viewpoints</li>
            <li>Return to hotel</li>
          </ul>

          <p>
            The experience begins with an early morning pickup from your hotel followed by a calm and scenic
            drive away from the coastal heat into the cooler, greener highlands of Shimba Hills.
          </p>

          <p>
            As you enter the reserve, the landscape gradually transforms into lush forest and rolling hills.
            Your first game drive begins here, offering a peaceful introduction to the park’s rich biodiversity
            and natural beauty.
          </p>

          <p>
            During the drive, you may encounter elephants, giraffes, buffaloes, and playful monkeys moving
            freely through the forest. Your guide explains the ecosystem and helps you spot wildlife hidden
            within the dense greenery.
          </p>

          <p>
            A major highlight of the morning is the guided walk to Sheldrick Falls. You descend into a forest
            trail where the sound of rushing water grows stronger until you reach the waterfall, a hidden
            natural gem surrounded by lush vegetation.
          </p>

          <p>
            After the waterfall experience, you return for a relaxing lunch at a lodge or designated picnic
            site, where you can enjoy your meal while surrounded by forest scenery and cool breezes.
          </p>

          <p>
            In the afternoon, the safari continues with a slow scenic drive through different viewpoints,
            offering breathtaking views over the coastal plains and even glimpses of the Indian Ocean on
            clear days.
          </p>

          <p>
            The tour concludes with a relaxed exit from the reserve and a comfortable drive back to your hotel,
            leaving you with a refreshing memory of Kenya’s green coastal wilderness.
          </p>
        </div>

        {/* INCLUDED */}
        <div className="section">
          <h2>Included</h2>
          <ul>
            <li>Transport in a 4x4 safari vehicle</li>
            <li>Professional English-speaking guide</li>
            <li>Park entrance fees</li>
            <li>Guided waterfall walk</li>
            <li>Drinking water</li>
            <li>Hotel pickup and drop-off</li>
            <li>Government taxes and levies</li>
          </ul>
        </div>

        {/* EXCLUDED */}
        <div className="section">
          <h2>Excluded</h2>
          <ul>
            <li>Visa fees</li>
            <li>Personal expenses</li>
            <li>Tips and gratuities</li>
            <li>Travel insurance</li>
            <li>Meals not specified</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="section contact-box">
          <h2>Get In Touch</h2>
          <p>
            Ready to explore the green heart of Kenya’s coast? Contact us to book your Shimba Hills safari
            or customize your nature experience today.
          </p>
        </div>

      </div>

      <BookingCTA price="$100" />

    </Layout>
  );
}