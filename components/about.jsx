"use client"

import React, { useRef, useEffect, useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import { baseApiUrl } from "./baseApiUrl";
import { Button, Card, CardHeader, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaMobileAlt,
  FaCode,
  FaPaintBrush,
} from "react-icons/fa";

export const About = (props) => {
  const teamRef = useRef(null);
  const [apiData, setApiData] = useState(null); // State to store API data
  const [logoUrls, setLogoUrls] = useState([]); // State to store logo URLs
  const images = ["/img/slide1.webp", "/img/slide2.webp", "/img/slide3.webp"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animatedStyles, setAnimatedStyles] = useSpring(() => ({
    transform: "translate3d(0, -20px, 0)",
    opacity: 0,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get(
          `${baseApiUrl}api/Client/ViewAllClient`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
          }
        );
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchApiData();
  }, []);

  useEffect(() => {
    setAnimatedStyles({ transform: "translate3d(0, 0, 0)", opacity: 1 });
  }, [setAnimatedStyles]);

  useEffect(() => {
    if (apiData) {
      // Extract logo URLs from the API data
      const urls = apiData.map((item) => item.logo1);
      setLogoUrls(urls);
    }
  }, [apiData]);
  const animatedHeadingStyles = useSpring({
    from: { transform: "translate3d(0, -20px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    config: { tension: 120, friction: 14 },
  });

  const styles = `
  .singleslider {
    position: relative;
    overflow: hidden;
   
  }
  .custom-card {
    background-color: #fff; /* Use your desired secondary color */
    color: white; /* Set text color to contrast with the background */
  }

  .slider-container {
    transition: transform 0.5s ease;
    display: flex;
  }

  .slide {
    flex: 0 0 auto;
    width: 100%; /* Full width of the parent container */
    display: none;
  }

  .slide.active {
    display: block;
  }

  .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
    font-size: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    z-index: 1;
  }

  .prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  .prev.clicked {
    transform: translateY(-50%) scale(1.2); /* Example animation on click */
  }

  .next.clicked {
    transform: translateY(-50%) scale(1.2); /* Example animation on click */
  }
  .progress-bar {
    transition: transform 0.3s ease;
  }
  
  .progress-bar:hover {
    transform: scale(1.1);
  }
`;

  return (
    <div id="about">
      <style>{styles}</style>
      <div id="team" className="text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="about-text">
                <animated.h2 style={animatedHeadingStyles}>
                  About Us
                </animated.h2>

                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  {props.data ? props.data.paragraph : "loading..."}
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="singleslider wow fadeInDown"
                style={{ position: "relative", marginBottom: "20px" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="prev"
                  onClick={prevSlide}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    zIndex: "1",
                  }}
                >
                  &#10094;
                </button>
                <button
                  className="next"
                  onClick={nextSlide}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    zIndex: "1",
                  }}
                >
                  &#10095;
                </button>
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display: index === currentSlide ? "block" : "none",
                    }}
                  >
                    <img
                      src={image}
                      className="img-responsive"
                      alt={`Slider${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar zoom-effect"
                      role="progressbar"
                      style={{
                        width: "98%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      aria-valuenow="98"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {" "}
                      <span
                        className="progress-text"
                        style={{
                          fontSize: "1.2em",
                          marginLeft: "5px",
                          marginRight: "5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa fa-pencil"
                          style={{ color: "white", marginRight: "5px" }}
                        ></i>
                        System design
                      </span>
                      <strong style={{ color: "white", fontSize: "1.2em" }}>
                        98%
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "85%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span
                        className="progress-text"
                        style={{
                          fontSize: "1.2em",
                          marginLeft: "5px",
                          marginRight: "5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa fa-database"
                          style={{ color: "white", marginRight: "5px" }}
                        ></i>
                        Data analysis
                      </span>
                      <strong style={{ color: "white", fontSize: "1.2em" }}>
                        85%
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "94%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      aria-valuenow="94"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span
                        className="progress-text"
                        style={{
                          fontSize: "1.2em",
                          marginLeft: "5px",
                          marginRight: "5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa fa-link"
                          style={{ color: "white", marginRight: "5px" }}
                        ></i>
                        Link level analysis
                      </span>
                      <strong style={{ color: "white", fontSize: "1.2em" }}>
                        94%
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "90%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span
                        className="progress-text"
                        style={{
                          fontSize: "1.2em",
                          marginLeft: "5px",
                          marginRight: "5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa fa-eye"
                          style={{ color: "white", marginRight: "5px" }}
                        ></i>
                        Coverage modelling
                      </span>
                      <strong style={{ color: "white", fontSize: "1.2em" }}>
                        90%
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "97%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      aria-valuenow="97"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span
                        className="progress-text"
                        style={{
                          fontSize: "1.2em",
                          marginLeft: "5px",
                          marginRight: "5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa fa-cog"
                          style={{ color: "white", marginRight: "5px" }}
                        ></i>
                        Web development
                      </span>
                      <strong style={{ color: "white", fontSize: "1.2em" }}>
                        97%
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "98%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      aria-valuenow="98"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {" "}
                      <span
                        className="progress-text"
                        style={{
                          fontSize: "1.2em",
                          marginLeft: "5px",
                          marginRight: "5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa fa-code"
                          style={{ color: "white", marginRight: "5px" }}
                        ></i>
                        HTML / CSS / JS
                      </span>
                      <strong style={{ color: "white", fontSize: "1.2em" }}>
                        98%
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "95%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {" "}
                      <span
                        className="progress-text"
                        style={{
                          fontSize: "1.2em",
                          marginLeft: "5px",
                          marginRight: "5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa fa-paint-brush"
                          style={{ color: "white", marginRight: "5px" }}
                        ></i>
                        Graphic design
                      </span>
                      <strong style={{ color: "white", fontSize: "1.2em" }}>
                        95%
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "85%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {" "}
                      <span
                        className="progress-text"
                        style={{
                          fontSize: "1.2em",
                          marginLeft: "5px",
                          marginRight: "5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa fa-mobile-phone"
                          style={{ color: "white", marginRight: "5px" }}
                        ></i>
                        Mobile application
                      </span>
                      <strong style={{ color: "white", fontSize: "1.2em" }}>
                        85%
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 custom-card">
            <Card className="mb-4" style={{ border: "none", color: "black" }}>
              <CardHeader
                style={{
                  fontSize: "24px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
                className="text-center"
              >
                <animated.b style={animatedStyles}>
                  <img
                    src="./img/mission.gif"
                    alt="Our Mission"
                    style={{ marginRight: "5px", width: "100", height: "100" }}
                    title=" Our Mission"
                  />
                  {/* Our Mission */}
                </animated.b>
              </CardHeader>
              <CardBody
                style={{
                  textAlign: "justify",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                }}
              >
                We are a professional web development company in India. We offer
                custom-made web designs, various web solutions like eCommerce or
                shopping cart website design, website re-design, PHP, MySQL,
                domain registration, web hosting, and Search Engine
                Optimization.
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-4" style={{ border: "none", color: "black" }}>
              <CardHeader
                style={{
                  fontSize: "24px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
                className="text-center"
              >
                <animated.b style={animatedStyles}>
                  <img
                    src="./img/vision.gif"
                    alt="Our Vision"
                    style={{ marginRight: "5px", width: "100", height: "100" }}
                    title="Our Vision"
                  />
                  {/* Our Vision */}
                </animated.b>
              </CardHeader>
              <CardBody
                style={{
                  textAlign: "justify",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                }}
              >
                Our dedicated support team is friendly and passionate with years
                of experience in web design, web development, eCommerce, and
                SEO. We work for you to give you the best web solutions.
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-4" style={{ border: "none", color: "black" }}>
              <CardHeader
                style={{
                  fontSize: "24px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
                className="text-center"
              >
                <animated.b style={animatedStyles}>
                  <img
                    src="./img/brainstorm.gif"
                    alt="Our Philosophy"
                    style={{ marginRight: "5px", width: "100", height: "100" }}
                    title="Our Philosophy"
                  />
                  {/* Our Philosophy */}
                </animated.b>
              </CardHeader>
              <CardBody
                style={{
                  textAlign: "justify",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                }}
              >
                At every step of the project, we promise you quality and user
                interface designs. Whether it is a simple website or a
                comprehensive automated software, we work to deliver a user
                experience/user interface design with responsive screen views.
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="container col-md-12">
        <div
          style={{
            background: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
          }}
        >
          <br />
          <h3
            style={{ textAlign: "center", color: "black", fontWeight: "bold" }}
          >
            WANT TO WORK WITH US?
          </h3>
          <br />
          <h4 style={{ textAlign: "center", color: "white" }}>
            We are hiring Software Developers. We need punctuality, Honesty,
            Team Player and Dedication in our employees.
          </h4>
          <h4 style={{ textAlign: "center", color: "white" }}>
            Freshers must have some educational background in Programming.
          </h4>
          <h4 style={{ textAlign: "center", color: "white" }}>
            Click below to fill the form for work with us.
          </h4>
          <br />
          <div className="col text-center">
            <div style={{ display: "inline-block" }}>
              <Link
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
                to="/careers"
                className="btn btn-custom btn-lg page-scroll"
              >
                <span style={{ marginRight: "10px" }}>SEND APPLICATION</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </Link>
            </div>
          </div>
          <br />
        </div>
        <br />

        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <div id="team" className="text-center">
        <style>
          {`
          .team-container {
            display: flex;
            overflow-x: hidden;
          }

          .team {
            flex: 0 0 auto;
            margin-right: 15px; /* Adjust spacing between images */
          }

          .team-img {
            max-width: 15%; /* Decrease the width of the images */
            height: auto; /* Maintain aspect ratio */
            margin-right: 60px; /* Add margin between images */
          }

          .caption {
            text-align: center;
          }
        `}
        </style>
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h3
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
                fontSize: "36px",
              }}
            >
              OUR CLIENTS
            </h3>
            <p style={{ color: "black" }}>
              Explore the impressive array of companies we've partnered with.
              Join our esteemed clientele and unlock the pathway to your
              success.
            </p>
          </div>
        </div>
        <div className="team-container" ref={teamRef}>
          {/* Render images within the marquee */}
          <marquee className="team" direction="left" scrollamount="4">
            {apiData &&
              apiData.map((item, index) => (
                <a
                  key={index}
                  href={item.websiteAddress}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://antheminfotech.com/ClientImages/${item.logo1}`}
                    alt="..."
                    className="team-img"
                  />
                </a>
              ))}
          </marquee>
        </div>
      </div>
    </div>
  );
};
