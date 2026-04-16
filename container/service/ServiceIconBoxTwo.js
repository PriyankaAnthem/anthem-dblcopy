"use client";

import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import IconBoxData from "../../data/iconBox/icon-box.json";
import IconBox from "../../components/IconBox/IconBox.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import Parallax from "parallax-js";
import Link from "next/link";

const ServiceIconBoxTwo = ({ classOption }) => {
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
      className={`section section-padding-t90 section-padding-b90 ${classOption}`}
      style={{
    paddingTop: "20px",
    paddingBottom: "20px",
 
  }}
    >
      <div className="container">
        <SectionTitle
          headingOption="fz-32"
          title="Our Expertise, Your Advantage"
          subTitle="Discover a range of tailored technology solutions designed to simplify operations, boost innovation, and drive growth, all crafted by our experienced development team."
        />

        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 icon-box-shape-animation">
          {IconBoxData &&
            IconBoxData.slice(0, 8).map((single, key) => (
              <div
                key={key}
                className="col mb-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <IconBox classOption="box-border" data={single} />
              </div>
            ))}
          <div className="shape shape-1" id="scene" ref={sceneEl}>
            <span data-depth="1">
              <img
                src={
                  process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL +
                  "/images/shape-animation/video-shape-1.png"
                }
                alt="video-shape-1"
              />
            </span>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-center mt-4 ">
          <Link href="/technologies" passHref>
            <button
              type="button"
              className="btn btn-bottom"
              data-hover="Our Technologies"
              style={{ background: "#0e6497", margin: "0px auto" }}
            >
              Our Technologies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceIconBoxTwo.propTypes = {
  classOption: PropTypes.string,
};

ServiceIconBoxTwo.defaultProps = {
  classOption: "section section-padding-t90 section-padding-bottom",
};

export default ServiceIconBoxTwo;
