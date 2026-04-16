"use client";

import React from "react";

const UtilityNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark utility-navbar"
      style={{ backgroundColor: "rgba(11, 74, 112, 0.6)", padding: "0px" }}
    >
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-12 col-xl-8 d-flex justify-content-center justify-content-md-start align-items-center py-2 py-md-0">
            {/* You can add internal links here using Next.js Link */}
          </div>

          <div className="col-12 col-xl-2 d-flex justify-content-center justify-content-md-end align-items-center py-2 py-md-0 gap-3">
            <a
              href="tel:+919815340123"
              className="text-white text-decoration-none d-flex align-items-center utility-link me-2"
            >
              <i className="fas fa-phone me-2" />
              +91 9815-34-0123
            </a>
          </div>

          <div className="col-12 col-xl-2 d-flex justify-content-center justify-content-md-end align-items-center py-2 py-md-0 gap-3">
            <a
              href="mailto:info@antheminfotech.com"
              className="text-white text-decoration-none d-flex align-items-center utility-link me-2"
            >
              <i className="fas fa-envelope me-2" />
              info@antheminfotech.com
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UtilityNavbar;
