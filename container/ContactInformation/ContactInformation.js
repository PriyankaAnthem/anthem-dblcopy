"use client";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import contactData from "../../data/contactInfo/contactInfo.json";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ContactInfoItem from "../../components/ContactInfo/ContactInfoItem.jsx";
import Parallax from "parallax-js";
import Image from "next/image";

const ContactInformation = ({ classOption }) => {
  const sceneEl = useRef(null);

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
  
  const cloudBase = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL
  return (
    <div className={`section section-padding-t90-b100 ${classOption}`} style={{paddingTop:"20px",paddingBottom:"30px"}}>
      <div className="container shape-animate" >
        {/* <SectionTitle
          titleOption="section-title text-center mb-lg-2 mb-sm-8 mb-xs-8"
          title="Get in Touch with Us"
          subTitle="<span class='text-black'>Contact us for expert solutions and personalised support—call, email, or visit our office to start your project today.</span>"
        /> */}

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {contactData &&
            contactData.map((single, key) => {
              return (
                <div key={key} className="col mb-6" data-aos="fade-up">
                  <ContactInfoItem data={single} key={key} />
                </div>
              );
            })}
        </div>

        {/* <div className="shape shape-1" id="scene" ref={sceneEl}>
          <span data-depth="1">
           <Image
             src={`${cloudBase}/images/shape-animation/video-shape-1.png`}
              alt="shape"
              width={100} // adjust according to design
              height={100}
              priority
            />
          </span>
        </div> */}
      </div>
    </div>
  );
};

ContactInformation.propTypes = {
  classOption: PropTypes.string,
};
ContactInformation.defaultProps = {
  classOption: "section section-padding-t90-b100",
};

export default ContactInformation;






























