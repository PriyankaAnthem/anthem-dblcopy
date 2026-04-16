"use client"; // Ensure this component is client-side only

import { useEffect, useRef } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import Link from "next/link";

const Contactsection = ({ classOption }) => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && sceneEl.current) {
      const Parallax = require("parallax-js");
      const parallaxInstance = new Parallax(sceneEl.current, { relativeInput: true });
      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }
  }, []);

  return (
    <div
      className={`section  section-padding-t90-b90 newsletter-section ${classOption}`}
      style={{
    paddingTop:"10px",paddingBottom:"10px"
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className="cta-content text-center">
              <SectionTitle
                titleOption="text-center mb-0"
                title="Contact Us – Let’s Build Your Next Digital Solution"
subTitle="<p>Anthem Infotech is a trusted web development company in Chandigarh and a growing IT company in Zirakpur, providing AI development, chatbot solutions, and custom software services. Our team helps businesses build scalable and innovative digital products from idea to deployment.</p>"
              />
              <Link href="/request-a-quote" passHref className="btn btn-bottom mt-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-hover="Get Started"
                
                            style={{ background: "#0e6497" }}
                  
                  >
               
                  Get Started
                
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="shape shape-1" id="scene" ref={sceneEl}>
        <span data-depth="1">
          <img
            src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/images/shape-animation/newsletter-shape.png`}
            alt=""
          />
        </span>
      </div> */}
    </div>
  );
};
export default Contactsection;
