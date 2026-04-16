"use client";

import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const AboutSix = ({ classOption }) => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);

  // useEffect(() => {
  //   const parallaxInstance = new Parallax(sceneEl.current, {
  //     relativeInput: true,
  //   });

  //   parallaxInstance.enable();
  //   return () => parallaxInstance.disable();
  // }, []);

  const cloudBase = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL;

  return (
    <div
      className={`section section-padding-top technology-section-padding-bottom-180 ${classOption}`}
      style={{ paddingTop: "20px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                   src={`${cloudBase}/images/about/about-5.webp`}
                    alt="About 5"
                    loading="lazy"
                  />
                </Tilt>
              </div>
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={`${cloudBase}/images/about/about-6.webp`}
                    alt="About 6"
                    loading="lazy"
                  />
                </Tilt>
              </div>

              {/* <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={`${cloudBase}/images/shape-animation/about-shape-1.png`}
                    alt="Shape"
                    loading="lazy"
                  />
                </span>
              </div> */}
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-content-area">
              <SectionTitleTwo
                // subTitle="Innovative &amp; cutting-edge technology"
                title="Have a Project in Mind? Let's Bring It to Life!"
              />

              <p>
                Connect with us to create a solution focused on reaching your
                goals and boosting yourself next.
              </p>


               <Link href="/contact-us" passHref>
            <button
              type="button"
              className="btn btn-bottom mt-4"
              data-hover="Get Started"
              style={{ background: "#0e6497", margin: "0px auto"}}
            >
             Get Started
            </button>
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSix;
