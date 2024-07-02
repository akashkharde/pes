import React from "react";
import { useState } from "react";
import * as Bs from "react-icons/bs";
import * as Ti from "react-icons/ti";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import img from '../../Assets/images/location.webp';
import imgOne from '../../Assets/images/mail.webp';
import imgTwo from '../../Assets/images/assist.webp';



export default function ContactPage() {

    const form = useRef();
    const options = [
        { op: "FIXTURE DESIGN" },
        { op: "PRESS TOOL DESIGN" },
        { op: "FORGING TOOL DESIGN" },
        { op: "PRODUCT DESIGN" },
        { op: "PACKAGING DESIGN" },
        { op: "MATERIAL HANDELING EQUIPMENT" },
        { op: "SPM" },
        { op: "2D TO 3D CONVERSION" },
        { op: "CAD DRAFTING AND DESIGN" },
        { op: "OTHERS" },
    ]
    const [isDropdownOpen, setisDropdownOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleDropdownclick = () => {
        setisDropdownOpen(!isDropdownOpen)
    }
    const handleAddToList = (selectedOption) => {
        if (!selectedOptions.includes(selectedOption)) {
            setSelectedOptions([...selectedOptions, selectedOption]);
        }
    }
    console.log("selectedOptions", selectedOptions);
    const handleRemoveFromList = (selectedOption) => {
        setSelectedOptions(selectedOptions.filter(option => option !== selectedOption));
    };

    const isOptionSelected = (option) => selectedOptions.includes(option);
    const handleRedirect = () => {
        const latitude = 18.664857476025468;
        const longitude = 73.80639759585682;
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url, '_blank');
    };

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [data, setData] = useState({
        name: "",
        mobilenumber: "",
        email: "",
        companyname: "",
        country: "",
        website: "",
        description: "",
        selectedOptionList: '',
    });

    const sendEmail = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const mobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[123456789]\d{9}$/;
        // const nameRegex = /^[\\p{L} .'-]+$/;

        // const descriptionRegex = /^\s*(\S\s*){10,150}$/;


        if (
            data.name === "" ||
            data.email === "" ||
            data.mobilenumber === "" ||
            data.country === ""
        ) {
            setErrorMessage("*Please enter all required details");

            setTimeout(() => setErrorMessage(""), 5000);
        } else if (data.email === "") {
            setErrorMessage("*Please enter an email address")
            setTimeout(() => setErrorMessage(""), 5000);
        }
        else if (!emailRegex.test(data.email)) {
            setErrorMessage("*Please enter a valid email address")
            setTimeout(() => setErrorMessage(""), 5000);
        } else if (data.mobilenumber === "") {
            setErrorMessage("*Please enter a mobile number")
            setTimeout(() => setErrorMessage(""), 5000);
        }
        else if (!mobileRegex.test(data.mobilenumber)) {
            setErrorMessage("*Please enter a valid mobile number")
            setTimeout(() => setErrorMessage(""), 5000);

        }
        else {
            try {

                emailjs.sendForm('service_9mi51yc', 'template_mqakq6o', form.current, '0wsLN2EXZz9Iay6p1')
                    .then((result) => {
                        if (result.status === 200) {
                            setSuccessMessage("We've received you message will contact you within 48 hours. Thank You.");
                            setSelectedOptions([]);
                            setTimeout(() => setSuccessMessage(""), 5000);
                            setData({
                                name: "",
                                mobilenumber: "",
                                email: "",
                                companyname: "",
                                country: "",
                                website: "",
                                description: "",
                            });
                        } else {
                            alert("The Email service is Temporarly Unavailable please connect through cantact number")
                        }
                    })
            } catch (error) {
                setErrorMessage("Oops, something went wrong, please try contacting with other options.");
                setTimeout(() => setErrorMessage(""), 5000);
            }
        }
    };
    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    const handleClick = () => {
        let phoneNumber = 919511890599;
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };

    const handleMailClick = () => {
        window.location.href = 'mailto:info.pnaqengineering@gmail.com';
    };

    return (
        <div className="contact-container" onClick={handleRedirect}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="contact-title">Get in Touch with PNAQ Engineering Solutions LLP.</div>
                        <div className="contact-content">
                            Let's Start a Conversation.
                        </div>

                        <div
                            className="contact-form"
                            data-aos="zoom-in-left"
                            data-aos-easing="linear"
                            data-aos-duration="600"
                            onClick={stopPropagation}
                        >
                            <div className="contact-detail" >
                                <div className="details" style={{ cursor: "pointer" }} onClick={handleRedirect} title="Open Google map">
                                    <div>
                                        <img src={img} alt='address' />
                                    </div>
                                    <div className="address">
                                        Mahavir Residency, 624, Spine Rd, Shivatej Nagar,
                                        Chinchwad, Pimpri-Chinchwad, Maharashtra 411019.
                                    </div>
                                </div>
                                <div className="details cursor-pointer" onClick={handleClick} title="chat on Whatsapp">
                                    <div>
                                        <img src={imgTwo} alt='phone ' />
                                    </div>
                                    <div className="call">Phone: +91 95118 90599</div>
                                </div>
                                <div className="details cursor-pointer" onClick={handleMailClick}>
                                    <div>
                                        <img src={imgOne} alt='gmail' />
                                    </div>
                                    <div className="call">Email: info.pnaqengineering@gmail.com
                                    </div>
                                </div>
                                <div className="details __details__">
                                    <div className="social-media-icons_c">
                                        <div className="icon-div_"><Ti.TiSocialLinkedin /></div>
                                    </div>
                                    <div className="call"></div>
                                </div>
                                <div className="contact-bottom-line"></div>
                            </div>



                            <form ref={form} onSubmit={sendEmail}>
                                <div className="contact-inputs">
                                    <div className="inputs">
                                        <input
                                            type="text"
                                            placeholder="*Full Name"
                                            value={data.name}
                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                            name="from_name"
                                        />
                                        <input
                                            type="text"
                                            placeholder="*Email Address"
                                            value={data.email}
                                            name="from_email"
                                            onChange={(e) =>
                                                setData({ ...data, email: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="inputs">
                                        <input
                                            type="text"
                                            placeholder="*Phone Number"
                                            value={data.mobilenumber}
                                            onChange={(e) =>
                                                setData({ ...data, mobilenumber: e.target.value })
                                            }
                                            name="from_contact"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Company Name"
                                            value={data.companyname}
                                            name="companyname"
                                            onChange={(e) =>
                                                setData({ ...data, companyname: e.target.value })
                                            }
                                        />

                                    </div>
                                    <div className="inputs">
                                        <input
                                            type="text"
                                            placeholder="Website Url"
                                            value={data.website}
                                            name="website"
                                            onChange={(e) =>
                                                setData({ ...data, website: e.target.value })
                                            }
                                        />
                                        <input
                                            type="text"
                                            placeholder="country"
                                            value={data.country}
                                            name="country"
                                            onChange={(e) =>
                                                setData({ ...data, country: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="inputs">

                                        <div className="option_div_main">
                                            <div className="option_div" onClick={handleDropdownclick}>
                                                <span>Select Design Options</span> <span> <i className={` ${isDropdownOpen ? "arrow down" : "arrow right"}`}></i></span>
                                            </div>
                                            <div style={{ width: '96%' }}>
                                                <div className={`option_div_op ${isDropdownOpen ? "show_op" : "hide_op"}`} >
                                                    {options && options.map((item, i) => (
                                                        <div className="option_div_op_list" key={i}>
                                                            <input
                                                                className="op__checkbox"
                                                                type="checkbox"
                                                                onChange={() => {
                                                                    isOptionSelected(item.op) ? handleRemoveFromList(item.op) : handleAddToList(item.op);
                                                                }}
                                                                checked={isOptionSelected(item.op)}
                                                                name="message_selectedlist"
                                                                value={selectedOptions}
                                                            />
                                                            <span>{item.op}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                            {selectedOptions.length > 0 && (
                                                <div className="desc_textarea">
                                                    <strong >SELECTED LIST: {"" + selectedOptions + ", "}</strong>
                                                </div>
                                            )}
                                        </div>
                                        <textarea
                                            placeholder="*How can we help?"
                                            value={data.description}
                                            onChange={(e) => setData({ ...data, description: e.target.value })}
                                            name="message"
                                        />
                                    </div>
                                    <div className="form-submit-button ">
                                        <button >
                                            Send Us Message <Bs.BsArrowRight />
                                        </button>
                                        <span className="popup-message">
                                            {errorMessage && (
                                                <div style={{ color: "red" }}> {errorMessage} </div>
                                            )}
                                            {successMessage && (
                                                <div style={{ color: "green" }}> {successMessage} </div>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};











