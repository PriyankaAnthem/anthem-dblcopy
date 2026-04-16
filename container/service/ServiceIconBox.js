
"use client";

import React from "react";
import IconBoxData from "../../data/iconBox/icon-box.json";
import IconBox from "../../components/IconBox/IconBox.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";

const ServiceIconBox = ({ classOption}) => {
  return (
    <section className={`section section-padding-t90-b100  ${classOption}`} style={{ paddingTop: "20px", paddingBottom: "30px" }}>
      <div className="container">
        <SectionTitle
          title="Crafting seamless partnerships that deliver intelligent, future-ready solutions"
          subTitle="<span class='text-white'>Since 2011, we excel in AI-powered software development, ML-based automation, and modern mobile app engineering — building scalable web applications and advanced digital solutions tailored for measurable growth, operational efficiency, and long-term digital success.</span>"
        />
<div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {IconBoxData &&
            IconBoxData.slice(0, 8).map((single, key) => {
              return (
                <div key={key} className="col mb-6" data-aos="fade-up">
                  <IconBox classOption="box-border" data={single} key={key} />
                </div>
              );
            })}
        </div>
        
      </div>
    </section>
  );
};

export default ServiceIconBox;
