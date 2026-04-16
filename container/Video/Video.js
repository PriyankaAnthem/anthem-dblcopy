"use client";

import React, { useEffect, useRef } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import Parallax from "parallax-js";
import Link from "next/link";

const Video = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <div
      className="section section-padding overlay-two"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/images/bg/video-bg.webp)`,paddingTop:"20px",paddingBottom:"0px"
      }}
      
    >
      <div className="container text-center">
        <SectionTitle
          titleOption="color-light text-center"
          title="As a software service creative agency, we are dedicated to setting the standard of excellence in our industry."
        />

        {/* <Link href="/request-a-quote">
          <button className="play-btn icon video-popup">
            <i className="fas fa-play"></i>
          </button>
        </Link> */}
         <Link href="/request-a-quote" passHref className="btn btn-bottom mt-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-hover="Get Started"
                
                            style={{ background: "#0e6497" }}
                  
                  >
               
                  Get Started
                
              </Link>
      </div>

      <div className="shape shape-1" id="scene" ref={sceneEl}>
        <span data-depth="1">
          <img
            src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/images/shape-animation/newsletter-shape.png`}
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Video;