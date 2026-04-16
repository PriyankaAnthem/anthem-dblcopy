"use client"; 

import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import "./Industries.css";

const slides = [
  {
    image: "/img/Screenshot_34.png",
    title: "TRUST, COMMITMENT & DELIVERY1",
    description: "Description 1",
  },
  {
    image: "/img/Screenshot_35.png",
    title: "TRUST, COMMITMENT & DELIVERY2",
    description: "Description 2",
  },
  {
    image: "/img/Screenshot_38.png",
    title: "TRUST, COMMITMENT & DELIVERY3",
    description: "Description 3",
  },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const headerContentAnimation = useSpring({
    from: { transform: "translateZ(-100px) rotateX(45deg)", opacity: 0 },
    to: { transform: "translateZ(0px) rotateX(0deg)", opacity: 1 },
    delay: 500,
  });

  const sliderAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <animated.header id="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <animated.div style={sliderAnimation}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentSlide ? "block" : "none",
                    flex: 1,
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    zIndex: 0,
                    marginRight: "40px",
                  }}
                >
                  <h1 className="image-title">{slide.title}</h1>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1200} // set your slider width
                    height={600} // set your slider height
                    style={{ objectFit: "cover", width: "100%", height: "90%" }}
                    priority
                  />
                </div>
              ))}
            </animated.div>
          </div>
        </div>
      </div>
    </animated.header>
  );
};

export default Header;
