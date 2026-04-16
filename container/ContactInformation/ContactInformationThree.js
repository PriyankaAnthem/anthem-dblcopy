
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import contactDataTwo from "../../data/contactInfo/contactInfoTwo.json";
import ContactInfoItem from "../../components/ContactInfo/ContactInfoItemTwo.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo.jsx";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import Parallax from "parallax-js";

const ContactInformationThree = () => {
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className="section section-padding contact-section" style={{ paddingTop: "0px", paddingBottom: "0px", backgroundColor:"white"}}>
      <div className="container ">
        <div
          className="col mt-lg-0 mt-md-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="contact-form-area" style={{paddingTop:"10px",paddingBottom:"20px"}}>
            <SectionTitle
              titleOption="section-title text-center mb-1"
              headingOption="title fz-28"
              title="Let's discuss the Project"
              subTitle="Ready For a Conversation?"
            />
             <div className="col-12 text-center">
              <Link href="/request-a-quote">
                <button
        type="submit"
        className="btn btn-bottom"
        data-hover="Get a Free Consultation"
        style={{ background: "#0e6497" }}
      >
        Get a Free Consultation
      </button>
              </Link>
    </div>
            {/* <ProjectForm classOption="background-1" /> */}
          </div>
        </div>
      </div>
      <div className="shape shape-1" id="scene" ref={sceneEl}>
        <span data-depth="1">
          <img
            src={
              process.env.REACT_APP_PUBLIC_URL +
              "/images/shape-animation/newsletter-shape.png"
            }
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default ContactInformationThree;
