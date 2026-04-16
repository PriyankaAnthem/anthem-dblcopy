"use client";

import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faBriefcase,
  faCogs,
  faUtensils,
  faLaptopCode,
  faBullhorn,
  faHome,
  faPlane,
  faTruck,
  faHardHat,
  faHeartbeat,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import industrySolutions from "../../data/IndustriesTabs/industry_solutions.json";
import { getToken } from "../../services/tokenservice";
import { getProjects } from "../../services/projectsservices";
import WorkItemTwo from "../Work/WorkItemTwo";
import Loader from "../../container/Loader/Loader";

const ReactTabs = () => {
  const [scale] = useState(1.04);
  const [activeKey, setActiveKey] = useState(null);
  const [token, setToken] = useState(null);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProductsID, setRelatedProductsID] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const industryType = searchParams.get("Industrytype");

  // Helper function to generate random related product IDs
  function setRelatedProductsIDs() {
    const availableIDs = [
      1, 2, 3, 5, 15, 16, 4, 18, 35, 36, 7, 8, 9, 43, 90, 14, 47, 48, 51, 19,
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 37, 39, 44, 53, 54,
      49, 55, 57, 91, 96, 46, 56, 61, 79, 81, 103, 80, 83, 85, 86, 87, 97, 82,
      88, 33, 42, 6, 34, 38, 45, 17, 41, 89, 92, 95, 93, 94,
    ];
    const selectedIDs = [];
    const totalNumbers = 3;

    while (selectedIDs.length < totalNumbers) {
      const randomIndex = Math.floor(Math.random() * availableIDs.length);
      const randomID = availableIDs[randomIndex];
      if (!selectedIDs.includes(randomID)) selectedIDs.push(randomID);
    }
    return selectedIDs;
  }

  useEffect(() => {
    AOS.init();

    const filteredIndustryType = industrySolutions.filter(
      (data) => data.title.replace(/\s+/g, "-") === industryType
    );

    if (filteredIndustryType.length > 0) setActiveKey(filteredIndustryType[0].id);
    else if (industrySolutions.length > 0) setActiveKey(industrySolutions[0].id);

    setRelatedProductsID(setRelatedProductsIDs());
  }, [industryType]);

  const handleTabChange = (solutionTitle) => {
    router.push(`/Home/Industries?Industrytype=${solutionTitle}`);
  };

  const getIcon = (id) => {
    switch (id) {
      case 1:
        return faIndustry;
      case 2:
        return faBriefcase;
      case 3:
        return faCogs;
      case 4:
        return faUtensils;
      case 5:
        return faLaptopCode;
      case 6:
        return faBullhorn;
      case 7:
        return faHome;
      case 8:
        return faPlane;
      case 9:
        return faTruck;
      case 10:
        return faHardHat;
      case 11:
        return faHeartbeat;
      case 12:
        return faGlobe;
      default:
        return faIndustry;
    }
  };

  // Fetch token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchToken();
  }, []);

  // Fetch projects
  useEffect(() => {
    if (token) {
      const fetchProjects = async () => {
        try {
          const projectsData = await getProjects();
          setProjects(projectsData);
        } catch (err) {
          console.error(err);
        }
      };
      fetchProjects();
    }
  }, [token]);

  // Filter projects based on related IDs
  useEffect(() => {
    setLoading(true);
    if (Array.isArray(relatedProductsID) && relatedProductsID.length > 0) {
      const filteredData = projects.filter((project) =>
        relatedProductsID.includes(project.projectID)
      );
      setFilteredProjects(filteredData);
    }
    setLoading(false);
  }, [relatedProductsID, projects]);

const MAX_DESC_LENGTH = 580;

const truncateText = (text, limit) => {
  if (!text) return "";
  return text.length > limit
    ? text.substring(0, limit) + "..."
    : text;
};

  return (
    <div className="section section-padding-top brand-section background-1"style={{paddingTop:"30px"}}>
      <Container className="new-custom-tabs">
        <div className="custom-tabs">
          {industrySolutions.map((solution, index) => (
            <div key={index} className="custom-tab-container bg-white">
              <input
                type="radio"
                name="custom-tabs"
                id={`custom-tab${index}`}
                checked={solution.id === activeKey}
                onChange={() =>
                  handleTabChange(solution.title.replace(/\s+/g, "-"))
                }
              />
              <label htmlFor={`custom-tab${index}`} className="custom-tab-label">
                <FontAwesomeIcon
                  icon={getIcon(solution.id)}
                  className="tab-icon mb-2"
                />
                {solution.title}
              </label>
              <div className="custom-tab-content">
                <div className="row">
                  <div className="col-xl-6 tab-content-image">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/${solution.image}`}
                        alt={solution.title}
                        className="img-fluid rounded"
                        data-aos="fade-right"
                      />
                    </Tilt>
                  </div>
                  <div className="col-xl-6 tab-content-info">
                    <h2>{solution.title}</h2>
                    <div className="row">
                      <div className="col-12">
                        <div className="tagcloud">
                          {solution.highlights.map((highlight, index) => (
                           <p key={index}>
                                                            <Link href={`#`}>{highlight}</Link>
                                                        </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* <p className="justify-content">{solution.description}</p> */}
                    <p
  className="justify-content"
  title={
    solution.description.length > MAX_DESC_LENGTH
      ? solution.description
      : ""
  }
>
  {truncateText(solution.description, MAX_DESC_LENGTH)}
</p>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="mt-5 ind-project-pattion">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
            {loading ? (
              <Loader />
            ) : (
              filteredProjects &&
              filteredProjects.map((single, index) => (
                <div key={index} className="col mb-4 d-flex" data-aos="fade-up">
                  <WorkItemTwo  data={single} />
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReactTabs;
