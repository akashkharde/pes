import React, { useEffect, useState } from 'react';
import whyUs from '../Assets/images/why-us.jpg';
import whyChooseUs from '../Assets/images/why-choose-us.webp';
import increase from '../Assets/images/increase.webp';
import CountUpComp from './Subcomponents/CountUp';
import WhyChooseUs from './Subcomponents/WhyChooseUs';
import Title from './Common/Title';
import Aos from 'aos';

function WhyUs() {

    useEffect(() => {
        Aos.init({ delay: 300 })
      }, []);
    const [shouldScrollToTop, setShouldScrollToTop] = useState(true);
  
    useEffect(() => {
        if (shouldScrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setShouldScrollToTop(false);
        }
    }, [shouldScrollToTop]);


    return (
        <div className='' title='Why Choose PNAQ Engineering Solutions LLP' style={{overflow:"hidden"}}>
          <div>
              <img src={whyUs} alt='PNAQ why us' className='' />
          </div>
            <CountUpComp />
            <hr />
            <div className='row displayCenter m-0'>
                <div className='col-lg-6 col-md-6 col-sm-12 p-4 d-flex' data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="600">
                    <img src={whyChooseUs} alt='success graph' className='imgabout whyUSimg_' />
                </div>
                <div className='col-lg-6  col-md-6 col-sm-12 displayCenter flex-column' data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                    <div className='d-flex align-item-center justify-content-start w-100 mb-3 '>
                        <div className='mx-3 displayCenter'> <img src={increase}  alt='sucess  graph'  className='bg-blue imgIncrease displayCenter' /></div>
                        <div className=''>
                            <div className='subHeading'>Confidentiality:</div>
                            <div className='text'>Confidentiality is our 1st priority.</div>
                        </div>
                    </div>
                    <div className='d-flex align-item-center justify-content-start w-100 mb-3'>
                        <div className='mx-3 displayCenter'> <img src={increase} alt='sucess  graph' className='bg-blue imgIncrease displayCenter' /></div>
                        <div className=''>
                            <div className='subHeading'>Quality Assurance:</div>
                            <div className='text'>Optimum quality assurance.</div>
                        </div>
                    </div>
                    <div className='d-flex align-item-center justify-content-start w-100 mb-3'>
                        <div className='mx-3 displayCenter'> <img src={increase} alt='sucess  graph' className='bg-blue imgIncrease displayCenter' /></div>
                        <div className=''>
                            <div className='subHeading'>Onsite Support:</div>
                            <div className='text'>Provide onsite support.</div>
                        </div>
                    </div>
                    <div className='d-flex align-item-center justify-content-start w-100 mb-3'>
                        <div className='mx-3 displayCenter'> <img src={increase} alt='sucess  graph' className='bg-blue imgIncrease displayCenter' /></div>
                        <div className=''>
                            <div className='subHeading'>Experienced Engineers:</div>
                            <div className='text'>Engineers with minimum 2 years plus of experience.</div>
                        </div>
                    </div>
                    <div className='d-flex align-item-center justify-content-start w-100 mb-3'>
                        <div className='mx-3 displayCenter'> <img src={increase} alt='sucess  graph' className='bg-blue imgIncrease displayCenter' /></div>
                        <div className=''>
                            <div className='subHeading'>Technical Support:</div>
                            <div className='text'>Technical support for every type of project.</div>
                        </div>
                    </div>
                </div>
        
            </div>
            <section className="section-secondary-bg mb-0" title="PNAQ Why Choose Us">
        <Title textone={"PNAQ Engineering Solutions LLP"} />
        <WhyChooseUs />
      </section>
        </div>
    )
}

export default WhyUs