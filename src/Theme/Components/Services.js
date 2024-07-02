import React, { useEffect,useState } from 'react'
import Title from '../Components/Common/Title';
import WhatWeDo from './Subcomponents/WhatWeDo';
import ServicesList from './Subcomponents/ServicesList';
import img from '../Assets/images/services-header.png';
import AOS from 'aos';
import MetaTags from './Common/MetaTags';


function Services() {
  useEffect(() => {
    AOS.init({ delay: 200 })
  }, []);
  const [shouldScrollToTop, setShouldScrollToTop] = useState(true);

  useEffect(() => {
      if (shouldScrollToTop) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setShouldScrollToTop(false);
      }
  }, [shouldScrollToTop]);
  return (
    <div className="pinnac" >
        <MetaTags
        title="PNAQ Engineering Solutions - Services"
        description="Explore Pinnacc Engineering Solutions' comprehensive range of services including Mechanical Design, Product Optimization, Collaborative Approach, Fixture Design, Press Tool Design, Forging Tool Design, Packaging Design, and Product Design"
        keywords="Mechanical Design, Product Optimization, Collaborative Approach, Fixture Design, Press Tool Design, Forging Tool Design, Packaging Design, Product Design, Precision Fixtures, Forging Designs, Press Tools, Structural Designs, Eco-friendly Packaging, Industrial Design, Mechanical Engineering, CAD Design, CATIA, Inventor Software"
        route="/service"
      />
      <img src={img} alt='services'  />
      <section title="PNAQ  Expertise">
        <Title textone={"Our Expertise"} />
        <WhatWeDo />
      </section>
      <section className="section-secondary-bg" title="PNAQ Services">
        <Title textone={"PNAQ Services"}/>
        <ServicesList />
      </section>
    </div>
  )
}

export default Services