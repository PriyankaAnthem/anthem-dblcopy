"use client";

import React from "react";
import IntroData from "../../public/data/intro/intro.json";
import Intro from "../../components/Intro/Intro.jsx";
import { Swiper as SwiperSlider, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { Navigation, Autoplay, EffectFade } from "swiper";

const IntroSlider = ({ classOption = "" }) => {
  const swiperOption = {
    loop: true,
    speed: 2000,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  };

  return (
    <div className={`intro-slider-wrap section ${classOption}`}>
      <SwiperSlider
        modules={[Navigation, Autoplay, EffectFade]}
        {...swiperOption}
        className="intro-slider"
      >
        {IntroData &&
          IntroData.map((single, index) => (
            <SwiperSlide key={index}>
              <Intro data={single} />
            </SwiperSlide>
          ))}
      </SwiperSlider>
    </div>
  );
};

export default IntroSlider;