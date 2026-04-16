"use client";
import "aos/dist/aos.css"; 
import PropTypes from "prop-types";
import React, { useEffect} from "react";
import Link from "next/link";
import ImageCarousel from "../../components/swiper/ImageCarousel";
import Loader from "../Loader/Loader";

const WorkDetailsContainer = ({ projects, loading, classOption }) => {
  useEffect(() => {
  import("aos").then((AOS) => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  });
}, []);
  const toTitleCase = (str) =>
    str
      .split(" ")
      .map((word) =>
        word.charAt(0) === word.charAt(0).toUpperCase()
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");

  return (
    <div className={`section section-padding ${classOption}`} style={{paddingTop:"20px"}}>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row pt--100 pb--80">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="work-left work-details" data-aos="fade-up">
                <div className="portfolio-main-info">
                  <h6 data-aos="fade-up">ABOUT THE PROJECT</h6>
                  <div className="work-details-list mt-2">
                    <div className="details-list">
                     
                      {
                      
                        <span title="Project Start Date">
                          <i className="far fa-calendar text-primary"></i>{" "}
                          {new Date(
                            projects.data?.dateofProject
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      }
                    </div>
                    <div className="details-list"></div>
                    <div className="details-list">
                      {/* <label>Categories</label> */}
                      <span title="Categories">
                        {/* <i className="fa fa-pencil-alt text-primary"></i>{" "} */}
                        <i className="fa-solid fa-list text-primary"></i>{" "}
                        {projects.data?.projectCategory}
                      </span>
                    </div>

                    <div className="details-list">
                      {/* <label>SubCategories</label> */}
                      <span title="Sub Categories">
                        {" "}
                        {/* <i className="fa fa-pencil-alt text-primary"></i>{" "} */}
                        <i className="fa-solid fa-diagram-project text-primary"></i>{" "}
                        {projects.data?.projectSubCategory}
                      </span>
                    </div>

                  
                  </div>
                  <div
                    className="details-list d-flex"
                    style={{ margin: "5px 0px" }}
                  >
                   
                    <div className="tagcloud mt-1">
                      {(projects.data?.technolgies || "")
                        .split(",")
                        .map((highlight) => highlight.trim())
                        .filter((highlight) => highlight)
                        .map((highlight, index) => (
                          <Link key={index} href={`#`} style={{
          cursor: "default",
          textDecoration: "none",
          pointerEvents: "none", 
        }}>
                            {toTitleCase(highlight)}
                          </Link>
                        ))}
                    </div>
                   
                  </div>
                  <div className="my-2">
                    {projects?.data?.url && (
                      <div className="work-btn">
                        <a
                          className="btn btn btn-bottom"
                          href={projects?.data?.url}
                          target="_blank"
                          rel="noreferrer"
                          data-hover="Live Preview"
                          style={{ background: "#0e6497" }}
                        >
                          Live Preview
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-6 col-12">
              <div className="work-left work-details">
                <div className="work-main-info">
                  <div className="work-content">
                    <h3 className="title text-primary" data-aos="fade-up">
                      {projects?.data?.projectName}
                    </h3>

                    <div className="desc">
                      
                      <div
                        dangerouslySetInnerHTML={{
                          __html: projects.data?.description,
                        }}
                      />
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="digital-marketing" data-aos="fade-up">
                {/* <h3 className="heading heading-h3">{data.subContent.title}</h3> */}
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12 offset-lg-1">
              <div
                className="digital-marketing mt-lg-0 mt-6"
                data-aos="fade-up"
              >
                <div className="inner">
                  {/* <p>{data.subContent.text}</p> */}
                </div>
              </div>
            </div>
          </div>

         
          {projects && <ImageCarousel imageUrls={projects.img} />}
        </div>
      )}
    </div>
  );
};

WorkDetailsContainer.propTypes = {
  data: PropTypes.object,
};

export default WorkDetailsContainer;
