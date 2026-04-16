"use client";

import Link from "next/link";
import React from "react";
import FooterLinkItem from "./FooterLinkItem";
import Script from "next/script";
const Footer = () => {
const footerData = [
  {
    id: 1,
    title: "Quick Links",
    list: [
      {
        id: 1,
        text: "Home",
        url: "/",
      },
      {
        id: 2,
        text: "About Us",
        url: "/about-us",
      },
      {
        id: 3,
        text: "Services",
        url: "/services",
      },
      {
        id: 4,
        text: "Industries",
        url: "/Home/Industries",
      },
      {
        id: 5,
        text: "Portfolio",
        url: "/OurWork",
      },
    ],
  },
  {
    id: 2,
    title: "\u00A0",
    list: [
      {
        id: 6,
        text: "Career",
        url: "/careers",
      },
      {
        id: 7,
        text: "Contact Us",
        url: "/contact-us",
      },
      {
        id: 8,
        text: " Get a Quote",
        url: "/request-a-quote",
      },
    ],
  },
];

  return (

    <>
      <div
  className="footer-section section footer-bg-color"
  style={{ paddingTop: "30px", paddingBottom: "20px" }}
>
  <div className="container">
    {/* Reduced row margin */}
    <div className="row mb-4">
      {/* Footer Logo & Contact Info */}
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
        <div className="footer-widget">
          <div className="footer-logo mb-2">
            <h5 className="text-white mb-2">
              Anthem Infotech Pvt. Ltd.
            </h5>
            <p className="text-color-p mb-2" style={{ fontSize: "14px" }}>
              #11, Floor 11, Sushma Infinium, Chandigarh - Ambala Highway,
              Near Best Price Zirakpur, Punjab – 140603 India.
            </p>
          </div>

          <div className="footer-widget-content">
            <div className="content mb-2">
              <p className="mb-1">
                <a href="tel:9815340123">
                  <i className="fas fa-phone me-2" />
                 
                </a> +91 9815-34-0123
              </p>
              <p className="mb-1">
                <a href="mailto:info@antheminfotech.com">
                  <i className="fas fa-envelope me-2" />
                  
                </a>
                info@antheminfotech.com
              </p>
            </div>

            {/* Social icons tighter */}
            <div
              className="footer-social-inline"
              style={{ display: "flex", gap: "10px" }}
            >
              <a href="https://x.com/antheminfotech" aria-label="Twitter" target="_blank">
                <i className="fa-brands fa-square-x-twitter" />
              </a>
              <a
                href="https://www.facebook.com/AnthemInfotech"
                aria-label="Facebook"  target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </a>
              <a
                href="https://www.instagram.com/antheminfotech"
                aria-label="Instagram" target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://in.linkedin.com/company/anthem-infotech-pvt-ltd-"
                aria-label="LinkedIn" target="_blank"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
               {/* WhatsApp */}
  <a
    href="https://wa.me/919815340123"
    aria-label="WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-whatsapp" />
  </a>

  {/* Google Map */}
  <a
    href="https://www.google.com/maps/place/Anthem+Infotech+Pvt.+Ltd./@30.638553,76.821708,17z/data=!3m1!4b1!4m6!3m5!1s0x390feb34165bc719:0xeef887919eec714c!8m2!3d30.6385484!4d76.8242829!16s%2Fg%2F1tf9ln69"
    aria-label="Location"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-solid fa-location-dot" />
  </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12 mb-3">
        <div className="row justify-content-end text-start">
          {footerData.map((item) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mb-2"
            >
              <FooterLinkItem data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="row">
      <div className="col">
        <div className="row copyright align-items-center py-2">
          <div className="col-sm-6 text-sm-start text-center">
            <p className="mb-0" style={{ fontSize: "13px" }}>
              &copy; {new Date().getFullYear()}–
              {new Date().getFullYear() + 1}{" "}
              <strong>Anthem Infotech Private Limited.</strong>
            </p>
          </div>
          <div className="col-sm-6 text-sm-end text-center">
            <p className="mb-0" style={{ fontSize: "13px" }}>
              Powered by <strong>Anthem Infotech Pvt. Ltd.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*  Metricool tracking script (loaded after interactive) */}
        <Script id="metricool-tracker" strategy="afterInteractive">
          {`
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],
                  c=document.createElement("script");
              c.type="text/javascript";
              c.src="https://tracker.metricool.com/resources/be.js";
              c.onreadystatechange=a;
              c.onload=a;
              b.appendChild(c);
            }
            loadScript(function(){
              beTracker.t({hash:"ebd005992c92a3083d8882fcd675fdb6"});
            });
          `}
        </Script>
<style jsx>{`
  .footer-section,
  .footer-section p,
  .footer-section a
  {
    color: #34cccf;
  }

  .footer-section a {
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-section i{
  color:#ffffff;
  }

  .footer-section i:hover{
  color:#34cccf;
  }

  /* Footer headings */
  .footer-section h5 {
    color: #34cccf;
  }

  /* Copyright text */
  .footer-section .copyright p,
  .footer-section .copyright strong {
    color:#34cccf;
  }
`}</style>


    </>
  
  );
};

export default Footer;
