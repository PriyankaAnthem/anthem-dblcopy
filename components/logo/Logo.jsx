"use client";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ image }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches); // initial mode

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const appDarkMode = typeof window !== "undefined" 
    ? localStorage.getItem("appDarkMode") 
    : null;

  return (
    <div className="header-logo">
      <Link href="/" aria-label="Anthem Infotech Home">
        <Image
          className={appDarkMode? "dark-mode-logo" : "light-mode-logo"}
          src={image}
          alt="Anthem Infotech logo"
          width={140}   // adjust as per your design
          height={50}   // adjust as per your design
          priority      // eager load like before
        />
       

      </Link>
    </div>
  );
};

Logo.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Logo;