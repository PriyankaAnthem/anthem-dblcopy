'use client'

import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import SectionTitle from '../SectionTitles/SectionTitle';
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const HomeAbout = ({ classOption }) => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);
  const [didViewCountUp, setDidViewCountUp] = useState(false);
 


  const { ref: clientsRef, inView: clientsInView } = useInView({ triggerOnce: true, rootMargin: '0px 0px -10% 0px' });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true, rootMargin: '0px 0px -10% 0px' });

  


  //  Corrected: state updates inside useEffect
  useEffect(() => {
    if ((clientsInView || projectsInView) && !didViewCountUp) {
      setDidViewCountUp(true);
    }
  }, [clientsInView, projectsInView, didViewCountUp]);

  useEffect(() => {
    if (!sceneEl.current) return;
    const parallaxInstance = new Parallax(sceneEl.current, { relativeInput: true });
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, []);

  const aboutImage1 = `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/images/about/home-one-about/home_agency_about_1.webp`;
  const aboutImage2 = `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/images/about/home-one-about/home_agency_about_2.webp`;
  const aboutShape = `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/images/shape-animation/about-shape-1.png`;

  return (

    <>
     <div className={`section section-padding-t90 section-padding-bottom  ${classOption}`}style={{ paddingTop: "20px"}}>
      <div className="container">
       
<SectionTitle
  title="Anthem Infotech – Smart Custom Software & AI Solutions Built to Grow Your Business."
  subTitle="Providing advanced web, AI, and custom software technologies that help businesses thrive, improve efficiency, and stay ahead in today’s fast-moving digital landscape."
  className="!leading-normal !pb-1 !overflow-visible   text-[18px] md:text-[28px]"
/>

        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12">
            <div className="about-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img src={aboutImage1} alt="home_agency_about" loading="lazy" />
                </Tilt>
              </div>

              <div className="about-image ">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img src={aboutImage2} alt="home_agency_about" loading="lazy" />
                </Tilt>
              </div>

              {/* <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1"><img src={aboutShape} alt="about-shape" loading="lazy" /></span>
              </div> */}
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 col-12 ">
            <div className="about-content-area">
              <SectionTitleTwo
                // subTitle="Trust, Commitment and Delivery"
                title="We streamline and automate core business processes."
              />

              <div className="row mb-n6 mt-5 text-lg-start">
                <div className="col-md-5 col-sm-6 col-12 mb-6">
                  <div className="about-funfact">
                    <div className="number" ref={clientsRef}>
                      <CountUp end={didViewCountUp ? 50 : 0} />+
                    </div>
                    <h6 className="text">Happy Clients</h6>
                  </div>
                </div>

                <div className="col-md-5 col-sm-6 col-12 mb-6">
                  <div className="about-funfact">
                    <div className="number" ref={projectsRef}>
                      <CountUp end={didViewCountUp ? 120 : 0} />+
                    </div>
                    <h6 className="text">Completed Projects</h6>
                  </div>
                </div>
              </div>

              <p className="justify-content">
                At Anthem Infotech, we build trust through consistent commitment and reliable delivery. By automating manual workflows with AI-enabled and custom software solutions, we help organisations optimise operations, improve efficiency, and stay ahead in today’s fast-changing digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default HomeAbout;