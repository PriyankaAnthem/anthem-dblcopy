"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import  Link from "next/link";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.jsx";

const IntroThree = () => {
  return (
  <>
  <style>
{`
  /* MOBILE ONLY */
  @media (max-width: 768px) {

    .intro-section.bg-video {
      height: 60vh;          /* 🔥 reduce overall hero height */
      min-height: unset;
      padding-top: 16px;
      padding-bottom: 16px;
    }

    .intro-section.bg-video video {
      height: 100%;
    }

    .intro-content-two {
      margin-top: 0 !important;
      padding-bottom: 8px;
    }

    .intro-content-two .desc p {
      margin-bottom: 10px;
      font-size: 14px;
    }

    .intro-content-two .btn {
      margin-bottom: 6px;
      padding: 8px 14px;
      font-size: 14px;
    }

    .intro-content-two h1 {
      font-size: 22px;
      line-height: 1.3;
    }
  }
`}
</style>

   <BackgroundVideo
      videoSrc="/images/videos/contactus-bg.mp4"
      overlayColor="rgba(0,0,0,0.4)"
      className="intro-section bg-video"
    >
      <div className="container mt-0">
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            {/* <div className="intro-content-two headline-active text-center mt-md-8 mt-sm-8 mt-xs-8"> */}
                 <div className="intro-content-two headline-active text-center">
              <h1 className="title ah-headline pt-0">
                Contact Us For{" "}
                <span className="text-color-span">
                  <Typewriter
                    options={{
                      strings: [
                        "Results",
                        "Growth",
                        "Solutions",
                        "Innovation",
                        "Support",
                        "Insights",
                        "Expertise",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 110,
                    }}
                  />
                </span>
               Tailored to Your Brand & Business
              </h1>
              <div className="desc">
                <p>
                 We are a professional IT company based in India, helping brands strategise, design, develop digital solutions, and build custom software to accelerate business growth.
                </p>
              </div>
              <Link
                href={process.env.NEXT_PUBLIC_URL + "/request-a-quote"}
                className="btn btn btn-bottom"
                data-hover="Get Started"
                  style={{ background: "#0e6497" }}
              >
                Get Started
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_URL + "/services"}
                className="btn btn btn-bottom"
                data-hover="Learn More"
                  style={{ background: "#0e6497" }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BackgroundVideo>
  
  
  
  
  </>
   
  );
};

export default IntroThree;













