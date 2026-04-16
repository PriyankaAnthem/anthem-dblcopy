import React, { useEffect, useState } from "react";
import { baseApiUrl } from "./baseApiUrl";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Industries.css";

export const Features = (props) => {
  const [projects, setProjects] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Responsive Design");
  const [projectDetails, setProjectDetails] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [animated, setAnimated] = useState({});
  useEffect(() => {
    const handleScroll = () => {
      const ids = ["card"]; // Array of IDs
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

  useEffect(() => {
    fetchProjects();
    animateIn();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const toggleHide = () => {
    setShowAll(false);
  };
  useEffect(() => {
    fetchProjects();
    animateIn();
  }, []);
  const animateIn = () => {
    // Add animation class to trigger the animation
    const featuresElement = document.getElementById("features");
    featuresElement.classList.add("slide-up");
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch(
          "http://anthemwebsiteapi.antheminfotech.com/api/Home/GetTokenForAllAPI?tokenn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiUmFtYW4gS3VtYXIiLCJuYmYiOjE3MTM0OT",
          {
            method: "POST",
          }
        );
        const data = await response.json();
        localStorage.setItem("Token", data.token);
        fetchProjects();
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []);
  const fetchProjects = () => {
    let apiUrl = `${baseApiUrl}api/Home/GetProjectForHomePage`;

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.topEight);
        console.log(data.topEight);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchMobileProjects = () => {
    const apiUrl = `${baseApiUrl}api/Home/GetProjectForMobile`;
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.mobile);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching mobile projects:", error);
      });
  };

  const fetchWebsiteProjects = () => {
    const apiUrl = `${baseApiUrl}api/Home/GetProjectForWebsite`;

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.website);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching website projects:", error);
      });
  };

  const fetchProjectDetails = (projectNameSubCategory) => {
    const apiUrl = `${baseApiUrl}api/Home/ViewProjectByProjectName?projectname=${projectNameSubCategory}`;
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Project details:", data);
        setProjectDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
      });
  };

  const handleCardHover = (projectName, projectSubCategory) => {
    const projectNameSubCategory = `${projectName},${projectSubCategory}`;
    fetchProjectDetails(projectNameSubCategory);
  };

  const handleCardLeave = () => {
    setProjectDetails(null);
  };

  const handleClick = (projectName, projectSubCategory) => {
    const projectNameSubCategory = `${projectName},${projectSubCategory}`;
    fetchProjectDetails(projectNameSubCategory);
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
    <div id="features" className="text-center contact-section">
      <div className="container-fluid">
      <div >
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>OUR SERVICES AT A GLANCE</h2>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light gradient-bg">
        <div className=" col-md-6 col-md-offset-3">
          <ul className="nav navbar-nav">
            <li>
              <a
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                className={
                  selectedOption === "Responsive Design"
                    ? "page-scroll active"
                    : "page-scroll"
                }
                onClick={() => {
                  setSelectedOption("Responsive Design");
                  fetchProjects();
                }}
              >
                Responsive Design
              </a>
            </li>
            <li>
              <a
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                className={
                  selectedOption === "Mobile Apps"
                    ? "page-scroll active"
                    : "page-scroll"
                }
                onClick={() => {
                  setSelectedOption("Mobile Apps");
                  fetchMobileProjects();
                }}
              >
                Mobile Apps
              </a>
            </li>
            <li>
              <a
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                className={
                  selectedOption === "Website Development"
                    ? "page-scroll active"
                    : "page-scroll"
                }
                onClick={() => {
                  setSelectedOption("Website Development");
                  fetchWebsiteProjects();
                }}
              >
                Website Development
              </a>
            </li>
            <li>
              <Link
                to="/PortfolioPage"
                className={
                  selectedOption === "All Projects"
                    ? "page-scroll active"
                    : "page-scroll"
                }
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                All Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="">
        {projects.length > 0 ? (
          <div
            className="row"
            id="card"
            style={{
              // boxShadow:
              //   "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
              cursor: "pointer",
            }}
          >
            {projects
              .slice(0, showAll ? projects.length : 6)
              .map((project, index) => (
                <a
                  key={index}
                  className={`col-sm-4}`}
                  onClick={() =>
                    handlePlanSelect(
                      project.projectName,
                      project.projectSubCategory
                    )
                  }
                >
                  <div
                    key={index}
                    className="col-md-4 mb-4"
                    onMouseEnter={() =>
                      handleCardHover(
                        project.projectName,
                        project.projectSubCategory
                      )
                    }
                    onMouseLeave={handleCardLeave}
                  >
                    <div
                      className="card my-3"
                      style={{
                        height: "350px",
                        marginBottom:"30px"
                      }}
                    >
                      <div className="card-header">
                        <h3 className="card-title" style={{ color: "black" }}>
                          {project.projectName}
                        </h3>
                      </div>
                      <hr />

                      <div className="card-footer">
                        <img
                          src={`https://antheminfotech.com/PortfolioImages/${project.projectImage}`}
                          alt={`Project Image`}
                          style={{
                            width: "100%",
                            marginBottom: "0px",
                            justifyContent: "center",
                            height: "240px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <br />
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
      <br />
    </div>
    </div>
  );
};

// CSS Styles
const styles = `
  .card-wrapper {
    overflow: hidden;
  }

  .card {
    border: 0.1px solid #ccc;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }


  .technology-box {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    display: inline-block;
  }
   
    @keyframes example {
      from { top: 200px; opacity: 0; }
      to { top: 0px; opacity: 1; }
    }

    .animate-heading {
      position: relative;
      animation-name: example;
      animation-duration: 3s;
      animation-fill-mode: both;
      font-size: 6vw;
    }
    .details {
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 10px;
      width: 100%;
      height: 100%;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease;
    }
    
    .card-wrapper:hover .details {
      opacity: 1;
      visibility: visible;
    }
    
  `;

// Inject CSS into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Features;
