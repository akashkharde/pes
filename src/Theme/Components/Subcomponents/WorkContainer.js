import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Bs from 'react-icons/bs'
import CF1 from "../../Assets/design/CF1.1.jpg";
import CF2 from "../../Assets/design/CF2.1.jpg";
import CF3 from "../../Assets/design/CF3.1.jpg"

import FD11 from "../../Assets/design/fixture/CHASIS01.jpg"
import FD12 from "../../Assets/design/fixture/DOORSASH ROBOTICCELL.jpg"
import FD13 from "../../Assets/design/fixture/SPOTWELDING-01.jpg"
import FD14 from "../../Assets/design/fixture/SPOTWELDING-02.jpg"
import FD15 from "../../Assets/design/fixture/SPOTWELDING-03.jpg"
import FD16 from "../../Assets/design/fixture/SPOTWELDING-04.jpg"
// import FD7 from "../../Assets/design/fixture/"





import PT1 from "../../Assets/design/PT1.jpg";
import PT2 from "../../Assets/design/PT2.jpg";
import PT3 from "../../Assets/design/PT3.jpg";
import PT4 from "../../Assets/design/PT4.jpg";
import PT5 from "../../Assets/design/PT5.jpg"
import PT6 from "../../Assets/design/PT6.jpg"
import PT7 from "../../Assets/design/PT7.jpg"
import PT8 from "../../Assets/design/PT8.jpg"

import FD1 from "../../Assets/design/forging/fd1.JPG";
import FD2 from "../../Assets/design/forging/fd2.JPG";
import FD3 from "../../Assets/design/forging/fd3.JPG";
import FD4 from "../../Assets/design/forging/fd4.JPG";
import FD5 from "../../Assets/design/forging/fd5.JPG"
import FD6 from "../../Assets/design/forging/fd6.JPG"
import FD7 from "../../Assets/design/forging/fd7.JPG"

import MD1 from "../../Assets/design/mold1.1.jpg";
import MD2 from "../../Assets/design/mold2.1.jpg";
import MD3 from "../../Assets/design/mold3.1.jpg";
import MD4 from "../../Assets/design/mold4.1.jpg";

import pac1 from "../../Assets/design/pac1.jpeg";
import pac2 from "../../Assets/design/pac2.jpeg";
import pac3 from "../../Assets/design/pac3.jpeg";
import pac4 from "../../Assets/design/packagin/TPI005.JPG";
import pac5 from "../../Assets/design/pac5.jpeg"
import pac6 from "../../Assets/design/pac6.jpeg"
import pac7 from "../../Assets/design/packagin/TPI001.JPG"
import pac8 from "../../Assets/design/packagin/TPI006.JPG"

import mhe1 from "../../Assets/design/mhe/mhe1.jpg";
import mhe2 from "../../Assets/design/mhe/mhe2.jpg";
import mhe3 from "../../Assets/design/mhe/mhe3.jpg";

import spm1 from "../../Assets/design/spm/spm1.jpg";
import spm2 from "../../Assets/design/spm/spm2.jpg";
import spm3 from "../../Assets/design/spm/spm3.jpg";
import spm4 from "../../Assets/design/spm/spm4.jpg";
import spm5 from "../../Assets/design/spm/spm5.jpg";
import spm6 from "../../Assets/design/spm/spm6.jpg";
import spm7 from "../../Assets/design/spm/spm7.png";

import twoDto3d1 from "../../Assets/design/2dTO3d/2dTO3d1.jpg";
import twoDto3d2 from "../../Assets/design/2dTO3d/2dTO3d2.webp";
import twoDto3d3 from "../../Assets/design/2dTO3d/2dTO3d3.jpg";
import twoDto3d4 from "../../Assets/design/2dTO3d/2dTO3d4.png";
import twoDto3d5 from "../../Assets/design/2dTO3d/2dTO3d5.png";

import cad1 from "../../Assets/design/cadDrafting/cad1.png";
import cad2 from "../../Assets/design/cadDrafting/cad2.jpg";
import cad3 from "../../Assets/design/cadDrafting/cad3.jpg";
import cad4 from "../../Assets/design/cadDrafting/cad4.png";
import Title from '../Common/Title';


export default function WorkContainer(props) {
    const location = useLocation();
    const { no } = location.state || {};
    const [showWork, setShowWork] = useState(no ? no : 1);
    const showTabRef = useRef(null);
    const showWorkRef = useRef(null);


    useEffect(() => {
        if (showTabRef.current && showWork !== null) {
            const activeButton = showTabRef.current.querySelector(`[data-index="${showWork}"]`);
            if (activeButton) {
                const containerWidth = showTabRef.current.clientWidth;
                const activeButtonWidth = activeButton.offsetWidth;
                const activeButtonLeft = activeButton.offsetLeft;
                const scrollLeft = activeButtonLeft - (containerWidth - activeButtonWidth) / 2;
                showTabRef.current.scrollLeft = scrollLeft;
            }
        }
    }, [showWork]);

    useEffect(() => {
        if (no && showWorkRef.current) {
            const timer = setTimeout(() => {
                console.log('Scrolling to ref:', showWorkRef.current);
                showWorkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.scrollBy(0, -30);
            }, 200); 
            return () => clearTimeout(timer);
        }
    }, [no]);


    const handleClick = (index) => {
        setShowWork(index);
    };
    return (
        <>
            <div ref={showWorkRef} ></div>
            <section title="Explore Our Portfolio">
                <Title textone={"PNAQ Work"} texttwo={""} />
                <div className='work-inner-page-container'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="zoom-out-down" data-aos-easing="linear" data-aos-duration="600">
                                <div className="our-work-header text-center">
                                    Explore Our Portfolio
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="zoom-out-down" data-aos-easing="linear" data-aos-duration="600">
                                <div className="our-work-header text-center">
                                    See What We've Accomplished.
                                </div>
                            </div>
                        </div>

                        <div className="work-button-container" >
                            <div className="work-button nav-pills align-item-center d-flex justify-content-center" data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="600"
                                id="pills-tab" role="tablist" >
                                <div className='buttons_mobileview' ref={showTabRef}>
                                    <button data-index={1} className={`workBtn ${showWork === 1 ? "active" : ''}`} id="pills-0-tab" data-bs-toggle="pill" data-bs-target="#pills-0" type="button" role="tab" aria-controls="pills-0" aria-selected="true" onClick={() => handleClick(1)}> FIXTURE DESIGN</button>
                                    <button data-index={2} className={`workBtn ${showWork === 2 ? "active" : ''}`} id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="false" onClick={() => handleClick(2)}>   PRESS TOOL DESIGN</button>
                                    <button data-index={3} className={`workBtn ${showWork === 3 ? "active" : ''}`} id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="false" onClick={() => handleClick(3)}>   FORGING TOOL DESIGN</button>
                                    <button data-index={5} className={`workBtn ${showWork === 5 ? "active" : ''}`} id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-4" aria-selected="false" onClick={() => handleClick(5)}>PACKAGING DESIGN</button>
                                    <button data-index={6} className={`workBtn ${showWork === 6 ? "active" : ''}`} id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-4" aria-selected="false" onClick={() => handleClick(6)}>MATERIAL HANDELING EQUIBMENT</button>
                                    <button data-index={7} className={`workBtn ${showWork === 7 ? "active" : ''}`} id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-4" aria-selected="false" onClick={() => handleClick(7)}>SPM</button>
                                    <button data-index={8} className={`workBtn ${showWork === 8 ? "active" : ''}`} id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-4" aria-selected="false" onClick={() => handleClick(8)}>2D TO 3D</button>
                                    <button data-index={9} className={`workBtn ${showWork === 9 ? "active" : ''}`} id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-4" aria-selected="false" onClick={() => handleClick(9)}>CAD DRAFTING AND DESIGN</button>
                                </div>
                            </div>
                        </div>

                        <div className="projects-section tab-content" id="pills-tabContent" >
                            {showWork === 1 &&
                                <div className="projects-section">
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD11} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD12} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD13} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD14} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD15} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD16} />
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            }
                            {showWork === 2 &&
                                <div className="projects-section">
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={PT1} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={PT2} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={PT3} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={PT4} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={PT5} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={PT6} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={PT7} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={PT8} />
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            }
                            {showWork === 3 &&
                                <div className="projects-section">
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD1} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD2} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD3} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD4} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD5} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD6} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={FD7} />
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            }
                            {showWork === 4 &&
                                <div className="projects-section">
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={MD1} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={MD2} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={MD3} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={MD4} />
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            }
                            {showWork === 5 &&
                                <div className="projects-section">
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={pac1} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={pac2} />
                                        </div>
                                    </div>
                                  
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={pac4} />
                                        </div>
                                    </div>
                                  
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={pac6} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={pac7} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={pac8} />
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            }
                            {showWork === 6 &&
                                <div className="projects-section">
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={mhe1} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={mhe2} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={mhe3} />
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            }
                            {showWork === 7 &&
                                <div className="projects-section">
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={spm1} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={spm2} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={spm3} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={spm4} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={spm5} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={spm6} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={spm7} />
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            }
                            {showWork === 8 &&
                                <div className="projects-section">
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={twoDto3d1} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={twoDto3d2} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={twoDto3d3} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={twoDto3d4} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={twoDto3d5} />
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            }
                            {showWork === 9 &&
                                <div className="projects-section">
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={cad1} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={cad2} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={cad3} />
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="project" >
                                            <img className="workimage" alt="WorkImg" src={cad4} />
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            }
                            <div className="clear"></div>
                        </div>
                        {
                            props.page === "home" &&
                            <div className="view-our-work-button">
                                <Link href="/work">View our work <Bs.BsArrowRight /></Link>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}