import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { Image } from "./image";
import Navigation from "./navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Nav from "./nav";
import "./Industries.css";

const galleryStyles = `
.zoom-effect {
  transition: transform 1s ease !important;
}

.zoom-effect:hover {
  transform: scale(0.6) !important;
}

`;
const linkStyles = {
  fontWeight: "500",
  fontSize: "18px",
  cursor: "pointer",
  padding: "5px 10px",
  margin: "0 2px",
  borderRadius: "0px",
  color: "black",
  backgroundcolor: " #007bff",
};
export const Portfolio = (props) => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [projects, setProjects] = useState([]);
  const [animateCards, setAnimateCards] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [animated, setAnimated] = useState({});

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const toggleHide = () => {
    setShowAll(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const ids = ["portfoliopage"];
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

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init(
      {
        duration: 5500,
      },
      []
    );
    fetchData();
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const showButton = () => {
    return { opacity: "1", visibility: "visible" };
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollButtonStyle = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#3498db",
    color: "white",
    width: "40px",
    height: "40px",
    textAlign: "center",
    lineHeight: "40px",
    cursor: "pointer",
    borderRadius: "50%",
    display: isVisible ? "block" : "none", // Show/hide based on scroll position
    opacity: "0",
    visibility: "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease",
  };

  const arrowStyle = {
    border: "solid white",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(-135deg)",
    marginTop: "16px",
  };

  const revealOnScroll = () => {
    const elements = document.querySelectorAll(".zoom-effect");
    for (let elem of elements) {
      const windowHeight = window.innerHeight;
      const elementTop = elem.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        elem.classList.add("visible");
      } else {
        elem.classList.remove("visible");
      }
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetAllProjects",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const GetResponsive = async () => {
    try {
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetResponsive",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const GetASPNetDevelopment = async () => {
    try {
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetASPNetDevelopment",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const GetMVCProjects = async () => {
    try {
      // Fetch data from API
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetMVCProjects",
        {
          method: "GET",
          headers: {
            // Add JWT token from local storage
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  const GetWordPressProjects = async () => {
    try {
      // Fetch data from API
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetWordPressProjects",
        {
          method: "GET",
          headers: {
            // Add JWT token from local storage
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const GetHTML5Projects = async () => {
    try {
      // Fetch data from API
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetHTML5Projects",
        {
          method: "GET",
          headers: {
            // Add JWT token from local storage
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const GetMobileProjects = async () => {
    try {
      // Fetch data from API
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetMobileProjects",
        {
          method: "GET",
          headers: {
            // Add JWT token from local storage
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  const GetCSSProjects = async () => {
    try {
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetCSSProjects",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const GetJQueryProjects = async () => {
    try {
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetJQueryProjects",
        {
          method: "GET",
          headers: {
            // Add JWT token from local storage
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option == "Responsive Website") {
      GetResponsive();
    } else if (option == "ASP.Net & Core") {
      GetASPNetDevelopment();
    } else if (option == "MVC.Net") {
      GetMVCProjects();
    } else if (option == "WordPress & PHP") {
      GetWordPressProjects();
    } else if (option == "HTML5") {
      GetHTML5Projects();
    } else if (option == "Mobile Apps") {
      GetMobileProjects();
    } else if (option == "HTML5/CSS3") {
      GetCSSProjects();
    } else if (option == "JQuery") {
      GetJQueryProjects();
    } else if (option == "All") {
      fetchData();
    }
  };

  const navigate = useNavigate();

  const handlePlanSelect = (projectName, projectSubCategory) => {
    debugger;
    navigate("/projectDetails", { state: { projectName, projectSubCategory } });

    console.log(projectName, projectSubCategory);
    // setSelectedPlanId(planId);
    // fetchPeriodsByPlan(planId);
  };

  return (
    <div>
      <Nav />
      <div
        className="back-to-top"
        style={{ ...scrollButtonStyle, ...showButton() }}
        onClick={scrollToTop}
      >
        <span style={arrowStyle}></span>
      </div>
      <div id="parallax-container">
        <div className="parallax-header">
          <h2 style={{ color: "white" }}>PORTFOLIO</h2>
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
        <style>{galleryStyles}</style>
        <div className="container">
          {" "}
          <div className="section-title">
            {/* <div className="container">
              {/* <div className="col-md-12 section-title">
                {/* <h2>PORTFOLIO</h2> */}
            {/* </div> 
            </div>  */}
            <nav className="navbar navbar-expand-lg navbar-light gradient-bg">
              <div className="container col-md-12 ">
                <ul className="nav navbar-nav">
                  <li>
                    <a
                      style={
                        selectedOption === "All"
                          ? { ...linkStyles, backgroundColor: "#007bff" }
                          : linkStyles
                      }
                      onClick={() => handleOptionSelect("All")}
                      className="page-scroll"
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      style={
                        selectedOption === "Responsive Website"
                          ? { ...linkStyles, backgroundColor: "#007bff" }
                          : linkStyles
                      }
                      onClick={() => handleOptionSelect("Responsive Website")}
                    >
                      Responsive Website
                    </a>
                  </li>
                  <li>
                    <a
                      style={
                        selectedOption === "ASP.Net & Core"
                          ? { ...linkStyles, backgroundColor: "#007bff" }
                          : linkStyles
                      }
                      onClick={() => handleOptionSelect("ASP.Net & Core")}
                    >
                      ASP.Net & Core
                    </a>
                  </li>
                  <li>
                    <a
                      style={
                        selectedOption === "MVC.Net"
                          ? { ...linkStyles, backgroundColor: "#007bff" }
                          : linkStyles
                      }
                      onClick={() => handleOptionSelect("MVC.Net")}
                    >
                      MVC.Net
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      style={
                        selectedOption === "WordPress & PHP"
                          ? { ...linkStyles, backgroundColor: "#007bff" }
                          : linkStyles
                      }
                      onClick={() => handleOptionSelect("WordPress & PHP")}
                    >
                      WordPress & PHP
                    </a>
                  </li>
                  <li>
                    <a
                      style={
                        selectedOption === "HTML5"
                          ? { ...linkStyles, backgroundColor: "#007bff" }
                          : linkStyles
                      }
                      onClick={() => handleOptionSelect("HTML5")}
                    >
                      HTML5
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      style={
                        selectedOption === "Mobile Apps"
                          ? { ...linkStyles, backgroundColor: "#007bff" }
                          : linkStyles
                      }
                      onClick={() => handleOptionSelect("Mobile Apps")}
                    >
                      Mobile Apps
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      style={
                        selectedOption === "HTML5/CSS3"
                          ? { ...linkStyles, backgroundColor: "#007bff" }
                          : linkStyles
                      }
                      onClick={() => handleOptionSelect("HTML5/CSS3")}
                    >
                      HTML5/CSS3
                    </a>
                    {/* <a style={linkStyles}>HTML5/CSS3</a> */}
                  </li>{" "}
                  <li>
                    <a
                      style={
                        selectedOption === "JQuery"
                          ? { ...linkStyles, backgroundColor: "#007bff" }
                          : linkStyles
                      }
                      onClick={() => handleOptionSelect("JQuery")}
                    >
                      JQuery
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center" id="portfoliopage">
            {projects.map((project, index) => (
              <a
                key={index}
                className={`col-sm-4 ${animateCards ? "slide-in" : ""}`}
                onClick={() =>
                  handlePlanSelect(
                    project.projectName,
                    project.projectSubCategory
                  )
                }
              >
                <div
                  className="card m-5 zoom-effect"
                  style={{
                    height: "300px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div className="card-body">
                    <h3 style={{ color: "#007bff" }} className="card-title">
                      {project.projectName}
                    </h3>
                    <p
                      style={{
                        color: "black",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "16px",
                        textAlign: "center",
                      }}
                      className="card-text"
                    >
                      {project.smallDesciption}
                    </p>
                  </div>
                  <div className="card-footer">
                    <img
                      src={`https://antheminfotech.com/PortfolioImages/${project.projectImage}`}
                      alt={`Project Image`}
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        justifyContent: "center",
                        height: "100px",
                      }}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
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
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2024 Anthem Infotech Private Limited. All rights reserved.
              {/* <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = `
  .card {
    border: 0.5px solid #ccc;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .technology-box {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    display: inline-block;
  }

  .page-scroll.active {
    color: black;
    background-color: #007bff;
    
  }
  .slide-in {
    animation: slideIn 0.9s ease forwards;
    opacity: 0;
    transform: translateX(-100%);
  }
  
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  `;

// Inject CSS into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Portfolio;
