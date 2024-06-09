import {Link} from 'react-router-dom';
import * as Ti from "react-icons/ti"
import logo from '../../Assets/images/PES-3-.png'
import address from '../../Assets/images/location.png'
import contact from '../../Assets/images/call.png'
import gmail from '../../Assets/images/mail.png'



export default function Footer() {
    return (
        <footer className="footer-div">
            <div className="container footer-first">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 footer_logo_300">
                        <div className="footer-logo">
                            <img src={logo} alt="PNAQ logo" />
                        </div>
                        <div className="footer-about">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="footer-title">Contact Info</div>
                        <div className="contact-info-detail">
                            <div className='d-flex'>
                                <div className="footer-contact-info">
                                    <img className='f__img' src={address} />
                                </div>
                                <div className="float-start p-1">
                                    Mahavir Residency, 624, Spine Rd, Shivatej Nagar,
                                    Chinchwad, Pimpri-Chinchwad, Maharashtra 411019
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div>
                                <div className="footer-contact-info">
                                    <img className='f__img' src={contact} />
                                </div>
                                <div className="float-start p-1">
                                    + 91 95118 90599
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div>
                                <div className="footer-contact-info">
                                    <img className='f__img' src={gmail} />
                                </div>
                                <div className="float-start p-1">
                                    akharde111@gmail.com
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