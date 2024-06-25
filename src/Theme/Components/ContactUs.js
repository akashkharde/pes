import React, { useEffect, useState } from 'react'
import Title from '../Components/Common/Title'
import ContactPage from './Subcomponents/ContactPage';
import img from '../Assets/images/about-header.webp';
import AOS from 'aos';


function ContactUs() {

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
    <div className="pinnac" >
          <div className="about_img_main">
          <img src={img} alt='contact us' />
          </div>
          <section title="PNAQ Contact Us">
            <Title textone={"Lest's Connect Togethor"} />
            <ContactPage/>
          </section>
      </div>
  )
}

export default ContactUs