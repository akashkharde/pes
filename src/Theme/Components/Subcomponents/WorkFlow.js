import React, { useEffect, useState } from 'react';
import desktopFlow from "../../Assets/images/desktop.png";
import mobileFlow from "../../Assets/images/mobile.png";
import Aos from 'aos';




const WorkFlow = () => {

  useEffect(() => {
    Aos.init({ delay: 300 })
  }, []);


  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(screenWidth);
  }, [screenWidth]);

  return (
    <>
      {screenWidth > 786 ?
        <div className='container mb-4' title='PNAQ work Flow' data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600">
          <img src={desktopFlow} alt='PNAQ work Flow' />
        </div>
        :
        <div data-aos="zoom-out-right" className='mb-4' data-aos-easing="linear" data-aos-duration="600">
          <img src={mobileFlow} alt='PNAQ work Flow' />
        </div>
      }
    </>
  );
};

export default WorkFlow;
