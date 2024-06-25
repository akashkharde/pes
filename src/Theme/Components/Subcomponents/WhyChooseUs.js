import Aos from 'aos';
import img from '../../Assets/images/why-choose-us-profile.webp'
import { useEffect } from 'react';
export default function WhyChooseUs(){

    useEffect(() => {
        Aos.init({ delay: 300 })
      }, []);

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="why-choose-us-profile-img" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="600">
                            <img src={img} alt='PNAQ'/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12"  data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                        <p className='why-choose-us_p'>
                        When it comes to engineering solutions, PNAQ Engineering Solutions LLP stands out as a premier choice for several reasons. Firstly, confidentiality is our top priority; we ensure that all client information and project details are handled with the utmost discretion. Our commitment to optimum quality assurance means that we consistently deliver superior results, adhering to the highest industry standards. We provide onsite support, ensuring that our clients receive hands-on assistance and solutions tailored to their specific needs. Timely delivery of projects is a cornerstone of our service, as we understand the importance of meeting deadlines and maintaining project timelines. Our team comprises highly experienced engineers, each with a minimum of two years of expertise, ensuring that our clients benefit from professional and knowledgeable service. Additionally, we offer technical support for every type of project, addressing any challenges that may arise during the project lifecycle. For candidates placed by us, we provide continuous technical support, ensuring they can perform optimally and contribute effectively to their respective roles. With PNAQ Engineering Solutions LLP, you can expect a reliable, quality-focused partner dedicated to your success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}