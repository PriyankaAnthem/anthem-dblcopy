import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  const logoAnimation = {
    opacity: 1,
    transition: "opacity 1s ease-in-out",
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="/#header">
            <img
              src="/img/Final-50-Text.png"
              alt="Logo"
              style={logoAnimation}
            />
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#header" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <Link to="/Industries" className="page-scroll">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/PortfolioPage" className="page-scroll">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/careers" className="page-scroll">
                Career
              </Link>
            </li>
            <li>
              <Link to="/Brochure" className="page-scroll">
                Brochure
              </Link>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
