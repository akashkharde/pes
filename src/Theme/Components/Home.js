import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeSlider from './Subcomponents/HomeSlider';
import CountUpComp from './Subcomponents/CountUp';
import HomeAbout from './Subcomponents/HomeAbout';
import Title from './Common/Title';
import ServicesList from './Subcomponents/ServicesList';
import HomeWork from './Subcomponents/HomeWork';
import WorkFlow from './Subcomponents/WorkFlow';
import MetaTags from './Common/MetaTags';

function Home() {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  const [shouldScrollToTop, setShouldScrollToTop] = useState(true);

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setShouldScrollToTop(false);
    }
  }, [shouldScrollToTop]);

  return (
    <div style={{ width: '100%' }}>
        <MetaTags
        title="Home Page - PNAQ Engineering Solutions LLP"
        description="Welcome to PNAQ Engineering Solutions LLP. We offer a wide range of designing services, including fixture design, press tool design, forging design, structural design, mold design, product design, and packaging design."
        keywords="PNAQ, Pinnaq Engineering Solutions, fixture design, press tool design, forging design, structural design, mold design, product design, packaging design"
        route="/"
      />
      <section>
        <HomeSlider />
      </section>
      <section title="PNAQ About" className="section-secondary-bg">
        <Title textone={"About Us"} />
        <HomeAbout />
      </section>
      <section title="PNAQ Work Flow">
        <Title textone={"Work Flow"} />
        <WorkFlow />
      </section>
      <section className="section-secondary-bg" title="PNAQ Services">
        <Title textone={"Our Services"} />
        <ServicesList />
      </section>
      <section title="PNAQ Our Work">
        <Title textone={"Our Work"} />
        <HomeWork totalProject={3} />
      </section>
      <section title="PNAQ Why Us" className="section-secondary-bg">
        <CountUpComp />
      </section>
    </div>
  );
}

export default Home;
