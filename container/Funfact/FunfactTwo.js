"use client";

import React from "react";
import CounterUpData from "../../data/counter/counterText.json";
import CounterUpItem from "../../components/CounterUp/CounterUpItem.jsx";

const FunfactTwo = ({ classOption = "" }) => {
  return (
    <section className={`section section-padding-t90 ${classOption}`} style={{ paddingTop: "20px",paddingBottom: "40px",}}>
      <div className="container">
        <div className="section-title text-center">
          <h2 className="title fz-32">
            We partner with our clients to tackle business challenges, enhance visibility, and deliver remarkable, unexpected results
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
              {CounterUpData &&
                CounterUpData.map((single, key) => (
                  <div
                    key={key}
                    className="col mb-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <CounterUpItem data={single} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunfactTwo;
