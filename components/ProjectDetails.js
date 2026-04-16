import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { baseApiUrl } from "./baseApiUrl";
import { css } from "@emotion/react";
import { CircleLoader } from "react-spinners";
import { Nav } from "./nav";
import { Button } from "reactstrap";
import {
  faExternalLinkAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectDetails = (props) => {
  // Extract project name and subcategory from URL parameters
  const { state } = useLocation();
  const { projectName, projectSubCategory } = state;

  // const { projectName, projectSubCategory } = useParams();
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [projectDetails, setProjectDetails] = useState(null);
  const [projectImages, setProjectImages] = useState(null);
  const [projectCategory, setProjectCategory] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Define the API URL based on the project name and subcategory
    const apiUrl = `${baseApiUrl}api/Home/ViewProjectByProjectName?projectname=${projectName},${projectSubCategory}`;
    // Start loading animation
    setLoading(true);

    // Fetch project details from the API with JWT token
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((response) => response.json())
      .then((data, img) => {
        // Set the fetched project details to state
        const imageUrls = data.img.map((imageData) => imageData.imageURL);

        // Set the fetched project details to state
        setProjectDetails(data.data);
        setProjectImages(imageUrls);
        setProjectCategory(data.projectCategory);
        console.log("fetching project Images:", data.img);
        setLoading(false); // Stop loading animation once data is received
        console.log("fetching project details:", data);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
        setLoading(false); // Stop loading animation on error
      });
  }, [projectName, projectSubCategory]);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #5e72e4;
  `;
  // Function to handle clicking the Live Preview button
  const handleLivePreviewClick = () => {
    // Open the live preview link in a new window
    window.open(projectDetails.url, "_blank");
  };
  const styles = `
  .singleslider {
    position: relative;
    overflow: hidden;
   
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
  .logo-animation {
    display: inline-block;
    opacity: 0;
    animation: fadeInAnimation 1s ease-in-out forwards; /* Define your animation here */
  }

  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projectImages.length - 1 : prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projectImages.length - 1 ? 0 : prevSlide + 1
    );
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
      <div className="container-fluid" style={{ marginTop: "100px" }}>
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
          .back-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #007bff;
            color: #ffffff;
            border: none;
            border-radius: 10px;
            padding: 10px 20px;
            font-size: 18px;
            text-decoration: none;
            transition: transform 0.3s;
            animation: pulse 1s infinite;
          }
          
          .back-btn:hover {
            transform: scale(1.1);
          }
          
          .arrow-icon {
            margin-right: 5px;
          }
          
          @keyframes pulse {
            0% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
            }
            
            70% {
              transform: scale(1);
              box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
            }
            
            100% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
            }
          }
        `}
        </style>

        {loading ? (
          <div
            className="loader-container"
            style={{
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* This will center the loader container both horizontally and vertically */}
            <CircleLoader
              color={"#5e72e4"}
              loading={loading}
              css={override}
              size={200}
            />
          </div>
        ) : (
          projectDetails && (
            <div className="row" style={{ marginBottom: "50px" }}>
              <div className="col-md-4">
                <h3
                  style={{
                    textAlign: "center",
                    color: "#007bff",
                    fontWeight: "bold",
                  }}
                >
                  {projectName}
                </h3>
                {projectDetails.technolgies.split(",").map((tech, i) => (
                  <div
                    key={i}
                    className="technology-box"
                    style={{ backgroundColor: "#007bff", color: "#ffffff" }} // Update the style here
                  >
                    {tech}
                  </div>
                ))}
                <Button
                  style={{ backgroundColor: "#ff6347", color: "white" }} // Change the background color here
                  onClick={handleLivePreviewClick}
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    style={{ marginRight: "5px", color: "white" }}
                  />{" "}
                  LIVE PREVIEW
                </Button>
              </div>
              <div className="col-md-8">
                <div
                  className="singleslider wow fadeInDown"
                  style={{ position: "relative", marginBottom: "20px" }}
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
                      transition: "transform 0.3s",
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
                      transition: "transform 0.3s",
                    }}
                  >
                    &#10095;
                  </button>

                  {projectImages.map((imageURL, index) => (
                    <div
                      key={index}
                      style={{
                        display: index === currentSlide ? "block" : "none",
                        height: "450px",
                        width: "100%",
                        boxShadow:
                          "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                      }}
                    >
                      <img
                        src={`https://antheminfotech.com/PortfolioImages/${imageURL}`}
                        className="img-responsive"
                        alt={`Slider${index + 1}`}
                        style={{ height: "450px", width: "100%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-12">
                <h4
                  style={{
                    color: "#007bff",
                    fontWeight: "bold",
                  }}
                >
                  Description:
                </h4>
                <div
                  style={{
                    textAlign: "justify",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: projectDetails.description,
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <h3 style={{ fontWeight: "bold" }}>RELATED PORTFOLIO</h3>
                <div className="container-fluid">
                  {projectCategory.length > 0 ? (
                    <div className="row justify-content-between">
                      {projectCategory.map((project, index) => (
                        <a
                          key={index}
                          className="col-md-4 mb-4"
                          onClick={() =>
                            handlePlanSelect(
                              project.projectName,
                              project.projectSubCategory
                            )
                          }
                          style={{
                            minHeight: "280px",
                            // boxShadow:
                            //   "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                          }}
                        >
                          <div
                            className="card my-3"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="card-header">
                              <h3
                                className="card-title"
                                style={{
                                  color: "black",
                                  textAlign: "center",
                                }}
                              >
                                {project.projectName}
                              </h3>
                            </div>
                            <div className="card-body">
                              <p
                                className="card-text"
                                style={{
                                  color: "black",
                                  textAlign: "center",
                                }}
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
                                  height: "250px",
                                }}
                              />
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p>No related projects found.</p>
                  )}
                </div>
              </div>
            </div>
          )
        )}
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
};
// CSS Styles
const styles = `
  .technology-box {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    display: inline-block;
  }
  `;
export default ProjectDetails;
