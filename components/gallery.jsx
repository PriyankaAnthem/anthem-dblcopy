import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { Image } from "./image";
import Navigation from "./navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

// Add this CSS to your stylesheet or within a <style> tag in your component
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
export const Gallery = (props) => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [projects, setProjects] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const toggleHide = () => {
    setShowAll(false);
  };

  useEffect(() => {
    AOS.init(
      {
        duration: 5500,
      },
      []
    );
    // Fetch data from API
    fetchData();
    // Add a scroll event listener to add 'visible' class
    window.addEventListener("scroll", revealOnScroll);
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const revealOnScroll = () => {
    const elements = document.querySelectorAll(".zoom-effect");
    for (let elem of elements) {
      const windowHeight = window.innerHeight;
      const elementTop = elem.getBoundingClientRect().top;
      const elementVisible = 150; // Adjust this value based on when you want the effect to trigger

      if (elementTop < windowHeight - elementVisible) {
        elem.classList.add("visible");
      } else {
        elem.classList.remove("visible");
      }
    }
  };

  const fetchData = async () => {
    try {
      // Fetch data from API
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetAllProjects",
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

  const GetResponsive = async () => {
    try {
      // Fetch data from API
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetResponsive",
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

  const GetASPNetDevelopment = async () => {
    try {
      // Fetch data from API
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetASPNetDevelopment",
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
      // Fetch data from API
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Portfolio/GetCSSProjects",
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

  const GetJQueryProjects = async () => {
    try {
      // Fetch data from API
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

 
  return (
    <div id="portfolio" className="text-center">
      <style>{galleryStyles}</style>
      <div className="container">
        <div className="section-title">
          <div className="container">
            <div className="col-md-12 section-title">
              <h2>Portfolio</h2>
            </div>
          </div>
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
                </li>{" "}
                {/* <li>
                <a
                      style={
                        selectedOption === "Website Development"
                          ? { ...linkStyles, backgroundColor: "#007bff" }
                          : linkStyles
                      }
                      onClick={() => handleOptionSelect("Website Development")}
                    >
                      Website Development
                    </a>
                  
                </li>{" "} */}
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
                  {/* <a style={linkStyles}>MVC.Net</a> */}
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
                  {/* <a style={linkStyles}>WordPress & PHP</a> */}
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
                  {/* <a style={linkStyles}>HTML5</a> */}
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
                  {/* <a style={linkStyles}>Mobile Apps</a> */}
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
                  {/* <a style={linkStyles}>JQuery</a> */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          {/* Display fetched projects */}
          {/* Display fetched projects, limited to 6 if showAll is false */}
          {projects
            .slice(0, showAll ? projects.length : 6)
            .map((project, index) => (
              <Link
                key={index}
                className="col-sm-4"
                to={`/projectDetails/${project.projectName}/${project.projectSubCategory}`}
              >
                <div
                  className="card m-5"
                  style={{
                    height: "300px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                  }}
                >
                  <div className="card-body">
                    <h3 style={{ color: "#007bff" }} className="card-title">
                      {project.projectName}
                    </h3>
                    <p style={{ color: "black" }} className="card-text">
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
                        height: "150px",
                      }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          <div>
            {/* "See More" button */}
            {!showAll && projects.length > 6 && (
              <div className="col text-center">
                <div style={{ display: "inline-block" }}>
                  <a
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                    onClick={toggleShowAll}
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                    <span style={{ marginLeft: "5px" }}>See More</span>
                  </a>
                </div>
              </div>
            )}
            {/* "Hide" button */}
            {showAll && (
              <div className="col text-center">
                <div style={{ display: "inline-block" }}>
                  <a
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                    onClick={toggleHide}
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    <FontAwesomeIcon icon={faChevronUp} />
                    <span style={{ marginLeft: "5px" }}>Hide</span>
                  </a>
                </div>
              </div>
            )}
          </div>
          <br />
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
  `;

// Inject CSS into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
