import * as bs from "react-icons/bs"
import { useEffect } from "react";
import AOS from 'aos'

export default function AboutSectionOne() {
    useEffect(() => {
        AOS.init({ delay: 200 })
    }, []);
    return (
        <div>
            <div className="container">
                <div className=" text-center aboutmain_div">
                    <div className="about-sec-one-text">
                        At PNAQ Engineering Solutions LLP, we specialize in mechanical design solutions that empower businesses to thrive in a competitive market. With a passion for innovation and a commitment to excellence, we offer a comprehensive suite of designing services tailored to your specific needs.
                    </div>
                </div>

                <div className="about-sec-one-right-boxes"  >
                    <div className="row service_row_">
                        <div className="col col-lg-4 col-md-6 col-sm-12 service_" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600">
                            <div className="service-box_">
                                <div className="service-img_">
                                    <bs.BsFillGearFill style={{ color: "#000" }} />
                                </div>
                                <div className="service-title_">
                                    FIXTURE DESIGN
                                </div>
                                <div className="service-content_">
                                    Our expert designers craft precision fixtures to enhance manufacturing processes, ensuring efficiency and accuracy in production. Our Fixture Design services stand out as a cornerstone in optimizing your manufacturing processes .  We understand that each manufacturing setup is unique. Our team works closely with you to create bespoke fixture designs tailored to your specific requirements.

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service_" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600">
                            <div className="service-box_">
                                <div className="service-img_">
                                    <bs.BsFillGearFill style={{ color: "#000" }} />
                                </div>
                                <div className="service-title_">
                                    FORGING TOOL DESIGN
                                </div>
                                <div className="service-content_">
                                    Our skilled engineers develop forging designs that optimize material usage and enhance the strength and quality of forged components.we specialize in the art of Forging Tool Design, bringing innovation and precision to every step of your manufacturing journey.
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12 service_" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600">
                            <div className="service-box_">
                                <div className="service-img_">
                                    <bs.BsFillGearFill style={{ color: "#000" }} />
                                </div>
                                <div className="service-title_">
                                    PRESS TOOL DESIGN
                                </div>
                                <div className="service-content_">
                                    We excel in creating press tools that streamline metalworking processes, enhancing productivity and reducing production costs.Unlock precision and efficiency in your manufacturing with PNAQ Engineering Solutions LLP expert Press Tool Design services. Our seasoned professionals specialize in creating cutting-edge designs using advanced technologies. Whether you need intricate details or robust performance, we tailor press tools to meet your unique specifications.
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12 service_" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600">
                            <div className="service-box_">
                                <div className="service-img_">
                                    <bs.BsFillGearFill style={{ color: "#000" }} />
                                </div>
                                <div className="service-title_">
                                    PRODUCT DESIGN
                                </div>
                                <div className="service-content_">
                                    Our industrial design team works alongside our product engineers to develop beautiful concepts that are manufacturable and meet your business requirements. We specialize in delivering cutting-edge product design solutions that transcend expectations. With a focus on user-centric innovation, our team employs advanced methodologies to bring your ideas to life.
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12 service_" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600">
                            <div className="service-box_">
                                <div className="service-img_">
                                    <bs.BsFillGearFill style={{ color: "#000" }} />
                                </div>
                                <div className="service-title_">
                                    STRUCTURAL DESIGN AND DETAILING
                                </div>
                                <div className="service-content_">
                                    Discover cutting-edge Structural Design services at PNAQ Engineering Solutions LLP. Our expert team, proficient in advanced engineering software, brings a unique blend of creativity and technical precision to redefine the landscape of structural engineering. We create robust structural designs that are the foundation for safe and reliable mechanical systems. Ensure your products reach customers intact.
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12 service_" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600">
                            <div className="service-box_">
                                <div className="service-img_">
                                    <bs.BsFillGearFill style={{ color: "#000" }} />
                                </div>
                                <div className="service-title_">
                                    PACKAGING DESIGN
                                </div>
                                <div className="service-content_">
                                    At PNAQ Engineering Solutions LLP, we specialize in delivering cutting-edge Packaging Design services that seamlessly blend creativity with functionality. Our expert team leverages their design prowess to create visually appealing and strategically crafted packaging solutions. Whether you require eye-catching product packaging or efficient logistics solutions, our designs are tailored to leave a lasting impression. We understand the importance of packaging in brand identity and product protection. Our designs not only look appealing but also ensure your products reach customers intact.
                                </div>
                            </div>
                        </div>


                        <div className=" col-lg-4 col-md-6 col-sm-12 service_" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600">
                            <div className="service-box_">
                                <div className="service-img_">
                                    <bs.BsFillGearFill style={{ color: "#000" }} />
                                </div>
                                <div className="service-title_">
                                    MATERIAL HANDELING EQUIBMENT
                                </div>
                                <div className="service-content_">
                                    PNAQ Engineering Services specializes in the design
                                    of material handling equipment to suit individualized requirements.
                                    We work with some of the best designers having years of experience
                                    in handling designs for both unit and bulk handling systems.
                                    We help our customer in the material handling projects
                                    by providing design services from concept development
                                    to detailed design for a wide range of projects for handling,
                                    storage and transport of raw materials as well as finished products
                                    in various sectors.
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12 service_" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600">
                            <div className="service-box_">
                                <div className="service-img_">
                                    <bs.BsFillGearFill style={{ color: "#000" }} />
                                </div>
                                <div className="service-title_">
                                    SPM
                                </div>
                                <div className="service-content_">
                                    As SPM is not created on standard manufacturing programs,
                                    immaculate design is crucial to ensure product performance and safety.
                                    At PNAQ, we help to develop technologically advanced machines that
                                    meet your specific needs by employing a highly specialized team that provides
                                    assistance with the design of the specialized tools and machinery.
                                    No matter how small or big your design requirements are,
                                    we are equipped to precisely serve to it. From the initial
                                    conceptualization phase to complete design, we provide
                                    you with end-to-end design support
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}