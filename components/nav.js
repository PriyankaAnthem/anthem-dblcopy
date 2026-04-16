import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Nav = (props) => {
  const logoAnimation = {
    opacity: 1,
    transition: "opacity 1s ease-in-out",
  };
  // Define the CSS animation within the template string
  const styles = `
    .logo-animation {
      display: inline-block;
      opacity: 0;
      animation: fadeInAnimation 1s ease-in-out forwards; /* Define your animation here */
    }
    @keyframes fadeInAnimation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <style>{styles}</style> {/* Inline styles within the component */}
      <div className="">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/#header">
            <img
              src="/img/Final-50-Text.png"
              alt="Logo"
              style={logoAnimation}
            />
          </a>{" "}
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
              <a href="/#services" className="page-scroll">
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
              <a href="/#about" className="page-scroll">
                About Us
              </a>
            </li>
            <li>
              <a href="/#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Right-aligned button
        <div className="col text-right">
          <a
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            }}
            href="/#features"
            className="btn btn-custom btn-lg page-scroll"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span style={{ marginLeft: "5px" }}>BACK</span>
          </a>
        </div> */}
      </div>
    </nav>
  );
};
export default Nav;
