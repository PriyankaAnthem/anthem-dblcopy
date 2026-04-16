"use client";

import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "@/components/SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutFour = ({ classOption }) => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);

  const [refClients, inViewClients] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refProjects, inViewProjects] = useInView({ triggerOnce: true, threshold: 0.3 });

  
  useEffect(() => {
  if (!sceneEl.current) return;

  const Parallax = require("parallax-js");
  const parallaxInstance = new Parallax(sceneEl.current, {
    relativeInput: true,
  });

  return () => parallaxInstance.disable();
}, []);

useEffect(() => {
  require("aos").init();
}, []);

  
  
  
  
  
  return (
    <div className={`section section-padding-top  ${classOption}`} style={{ paddingTop: "20px" }}>

      <div className="container">
        <div className="row">
          {/* Text content */}
          <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-content-area mt-0 mb-md-10 mb-10">
              <SectionTitleTwo
                // subTitle="Web Design, Digital Marketing & Software Solutions"
                title="We combine strategic planning, UI/UX design, and advanced software development to deliver impactful digital solutions"
            
            />
              <div className="row row-cols-sm-2 row-cols-auto mb-n6">
                <div className="col mb-6">
                  <div className="about-funfact">
                    <div className="number" ref={refClients}>
                      {inViewClients && <CountUp end={50} duration={2} />}+
                    </div>
                    <h6 className="text">Satisfied Clients</h6>
                    <p>
                       We have empowered clients and businesses to achieve growth through stronger digital presence and innovative, customized solutions.
                    </p>
                  </div>
                </div>
                <div className="col mb-6">
                  <div className="about-funfact">
                    <div className="number" ref={refProjects}>
                      {inViewProjects && <CountUp end={120} duration={2} />}+
                    </div>
                    <h6 className="text">Successful Projects</h6>
                    <p>
                     Providing tailored digital solutions that optimize operations, enhance productivity, and drive measurable results across industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image content */}
          <div className="col-xl-6 col-lg-6 col-12 pb-24 md:pb-0" data-aos="fade-up" data-aos-delay="300">
            <div className="about-image-area about-shape-animation right-0 me-0">
              <div className="about-image js-tilt">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL + "/images/about/about-1.webp"}
                    alt=""
                  />
                </Tilt>
              </div>
              <div className="about-image js-tilt">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL + "/images/about/about-2.webp"}
                    alt=""
                  />
                </Tilt>
              </div>
              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL + "/images/shape-animation/video-shape-1.png"}
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;