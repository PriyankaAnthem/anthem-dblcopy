import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import React from "react";
import axios from "axios";
import { baseApiUrl } from "./baseApiUrl";
import "./Industries.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  FaUtensils,
  FaHome,
  FaMoneyCheckAlt,
  FaPlane,
  FaBus,
  FaBuilding,
  FaHandshake,
  FaTruck,
  FaMedkit,
  FaLaptop,
} from "react-icons/fa";

const initialState = {
  name: "",
  email: "",
  message: "",
  contactNumber: "",
};

export const Contact = (props) => {
  const [apiResponseMsg, setApiResponseMsg] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [msgError, setMsgError] = useState("");
  const indianPhoneNumberRegex = /^[6-9]\d{9}$/;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [animated, setAnimated] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const ids = ["contactpage", "contactpage1"]; // Array of IDs
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element && !animated[id]) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setAnimated((prevState) => ({
              ...prevState,
              [id]: true,
            }));
            element.classList.add("animate-heading");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  const handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        setNameError("");
        break;
      case "email":
        setEmail(value);
        setEmailError("");
        break;
      case "contactNumber":
        setContact(value);
        setContactError("");
        break;
      case "message":
        setMessage(value);
        setMsgError("");
        break;
      default:
        break;
    }
  };

  const handleKeyPress = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[0-9]*$/;
    if (!regex.test(keyValue)) {
      e.preventDefault();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    console.log(name, email, message, contactNumber);
    // Validation
    let formIsValid = true;

    if (name === "") {
      setNameError("Please enter your name.");
      formIsValid = false;
    }

    if (email === "") {
      setEmailError("Please enter your email.");
      formIsValid = false;
    }
    if (message === "") {
      setMsgError("Please enter your message.");
      formIsValid = false;
    }

    if (contactNumber === "") {
      setContactError("Please enter your contact number.");
      formIsValid = false;
    }
    if (contactNumber.trim() != "") {
      if (!indianPhoneNumberRegex.test(contactNumber)) {
        setContactError("Please enter a valid contact number.");
        formIsValid = false;
      } else {
        setContactError("");
      }
    }
    if (!formIsValid) {
      return;
    }
    try {
      const response = await axios.post(
        `${baseApiUrl}api/ContactUs/ContactUs`,
        {
          Name: name,
          Email: email,
          Number: contactNumber,
          Message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      console.log("Response:", response.data);
      if (response.data.msg) {
        setApiResponseMsg(response.data.msg);
        // clearState();
       setName("");
       setContact("");
       setEmail("");
       setMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container-fluid">
          <div className="col-md-8">
            <div className="row" id="contactpage">
              <div className="section-title">
                <h2>Get In Touch</h2>
                {!apiResponseMsg && (
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                )}
                {apiResponseMsg && (
                  <div className="container-fluid">
                    <p>{apiResponseMsg}</p>
                  </div>
                )}
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        //required
                        //onChange={handleChange}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger">{nameError}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        //required
                        onChange={handleChange}
                      />
                      <p id="email-error" className="help-block text-danger">
                        {emailError}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        className="form-control"
                        placeholder="Contact Number"
                        //required
                        pattern="[0-9]*"
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                      />
                      <p className="help-block text-danger">{contactError}</p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    //required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger">{msgError}</p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div
            className="col-md-3 col-md-offset-1 contact-info"
            id="contactpage1"
          >
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <div
              className="map-container"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.836930283328!2d76.82170797431439!3d30.63855299018039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb34165bc719%3A0xeef887919eec714c!2sAnthem%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1713788332393!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div id="contact" style={{ paddingTop: "10px" }}>
            <div className="container">
              <div className="col-md-12">
                <div className="row">
                  <div className="social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/AnthemInfotech">
                          <img
                            src="./img/facebook.png"
                            alt="Facebook"
                            style={{ width: "50px", height: "50px" }}
                            className="social-icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/antheminfotech">
                          <img
                            src="./img/twitter.png"
                            alt="Twitter"
                            style={{ width: "50px", height: "50px" }}
                            className="social-icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/anthem-infotech-pvt-ltd-">
                          <img
                            src="./img/linkedin-logo.png"
                            alt="LinkedIn"
                            style={{ width: "50px", height: "50px" }}
                            className="social-icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/919815340123/?text=Hi Anthem Team.">
                          <img
                            src="./img/whatsapp.png"
                            alt="WhatsApp"
                            style={{ width: "50px", height: "50px" }}
                            className="social-icon"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Anthem Infotech Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
