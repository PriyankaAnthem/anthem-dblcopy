import React, { useEffect, useState , useRef } from "react";
import axios from "axios";
import { baseApiUrl } from "./baseApiUrl";
import Nav from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRoad } from "@fortawesome/free-solid-svg-icons";

function Career(props) {
  const initialState = {
    name: "",
    email: "",
    contact: "",
    resume: "",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [lastEmployed, setLastEmployed] = useState("");
  const [experience, setExperience] = useState("");
  const [selectMonths, setSelectMonths] = useState("");
  const [postApplyingFor, setPostApplyingFor] = useState("");
  const [joining, setJoining] = useState("");
  const [resume, setResume] = useState(null);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [lastEmployedError, setLastEmployedError] = useState("");
  const [experienceError, setExperienceError] = useState("");
  const [selectMonthsError, setSelectMonthsError] = useState("");
  const [postApplyingForError, setPostApplyingForError] = useState("");
  const [joiningError, setJoiningError] = useState("");
  const [resumeError, setResumeError] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [animated, setAnimated] = useState({});
const [apiResponseMsg, setApiResponseMsg] = useState("");
const sceneRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

useEffect(() => {
  if (!sceneRef.current) return;

  const Parallax = require("parallax-js");

  const parallaxInstance = new Parallax(sceneRef.current, {
    relativeInput: true,
  });

  return () => {
    parallaxInstance.disable();
  };
}, []);


  useEffect(() => {
    const handleScroll1 = () => {
      const ids = ["careerpage"]; // Array of IDs
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

    window.addEventListener("scroll", handleScroll1);
    return () => {
      window.removeEventListener("scroll", handleScroll1);
    };
  }, [animated]);

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   const parallaxImage = document.getElementById("parallax-image");
  //   parallaxImage.style.transform = `translateY(${scrollPosition * 0.9}px)`;
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setName(value);
        setNameError("");
        break;
      case "email":
        setEmail(value);
        setEmailError("");
        break;
      case "contact":
        setContact(value);
        setContactError("");
        break;
      default:
        break;
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
    setResumeError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    // Validation
    let formIsValid = true;

    if (!name.trim()) {
      setNameError("Please enter your name.");
      formIsValid = false;
    }

    if (!email.trim()) {
      setEmailError("Please enter your email.");
      formIsValid = false;
    }

    if (!contact.trim()) {
      setContactError("Please enter your contact number.");
      formIsValid = false;
    }
    if (contact.trim() != "") {
      if (!indianPhoneNumberRegex.test(contact)) {
        setContactError("Please enter a valid contact number.");
        formIsValid = false;
      } else {
        setContactError("");
      }
    }
    if (!resume) {
      setResumeError("Please upload your resume.");
      formIsValid = false;
    }

    if (!formIsValid) {
      return;
    }
    debugger;
    // Form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("number", contact);
    formData.append("lastEmployed", lastEmployed);
    formData.append("experience", experience);
    formData.append("selectMonths", selectMonths);
    formData.append("postApplyingFor", postApplyingFor);
    formData.append("joining", joining);
    formData.append("file", resume);

    try {
      const response = await axios.post(
        `${baseApiUrl}api/Career/ApplyforJobCareer`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setApiResponseMsg(response.data.msg);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleKeyPress = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[0-9]*$/; // Only allow numeric characters
    if (!regex.test(keyValue)) {
      e.preventDefault();
    }
  };
  const indianPhoneNumberRegex = /^[6-9]\d{9}$/;
const parallaxInstance = new Parallax(sceneRef.current, {
  relativeInput: true,
  pointerEvents: true,
});

if (window.innerWidth < 768) {
  parallaxInstance.disable();
}

  return (
    <div>
      <Nav />
      {/* <div id="parallax-container">
        <div className="parallax-header">
          <h2 style={{ color: "white" }}>CAREER</h2>
        </div>
        <div className="parallax-image" id="parallax-image">
          <img
            src="/img/backgroundchatgptimage.webp"
            alt="Header"
            style={{ width: "100%" }}
          />
        </div>

      </div> */}
<div id="parallax-container" ref={sceneRef}>
  <div className="parallax-header" data-depth="0.2">
    <h2 style={{ color: "white" }}>CAREER</h2>
  </div>

  <div className="parallax-image" data-depth="0.6">
    <img
      src="/img/backgroundchatgptimage.webp"
      alt="Header"
      style={{ width: "100%" }}
    />
  </div>
</div>

      <div id="contact">
        <div className="container" id="careerpage">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                {/* <h2>Career</h2> */}
                {!apiResponseMsg && (
                  <p>
                    Fill and submit below application form to apply and schedule
                    an interview with us.
                  </p>
                )}
                {apiResponseMsg && (
                  <div className="container">
                    <p style={{ color: "white" }}>{apiResponseMsg}</p>
                  </div>
                )}
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                      />
                      <p className="help-block text-danger">{nameError}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        onChange={handleInputChange}
                      />
                      <p id="email-error" className="help-block text-danger">
                        {emailError}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="contact"
                        placeholder="Contact Number"
                        onChange={handleInputChange}
                        pattern="[0-9]*"
                        //onBlur={handleBlur}
                        onKeyPress={handleKeyPress}
                        maxLength={13}
                      />
                      <p className="help-block text-danger">{contactError}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="lastEmployed"
                        placeholder="Last Employed At"
                        onChange={handleInputChange}
                      />
                      <p className="help-block text-danger">
                        {lastEmployedError}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="experience"
                        onChange={handleInputChange}
                      >
                        <option value="" disabled selected>
                          Experience (YEAR)
                        </option>
                        <option value="0">Fresher</option>
                        {[...Array(20).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                      <p className="help-block text-danger">
                        {experienceError}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="selectMonths"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Months</option>
                        {[...Array(13).keys()].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                      <p className="help-block text-danger">
                        {selectMonthsError}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="postApplyingFor"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Post Applying For</option>
                        <option value="SEO">SEO</option>
                        <option value="Web Designer">Web Designer</option>
                        <option value="Dot Net Developer">
                          Dot Net Developer
                        </option>
                        <option value="Android Developer">
                          Android Developer
                        </option>
                        <option value="PHP Developer">PHP Developer</option>
                        <option value="IOS Developer">IOS Developer</option>
                      </select>
                      <p className="help-block text-danger">
                        {postApplyingForError}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="joining"
                        onChange={handleInputChange}
                      >
                        <option value="" disabled selected>
                          Joining
                        </option>
                        <option value="0">Immediate</option>
                        {[...Array(59).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                      <p className="help-block text-danger">{joiningError}</p>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        placeholder=" Upload Resume"
                        onChange={handleFileInputChange}
                      />
                    </div>
                    <p className="help-block text-danger">{resumeError}</p>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="4"
                        placeholder="Drop Line To Us (OPTIONAL)"
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="col text-left">
                  <div style={{ display: "inline-block" }}>
                    <button
                      type="submit"
                      className="btn btn-custom btn-lg page-scroll"
                      style={{
                        boxShadow:
                          "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                      }}
                    >
                      <span style={{ marginRight: "10px" }}>
                        SEND APPLICATION
                      </span>
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                #11, Floor 11, Sushma Infinium, Chandigarh - Ambala Highway,
                Near Best Price Zirakpur, Punjab – 140603 India.
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                +91 9815-34-0123
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                info@antheminfotech.com
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
}

export default Career;
