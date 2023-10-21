import React, { useEffect, useRef, useState } from 'react'
import Header from './Common/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeSlider from './Subcomponents/HomeSlider';
import HomeAbout from './Subcomponents/HomeAbout';
import Title from "./Common/Title";
import ServicesList from './Subcomponents/ServicesList';
import HomeWork from './Subcomponents/HomeWork';
import { useLocation } from 'react-router-dom';




function Home() {
const {location} = useLocation();
  useEffect(() => {
    AOS.init({ delay: 200 })
  }, [])
  const [shouldScrollToTop, setShouldScrollToTop] = useState(true);
  useEffect(() => {
    if (shouldScrollToTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShouldScrollToTop(false);
    }
}, [shouldScrollToTop]);
  return (
    <div>
      <section>
      <HomeSlider />
      </section>
      <section title="PES About">
        <Title textone={"About Us"} />
        <HomeAbout />
      </section>

      <section className="section-secondary-bg" title="PSE Our Services">
        <Title textone={"Our Services"} />
        <ServicesList />
      </section>

      <section title="PES Our Work">
        <Title textone={"Our Work"} />
        <HomeWork totalProject={3} />
      </section>

    </div>
  )
}

export default Home