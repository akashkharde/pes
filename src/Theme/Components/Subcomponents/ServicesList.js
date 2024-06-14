
import * as TFi from "react-icons/tfi";
import * as bs from "react-icons/bs"
import * as gi from "react-icons/gi"
import * as fi from "react-icons/fi";
import * as tb from "react-icons/tb";
import { useEffect } from "react";
import AOS from 'aos'

export default function ServicesList() {
    useEffect(() => {
        AOS.init({ delay: 300 })
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="service   col-sm-12 col-md-6 col-lg-4 service__one" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                        <div className="service-box"  >
                            <div className="service-img">
                                <bs.BsFillGearFill />
                            </div>
                            <div className="service-title">
                                FIXTURE DESIGN
                            </div>
                            <div className="service-content">
                                <li>
                                    Welding fixtures.
                                    <ul className="nextedUL">
                                        <li>BIW fixture design.</li>
                                        <li>Manual welding fixtures.</li>
                                        <li>Heavy fabrication welding fixtures.</li>
                                    </ul>
                                </li>
                                <li> Machining fixtures. </li>
                                <li> Assembly checking fixtures.</li>
                                <li> Panel checkers.</li>
                                <li> Plastic product checking gauges.</li>

                            </div>
                        </div>
                    </div>

                    <div className="service  col-sm-12 col-md-6 col-lg-4 service__two" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                        <div className="service-box">
                            <div className="service-img">
                                <gi.GiGears />
                            </div>
                            <div className="service-title">
                                PRESS TOOL DESIGN
                            </div>
                                <div className="service-content">
                                    <li>Blanking tool. </li>
                                    <li>Parting off tool. </li>
                                    <li> Forming tool</li>
                                    <li> Piercing tool.</li>
                                    <li> Trimming tool.</li>
                                    <li>Drawing tool. </li>
                                    <li>Cut off tool. </li>
                                    <li> Shaving tool.</li>
                                    <li> Progressive tool.</li>
                                </div>
                        </div>
                    </div>

                    <div className="service col-sm-12 col-md-6 col-lg-4 service__four" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} >
                        <div className="service-box">
                            <div className="service-img">
                                <fi.FiPackage />
                            </div>
                            <div className="service-title">
                                FORGING
                            </div>
                            <div className="service-content">
                                <li>Forging tool for press.</li>
                                <li>Forging tool for upsetter.</li>
                                <li>Forging tool for hammer.</li>
                                <li>Forging tool for screw press.</li>

                            </div>
                        </div>
                    </div>

                    
                    <div className="service  col-sm-12 col-md-6 col-lg-4 service__five" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} >
                        <div className="service-box">
                            <div className="service-img">
                                <tb.TbPackages />
                            </div>
                            <div className="service-title">
                                PACKAGING DESIGN
                            </div>
                            <div className="service-content">
                                <li>Corrugated boxes. </li>
                                <li>Wooden crates. </li>
                                <li> Customized packaging.</li>
                                <li>Packaging detailing. </li>
                            </div>
                        </div>
                    </div>
                    <div className="service col-sm-12 col-md-6 col-lg-4 service__six" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} >
                        <div className="service-box">
                            <div className="service-img">
                                <fi.FiPackage />
                            </div>
                            <div className="service-title">
                                MATERIAL HANDELING EQUIPMENTS
                            </div>
                            <div className="service-content">
                                <li>Trolleys.</li>
                                <li>Conveyors.</li>
                                <li>Pallets.</li>
                                <li>Bins.</li>
                            </div>
                        </div>
                    </div>
                    <div className="service col-sm-12 col-md-6 col-lg-4 service__seven" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} >
                        <div className="service-box">
                            <div className="service-img">
                                <fi.FiPackage />
                            </div>
                            <div className="service-title">
                                SPM
                            </div>
                            <div className="service-content">
                                <li> Srewing SPM.</li>
                                <li>  Pressing SPM. </li>
                                <li>  Drilling SPM.</li>
                                <li>  Reveting SPM. </li>
                                <li>  Spring Loading SPM. </li>
                                <li>  Bolt Clinching SPM. </li>
                                <li>  Seam Welding SPM.  </li>
                            </div>
                        </div>
                    </div>
                    <div className="service col-sm-12 col-md-6 col-lg-4 service__eight" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} >
                        <div className="service-box">
                            <div className="service-img">
                                <fi.FiPackage />
                            </div>
                            <div className="service-title">
                                2D TO 3D CONVERSION
                            </div>
                            <div className="service-content">
                                <li>Prototype.</li>
                                <li>Reverse engineering.                                </li>
                                <li>Product design.                                </li>
                                <li>Custom solutions.</li>
                            </div>
                        </div>
                    </div>
                    <div className="service col-sm-12 col-md-6 col-lg-4 service__nine" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} >
                        <div className="service-box">
                            <div className="service-img">
                                <fi.FiPackage />
                            </div>
                            <div className="service-title">
                                CAD DRAFTING AND DESIGN
                            </div>
                            <div className="service-content">
                                <li>Manufecturing cad detailing.</li>
                                <li>Steel structure detailing.</li>
                                <li>Product detailing.</li>
                                <li>Custom solutions.</li>
                            </div>
                        </div>
                    </div>
               

                    <div className="clear"></div>
                </div>

            </div>
        </div>
    )
}