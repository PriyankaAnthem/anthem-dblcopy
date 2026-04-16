"use client";

import { useState, useRef } from "react";
import SectionTitleTwo from "@/components/SectionTitles/SectionTitleTwo";
import AccordionWrap from "@/components/Accordion/AccordionWrap";

const Faq = ({ classOption }) => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);

  return (
    <div className={`faq-section section section-padding-top ${classOption}`}style={{paddingTop:"25px", paddingBottom:"0px"}}>
      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1 mb-n6">
          {/* FAQ Content */}
          <div className="col mb-6" data-aos="fade-up">
            <div className="faq-content">
              {/* <SectionTitleTwo
                subTitle="Frequently Asked Questions (FAQ)"
                // title can be added here if needed
              /> */}

              <AccordionWrap />
            </div>
          </div>

          {/* Optional Image / Animation Column */}
          <div
            className="col mb-6 ps-xl-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* You can add Tilt / Parallax images here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;