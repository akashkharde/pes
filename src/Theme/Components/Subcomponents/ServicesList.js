
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

                    <div className="service col-sm-12 col-md-6 col-lg-4 service__one" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                        <div className="service-box">
                            <div className="service-img">
                                <bs.BsFillGearFill className="servicesIcon" />
                            </div>
                            <div className="service-title">
                                Fixture Design
                            </div>
                            <div className="service-content">
                                <li>
                                    Welding Fixtures
                                    <ul className="nextedUL">
                                        <li>BIW Fixture Design</li>
                                        <li>Manual Welding Fixtures</li>
                                        <li>Heavy Fabrication Welding Fixtures</li>
                                    </ul>
                                </li>
                                <li> Machining Fixtures </li>
                                <li> Assembly Checking Fixtures</li>
                                <li> Panel Checkers</li>
                                <li> Plastic Product Checking Gauges</li>
                            </div>
                        </div>
                    </div>

                    <div className="service col-sm-12 col-md-6 col-lg-4 service__two" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                        <div className="service-box">
                            <div className="service-img">
                                <gi.GiGears className="servicesIcon" />
                            </div>
                            <div className="service-title">
                                Press Tool Design
                            </div>
                            <div className="service-content">
                                <li>Blanking Tool</li>
                                <li>Parting Off Tool</li>
                                <li>Forming Tool</li>
                                <li>Piercing Tool</li>
                                <li>Trimming Tool</li>
                                <li>Drawing Tool</li>
                                <li>Cut Off Tool</li>
                                <li>Shaving Tool</li>
                                <li>Progressive Tool</li>
                            </div>
                        </div>
                    </div>

                    <div className="service col-sm-12 col-md-6 col-lg-4 service__four" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                        <div className="service-box">
                            <div className="service-img">
                                <fi.FiPackage className="servicesIcon" />
                            </div>
                            <div className="service-title">
                                Forging
                            </div>
                            <div className="service-content">
                                <li>Forging Tool For Press</li>
                                <li>Forging Tool For Upsetter</li>
                                <li>Forging Tool For Hammer</li>
                                <li>Forging Tool For Screw Press</li>
                            </div>
                        </div>
                    </div>

                    <div className="service col-sm-12 col-md-6 col-lg-4 service__five" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                        <div className="service-box">
                            <div className="service-img">
                                <tb.TbPackages className="servicesIcon" />
                            </div>
                            <div className="service-title">
                                Packaging Design
                            </div>
                            <div className="service-content">
                                <li>Corrugated Boxes</li>
                                <li>Wooden Crates</li>
                                <li>Customized Packaging</li>
                                <li>Packaging Detailing</li>
                            </div>
                        </div>
                    </div>

                    <div className="service col-sm-12 col-md-6 col-lg-4 service__six" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                        <div className="service-box">
                            <div className="service-img">
                                <fi.FiPackage className="servicesIcon"  />
                            </div>
                            <div className="service-title">
                                Material Handling Equipments
                            </div>
                            <div className="service-content">
                                <li>Trolleys</li>
                                <li>Conveyors</li>
                                <li>Pallets</li>
                                <li>Bins</li>
                            </div>
                        </div>
                    </div>

                    <div className="service col-sm-12 col-md-6 col-lg-4 service__seven" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                        <div className="service-box">
                            <div className="service-img">
                                <fi.FiPackage className="servicesIcon" />
                            </div>
                            <div className="service-title">
                                SPM
                            </div>
                            <div className="service-content">
                                <li>Screwing SPM</li>
                                <li>Pressing SPM</li>
                                <li>Drilling SPM</li>
                                <li>Riveting SPM</li>
                                <li>Spring Loading SPM</li>
                                <li>Bolt Clinching SPM</li>
                                <li>Seam Welding SPM</li>
                            </div>
                        </div>
                    </div>

                    <div className="service col-sm-12 col-md-6 col-lg-4 service__eight" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                        <div className="service-box">
                            <div className="service-img">
                                <fi.FiPackage className="servicesIcon" />
                            </div>
                            <div className="service-title">
                                2D To 3D Conversion
                            </div>
                            <div className="service-content">
                                <li>Prototype</li>
                                <li>Reverse Engineering</li>
                                <li>Product Design</li>
                                <li>Custom Solutions</li>
                            </div>
                        </div>
                    </div>

                    <div className="service col-sm-12 col-md-6 col-lg-4 service__nine" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                        <div className="service-box">
                            <div className="service-img">
                                <fi.FiPackage className="servicesIcon" />
                            </div>
                            <div className="service-title">
                                CAD Drafting And Design
                            </div>
                            <div className="service-content">
                                <li>Manufacturing CAD Detailing</li>
                                <li>Steel Structure Detailing</li>
                                <li>Product Detailing</li>
                                <li>Custom Solutions</li>
                            </div>
                        </div>
                    </div>


                    <div className="clear"></div>
                </div>

            </div>
        </div>
    )
}