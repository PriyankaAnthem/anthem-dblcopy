import PropTypes from "prop-types";
import React,{useEffect} from "react";
import TestimonialData from "../../data/testimonial/testimonial.json";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import Swiper, { SwiperSlide } from "../../components/swiper";

const TestimonialContainer = ({ classOption }) => {
  
  const sliderOptions = {
  loop: true,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: true,

  breakpoints: {
    // Mobile
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
      centeredSlides: false,
    },

    // Tablets
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },

    // Small laptops
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },

    // Desktops
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: true,
    },
  },
};
useEffect(() => {
  const equalizeHeights = () => {
    const cards = document.querySelectorAll(".static-testimonial");

    // Mobile: reset height to auto
    if (window.innerWidth < 768) {
      cards.forEach(card => (card.style.height = "auto"));
      return;
    }

    // Desktop: find max height
    let maxHeight = 0;
    cards.forEach(card => {
      card.style.height = "auto"; // reset before calculating
      if (card.offsetHeight > maxHeight) maxHeight = card.offsetHeight;
    });

    // Apply max height
    cards.forEach(card => {
      card.style.height = maxHeight + "px";
    });
  };

  equalizeHeights(); // initial calculation
  window.addEventListener("resize", equalizeHeights);

  return () => window.removeEventListener("resize", equalizeHeights);
}, []);

  return (
    <div
      className={`testimonial-section section section-padding-t90 ${classOption}`} style={{paddingTop:"20px",paddingBottom:"20px"}}>
      <div className="container-fluid ps-xl-16 ps-lg-3 ps-md-3 ps-sm-3 ps-3 pe-xl-16 pe-lg-3 pe-md-3 pe-sm-3 pe-3">
      {/* <div className="container-fluid ps-xl-0 ps-lg-2 ps-md-3 ps-sm-3 ps-3 pe-xl-16 pe-lg-3 pe-md-3 pe-sm-3 pe-3"> */}

        <SectionTitle
          headingOption="title fz-28"
          title="Hear From Our Clients"
         
        />

        <Swiper
          className="testimonial-slider"
          data-aos="fade-up"
          data-aos-delay="300"
          options={sliderOptions}
          
        >
          {TestimonialData &&
            TestimonialData.map((single, key) => {
              return (
                <SwiperSlide key={key}>
                  <Testimonial data={single} key={key} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

TestimonialContainer.propTypes = {
  classOption: PropTypes.string,
};
TestimonialContainer.defaultProps = {
  classOption:
    "testimonial-section section section-padding-t90 section-padding-bottom",
};

export default TestimonialContainer;
