import React, { useEffect, useState } from 'react';
import img from '../Assets/images/life-at-pixie-header.webp';
import LifeAtPixieHeader from './Subcomponents/LifeAtPSEHeader';
import OurSoftwares from './Subcomponents/OurSoftwares';
import Title from './Common/Title';
import AOS from 'aos';
import MetaTags from './Common/MetaTags';

function LifeAtPSE() {
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
        <div className="pinnac">
            <MetaTags
                title="Life at PNAQ - Empowering Innovation and Collaboration"
                description="Discover the vibrant and collaborative work environment at PNAQ, where skilled professionals from diverse backgrounds come together to deliver high-quality services. Explore our commitment to work-life balance, continuous learning through training and industry events, and supportive leadership"
                keywords="PNAQ, life at PNAQ, work-life balance, professional growth, collaborative environment, skilled professionals, industry events, training opportunities, supportive leadership, employee benefits, competitive compensation, flexible work arrangements, engineering software, CREO, Autodesk Inventor, AutoCAD Mechanical, CATIA, mechanical design software"
                route="/life-at-pnaq"
            />
            <img src={img} alt='life in PNAQ' />
            <section >
                <LifeAtPixieHeader />
            </section>
       
            <section className="section-secondary-bg mb-0" title="PNAQ Experience">
                <Title textone={"PNAQ Softwares"} />
                <OurSoftwares />
            </section>
        </div>
    )
}

export default LifeAtPSE