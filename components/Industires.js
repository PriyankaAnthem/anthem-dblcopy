import React, { useState, useEffect } from "react";
import Nav from "./nav";
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
import "./Industries.css";
import { FaChevronDown } from "react-icons/fa";

function Industries(props) {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [animated, setAnimated] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    // Set the default selected industry to "Food Ordering"
    const defaultIndustry = industries.find(
      (industry) => industry.name === "Food Ordering"
    );
    setSelectedIndustry(defaultIndustry);
  }, []);
  useEffect(() => {
    const handleScroll1 = () => {
      const ids = ["industriespage"]; // Array of IDs
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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const parallaxImage = document.getElementById("parallax-image");
    parallaxImage.style.transform = `translateY(${scrollPosition * 0.9}px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const industries = [
    {
      name: "Food Ordering",
      icon: "🍽️",
      content: (
        <>
          <div
            className="industry-content"
            style={{
              textAlign: "justify",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          >
            <div>
              The online food ordering market has increased day by day every
              most of the people ordered their food online. There are some
              benefits of this process like, save time, choose anything from any
              restaurant, get your order in-home, easy and fast delivery.
            </div>
            <div>
              If you have food making business and do not have any platform to
              show and get order online then We will provide you this platform.
              You can get customers online for ordering food online from your
              platform.
            </div>
          </div>
        </>
      ),
      image: "/img/Food.webp",
      additionalInfo: [
        "Google Places API",
        "Assign Driver",
        "Payment Gateway",
        "Assign Driver",
        "Food Delivery",
      ],
    },
    {
      name: "HOA Automation",
      icon: "🏠",
      content: (
        <>
          <div
            className="industry-content"
            style={{
              textAlign: "justify",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          >
            <div>
              This project is a custom software product that is being developed
              for one of our US clients. It is about the automation of processes
              in the management of a condominium.
            </div>
            <div>
              We use technologies like ASP.Net MVC.Net, HTML, CSS, JQuery,
              Javascript, PDF Reading and scanning Images, Reading MICR from
              Cheques, ACH, Bulk Email Sending.
            </div>
          </div>
        </>
      ),
      image: "/img/hoa.webp",
      additionalInfo: [
        "Bulk Email Sending",
        "PDF Reading",
        "Reading MICR from Cheques",
        "Evoting System",
        "Scanning Images",
        "ACH",
      ],
    },
    {
      name: "Financial Advisory",
      icon: "💰",
      content: (
        <>
          <div
            className="industry-content"
            style={{
              textAlign: "justify",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          >
            <div>
              A financial advisor provides financial guidance to customers for
              compensation.
            </div>
            <div>
              We will provide an online website for your business to get
              customers. We have a great team to design your attractive website
              with our knowledge.
            </div>
            <div>
              {" "}
              Internal Financial Controls Framework we use technologies like
              ASP.Net, C#, .net, Entity Framework, Bootstrap, High Charts,
              Spreadsheet Gear for excel reports, MS, SQL server 2012, CSS,
              HTML.
            </div>
          </div>
        </>
      ),
      image: "/img/financial.webp",
      additionalInfo: [
        "High Charts",
        "Email Sending",
        "Excel reports",
        "Generate PDF",
        "Survey Status",
      ],
    },
    {
      name: "Tourism",
      icon: "✈️",
      content: (
        <>
          <div
            className="industry-content"
            style={{
              textAlign: "justify",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          >
            <div>
              We made some websites for the Tourism business, check our
              portfolio to get your website more attractive to customers. You
              can use The Travel Booking website and We Travel Solo to make a
              tour with your family.
            </div>
            <div>
              We have used technologies like ASP.net, C#, .netMS SQL, Server
              2012, JQueryMVC4 API Development and consuming, JavaScript, HTML,
              CSS, Google maps
            </div>
          </div>
        </>
      ),

      image: "/img/tourism.webp",
      additionalInfo: [
        "Choose Destination",
        "Place API",
        "Generate packs",
        "Send Enquiry",
        "Rating & Reviews",
      ],
    },
    {
      name: "Travel",
      icon: "🚌",
      content: (
        <>
          <div
            className="industry-content"
            style={{
              textAlign: "justify",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          >
            <div>
              Taj Taxi Service and Ucab Taxi Customer Website provides you taxi
              service you can use these websites for business purposes, for
              personal use, for personal use.
            </div>
            <div>
              A customer website where he/she can register and place the orders
              to book the taxis online. History for order booking was maintained
              where customer can repeat the same order again.
            </div>
            <div>
              We can use technologies like, ASP.net, C#.net, MS SQL Server 2008
              R2, JQuery,Javascript, Google API for location finding and Maps,
              Telrik/Rad controls.
            </div>
          </div>
        </>
      ),
      image: "/img/travel.webp",
      additionalInfo: [
        "Telrik",
        "Rad controls",
        "Google Email Relay",
        "select cab",
        "API for location finding",
      ],
    },
    {
      name: "Construction",
      icon: "🏗️",
      content: (
        <>
          <div
            className="industry-content"
            style={{
              textAlign: "justify",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          >
            <div>
              Taj Building Works wants to become a big company with experts and
              professional teams.
            </div>
            <div>
              They are Property sale purchase in Zirakpur want to complete every
              project in time with nice feedback from customers.
            </div>
            <div>
              We use technologies like HTML, CSS, Bootstrap, Google Maps, Php
              email Sending.
            </div>
          </div>
        </>
      ),
      image: "/img/construction.webp",
      additionalInfo: [
        "Google Maps",
        "PayPal",
        "Our Clients",
        "Request A Quote",
      ],
    },
    {
      name: "Business Promotions",
      icon: "🤝",
      content: (
        <>
          <div
            className="industry-content"
            style={{
              textAlign: "justify",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          >
            <div>
              Check our portfolio, we have some websites about Promotion
              Business products.
            </div>
            <div>
              We have a website that was developed for one of our UK based
              client and the purpose of this website is to showcase all of his
              sound damping products.
            </div>
            <div>
              We use technologies like HTML, JavaScript, CSS, Bootstrap,
              Photoshop.
            </div>
          </div>
        </>
      ),
      image: "/img/business.webp",
      additionalInfo: [
        "SMS Sending",
        "Generate Pdf",
        "Paypal",
        "Social wall",
        "Review & Ratings",
      ],
    },
    {
      name: "Logistics",
      icon: "🚚",
      content: (
        <>
          <div
            className="industry-content"
            style={{
              textAlign: "justify",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          >
            <div>
              Transport your goods from one place to another place on road.
              There is an advantage of on-time delivery.
            </div>
            <div>
              Get your shipment on time from our drivers.We have complete some
              websites like Singh Logistics LLC and OHIO Freight System.
            </div>
            <div>
              We have used technologies like HTML5, CSS3, Bootstrap, JavaScript,
              Google Maps.
            </div>
          </div>
        </>
      ),
      image: "/img/logistics.webp",
      additionalInfo: [
        "Google Maps",
        "Email Sending",
        "Career",
        "ApI location Sharing",
      ],
    },
    {
      name: "Health & Medicines",
      icon: "⚕️",
      content: (
        <>
          <div
            className="industry-content"
            style={{
              textAlign: "justify",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          >
            <div>
              When you hit on Clas Intra lab Website you can see this is a
              health checking full-body testing website. Providing accurate
              testing results at an affordable price in Amritsar Punjab, India..
            </div>
            <div>
              We also have a project name "Modern Clinical Lab" with more
              technologies
            </div>
            <div>
              We used technologies like HTML, CSS, Bootstrap, JavaScript.
            </div>
          </div>
        </>
      ),
      image: "/img/medical.webp",
      additionalInfo: [
        "Generate Membership",
        "Membership Enquiry",
        "Tests",
        "Deals",
        "Whatsapp Connects",
      ],
    },
    {
      name: "Information Technology",
      icon: "💻",
      content: (
        <>
          <div
            className="industry-content"
            style={{
              textAlign: "justify",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          >
            <div>
              We create our website like Anthem Infotech Official Website,
              Anthem Tools, Anthem Infotech - Software Solutions Internet
              Marketing Providers, Anthem Infotech Management Web Solutions.
            </div>
            <div>
              We use technologies like ASP.net, MS SQL server 2012, SignalR,
              Knockout, JS, Bootstrap, Angular JS, QR Code generator, Ajax,
              JavaScript, JQuery, HTML, CSS.
            </div>
          </div>
        </>
      ),
      image: "/img/4_2560x1170.webp",
      additionalInfo: [
        "Portfolio",
        "Job Form",
        "Our Clients",
        "Google Location",
        "Services",
      ],
    },
  ];

  const handleClick = (industry) => {
    setSelectedIndustry(industry);
  };

  return (
    <div>
      <Nav />
      <div id="parallax-container">
        <div className="parallax-header">
          <h2 style={{ color: "white" }}>INDUSTRIES</h2>
        </div>
        <div className="parallax-image" id="parallax-image">
          <img
            src="/img/backgroundchatgptimage.webp"
            alt="Header"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div id="portfolio" className="text-center">
        <div className="container-fluid">
          <div className="col-md-12 section-title">
            <div className="row justify-content-center">
              <div className="col-md-1"></div>
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`col-md-1 text-center mb-3 industry-item  ${
                    selectedIndustry === industry
                      ? "selected-industry-container"
                      : ""
                  }`}
                  onClick={() => handleClick(industry)}
                >
                  <div className="industry-item">
                    <div
                      className="industry-icon larger-icon"
                      style={{
                        animation: "iconHoverEffect 0.5s ease-in-out",
                      }}
                    >
                      {industry.icon}
                    </div>
                    <span
                      className="larger-name"
                      style={{
                        borderBottom:
                          selectedIndustry === industry
                            ? "2px solid red"
                            : "none",
                      }}
                    >
                      {industry.name}
                    </span>
                    {selectedIndustry === industry && (
                      <FaChevronDown className="arrow-down-icon" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {selectedIndustry && (
            <div className="industry-page-container col-md-12 ">
              <div className="row">
                <div className="col-md-6 text-center" id="industriespage">
                  <img
                    src={selectedIndustry.image}
                    alt={selectedIndustry.name}
                    style={{ width: "100%", height: "300px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="selected-industry-content">
                    <h2 style={{ fontWeight: "bold" }}>
                      {selectedIndustry.name}
                    </h2>
                    <div className="additional-info-container">
                      {selectedIndustry.additionalInfo.map((info, index) => (
                        <div
                          key={index}
                          className="additional-info-card fade-in"
                        >
                          {info}
                        </div>
                      ))}
                    </div>
                    <p>{selectedIndustry.content}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div id="contact" style={{ paddingTop: "0px" }}>
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
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2024 Anthem Infotech Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
