import logo from '../../Assets/images/finalLogoBack.png'
// import img from "../../Assets/design/CF1.1.jpg"
import imgOne from "../../Assets/design/SWF2.jpg"
import imgTwo from "../../Assets/design/RFC2.jpg"

import hm1 from "../../Assets/design/2dTO3d/2dTO3d1.jpg"
import hm2 from "../../Assets/design/pac7.jpeg"
import hm3 from "../../Assets/design/fixture/SPOTWELDING-01.jpg"
import hm4 from "../../Assets/design/forging/fd1.JPG"
import hm5 from "../../Assets/design/mhe/mhe2.jpg"
import hm6 from "../../Assets/design/spm/spm4.jpg"




import { useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function HomeSlider() {

    const [shouldScrollToTop, setShouldScrollToTop] = useState(true);

    useEffect(() => {
        if (shouldScrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setShouldScrollToTop(false);
        }
    }, [shouldScrollToTop]);
    return (
        <>
            <div data-aos="zoom-out-right" className="" >
                <Carousel styles={styles} infiniteLoop={true} stopOnHover = {false} autoPlay={true} preventMovementUntilSwipeScrollTolerance={false} swipeScrollTolerance={10} >
                    <div>
                        <img src={imgTwo} className="homeSlider" alt='Img' />
                        <p className="legend">Legend 2</p>
                    </div>

                    <div>
                        <img src={imgOne} className="homeSlider" alt='Img' />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={hm1} className="homeSlider" alt='Img' />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={hm2} className="homeSlider" alt='Img' />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={hm3} className="homeSlider" alt='Img' />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={hm4} className="homeSlider" alt='Img' />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={hm5} className="homeSlider" alt='Img' />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={hm6} className="homeSlider" alt='Img' />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
            <div className="home_img_round"  >
                <div className="home_img_round_main" data-aos="zoom-out-right" >
                    <div className="home__logo_text">
                        <img className="home_img_" src={logo} alt="pinnacc" />
                        <span className="home_img_round_text">Elevate Your Design With PNAQ Engineering Solutions LLP</span>
                    </div>
                </div>
            </div>

        </>
    )
}