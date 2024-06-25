import * as Ti from "react-icons/ti"
import logo from '../../Assets/images/finalLogoBack.webp'

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



export default function Footer() {

    const handleRedirect = () => {
        const latitude = 18.664857476025468;
        const longitude = 73.80639759585682;
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url, '_blank');
    };

    const handleClick = () => {
        let phoneNumber = 919511890599;
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
      };
    return (
        <footer className="footer-div">
            <div className="container footer-first">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 footer_logo_300">
                        <div className="footer-logo">
                            <img src={logo} alt="PNAQ logo"   />
                        </div>
                        <div className="footer-about">
                        Specializing in mechanical design solutions to empower businesses in a competitive market. Our passion for innovation and commitment to excellence drive us to deliver tailored design services that meet your specific needs.
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="footer-title">Contact Info</div>
                        <div className="contact-info-detail">
                            <div className='d-flex cursor-pointer mb-2' onClick={handleRedirect} title="Open Google map">
                                <div className="footer-contact-info">
                                    <span><FaLocationDot className='f__img' /> </span>
                                </div>
                                <div className="float-start p-1">
                                    Mahavir Residency, 624, Spine Rd, Shivatej Nagar,
                                    Chinchwad, Pimpri-Chinchwad, Maharashtra 411019.
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="cursor-pointer mb-2" onClick={handleClick}  title="chat on Whatsapp" > 
                                <div className="footer-contact-info cursor-pointer"  >
                                <span><FaPhoneAlt className='f__img'  /></span>
                                </div>
                                <div className="float-start p-1">
                                    + 91 95118 90599
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="mb-2">
                                <div className="footer-contact-info">
                                <span><IoIosMail className='f__img'  /></span>
                                </div>
                                <div className="float-start p-1">
                                info.pnaqengineering@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-second-sec">
                <div className="social-media-icons">
                    <div className="icon-div"><Ti.TiSocialLinkedin /></div>
                </div>
            </div>
            <div className='text-center'>© PNAQ Engineering Solutions LLP 2023. All rights reserved.</div>
        </footer>
    )
}