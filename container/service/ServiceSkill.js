import { useState, useEffect, useRef } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const ServiceSkill = ({ classOption }) => {
  const [scale] = useState(1.04);
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
      className={`section  skill-section-padding-bottom ${classOption}`}
      data-bg-color="#f8faff"
      style={{ paddingTop: "20px"}}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 col-lg-6 order-lg-1 order-2"
            data-aos="fade-up"
          >
            <div className="progressbar-area mt-lg-0 mt-md-50 mt-sm-50 mt-40">
              <SectionTitleTwo
                subTitle="<span class='text-white'>Brand-first creative services</span>"
                title="Bringing unique and engaging experiences to your brand"
              />
             
              <div className="progress-bar--one">
                <div className="progress-charts">
                  <h2 className="heading">UX Design</h2>
                  <div className="single-progress">
                    <div
                      role="progressbar"
                      aria-label="UX Design Progress: 81%"
                      aria-valuenow="81"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="450"
                      className="progress-bar-container"
                    >
                      <ProgressBar
                        className="gradient-1"
                        now={81}
                        label={<span>81%</span>}
                      />
                    </div>
                  </div>
                </div>

                <div className="progress-charts">
                  <h2 className="heading">Marketing</h2>
                  <div className="single-progress">
                    <div
                      role="progressbar"
                      aria-label="Marketing Progress: 72%"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="450"
                      className="progress-bar-container"
                    >
                      <ProgressBar
                        className="gradient-2"
                        now={72}
                        label={<span>72%</span>}
                      />
                    </div>
                  </div>
                </div>

                <div className="progress-charts">
                  <h2 className="heading">Web Design</h2>
                  <div className="single-progress">
                    <div
                      role="progressbar"
                      aria-label="Web Design Progress: 81%"
                      aria-valuenow="81"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="450"
                      className="progress-bar-container"
                    >
                      <ProgressBar
                        className="gradient-3"
                        now={81}
                        label={<span>81%</span>}
                      />
                    </div>
                  </div>
                </div>

                <div className="progress-charts">
                  <h2 className="heading">Development</h2>
                  <div className="single-progress">
                    <div
                      role="progressbar"
                      aria-label="Development Progress: 81%"
                      aria-valuenow="81"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="450"
                      className="progress-bar-container"
                    >
                      <ProgressBar
                        className="gradient-4"
                        now={81}
                        label={<span>81%</span>}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="offset-xl-1 col-xl-6 col-lg-6 order-lg-2 order-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-image-area right-0 skill-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL + "/images/skill/skill-1.webp"}
                    alt="skill-1"
                  />
                </Tilt>
              </div>
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL + "/images/skill/skill-2.webp"}
                    alt="skill-2"
                  />
                </Tilt>
              </div>
              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  {/* <img
                    src={
                      process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL +
                      "/images/shape-animation/video-shape-1.png"
                    }
                    alt=""
                  /> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSkill;
