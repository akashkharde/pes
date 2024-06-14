import React, { useEffect, useState } from 'react';
import WorkContainer from './Subcomponents/WorkContainer';
import img from '../Assets/images/work-header.png'
import AOS from 'aos';


function Work() {

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
        <img src={img} alt='work '/>
          <WorkContainer />
      </div>
  )
}

export default Work