import React, { useEffect, useState } from 'react';
import AboutSectionOne from './Subcomponents/AboutSectionOne';
import OurVision from './Subcomponents/OurVision';
import Title from '../Components/Common/Title';
import img from '../Assets/images/about-header.webp'
import AOS from 'aos';
import MetaTags from './Common/MetaTags';


function About() {
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
        title="Mechanical Design Solutions | Pinnacc Engineering Solutions"
        description="Discover our comprehensive mechanical design solutions at Pinnacc Engineering Solutions. From fixture and forging tool design to product and packaging design, we innovate to optimize manufacturing processes"
        keywords="mechanical design solutions, fixture design, forging tool design, press tool design, product design, structural design, packaging design, mechanical engineering"
        route="/about"
      />
      <div className="about_img_main">
        <img src={img} alt='about Img' />
      </div>
      <section title="PNAQ About Us">
        <Title textone={"About Us"} />
        <AboutSectionOne />
      </section>
      <section className="section-secondary-bg_" title="PNAQ Our Vision & Value">
        <Title textone={"Our Vision & Value"} />
        <OurVision />
      </section>
    </div>
  )
}

export default About