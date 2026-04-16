"use client";

import { useState, useEffect } from "react";

const ScrollToTop = (props) => {
  const [stick, setStick] = useState(false);

  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let lastPosition = window.pageYOffset;

    const scrollHandler = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(false);
      } else if (scrollPos < lastPosition) {
        setStick(true);
      } else {
        setStick(false);
      }
      lastPosition = scrollPos;
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <button
      type="button"
      className={`scroll-top ${stick ? "show" : ""}`}
      onClick={onClickHandler}
      {...props}
    >
      <i className="fa-solid fa-chevron-up"></i>
    </button>
  );
};

export default ScrollToTop;
