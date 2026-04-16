"use client"; // Mark as client component

import React from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import CareerFrom from "../../components/CareerFrom/CareerFrom";
import { style } from "d3-selection";

const CareerFromContainer = ({ classOption }) => {
  return (
    <div
      className={`contact-form-section section section-padding-t90-b100 ${classOption}`}
      style={{ paddingTop: "20px",paddingBottom: "20px" }}
    >
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8">
            <SectionTitle
              headingOption="fz-32"
              title="Join Us at Anthem Infotech"
              subTitle="Grow your career at Anthem Infotech with opportunities in web development, AI solutions, and custom software development in a professional IT environment."
              // subTitle="We make it easy for talented individuals to connect and grow with us. Whether you're starting your career or looking to advance, exciting opportunities await"
            />
            <CareerFrom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerFromContainer;
