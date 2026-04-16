"use client";

import React, { useState,useEffect } from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

function NewNavBar() {
    const [scale] = useState(1.04);

    // Helper to build full image URL from env variable
    const imgUrl = (path) =>
        `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}${path}`;
useEffect(() => {
  const menuItems = document.querySelectorAll(
    ".site-main-menu > ul > li.has-children"
  );

  const closeAll = () => {
    menuItems.forEach((item) => {
      item.classList.remove("open");
      const submenu = item.querySelector(".sub-menu, .mega-menu");
      if (submenu) {
        submenu.style.visibility = "hidden";
        submenu.style.opacity = "0";
        submenu.style.pointerEvents = "none";
        submenu.style.marginTop = "20px";
      }
    });
  };

  const handlers = [];

  menuItems.forEach((item) => {
    const link = item.querySelector("a");
    const submenu = item.querySelector(".sub-menu, .mega-menu");
    if (!link || !submenu) return;

    /* 🚫 HARD BLOCK HOVER (CAPTURE PHASE) */
    const killHover = (e) => {
      if (!item.classList.contains("open")) {
        e.stopImmediatePropagation();
        submenu.style.visibility = "hidden";
        submenu.style.opacity = "0";
        submenu.style.pointerEvents = "none";
      }
    };

    /* ✅ CLICK TO TOGGLE */
    const onClick = (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = item.classList.contains("open");
      closeAll();

      if (!isOpen) {
        item.classList.add("open");
        submenu.style.visibility = "visible";
        submenu.style.opacity = "1";
        submenu.style.pointerEvents = "auto";
        submenu.style.marginTop = "10px";
      }
    };

    /* 🔥 capture=true is the magic */
    item.addEventListener("mouseenter", killHover, true);
    item.addEventListener("mouseover", killHover, true);
    link.addEventListener("click", onClick);

    handlers.push({ item, link, killHover, onClick });
  });

  document.addEventListener("click", closeAll);

  return () => {
    document.removeEventListener("click", closeAll);
    handlers.forEach(({ item, link, killHover, onClick }) => {
      item.removeEventListener("mouseenter", killHover, true);
      item.removeEventListener("mouseover", killHover, true);
      link.removeEventListener("click", onClick);
    });
  };
}, []);

    return (
        <nav className="site-main-menu">
            <div className="ruby-menu-demo-header">
                <div className="ruby-wrapper">
                    <ul className="ruby-menu">
                        <li className="ruby-active-menu-item">
                            <Link href="/">
                                <span className="menu-text">Home</span>
                            </Link>
                        </li>
                        <li className="ruby-menu-mega-blog">
                            <Link href="/services">
                                <span className="menu-text">Services</span>
                            </Link>
                            <div className="mega-height">
                                <ul className="ruby-menu-mega-blog-nav">
                                    {/* Custom Software Section */}
                                    <li className="ruby-active-menu-item">
                                        <Link href="/services/Custom-Software">
                                            <span className="menu-text">Custom Software</span>
                                        </Link>

                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                               
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                      
                                                        <img
                                                            src={imgUrl("/images/mega-menu/Custom-Software/Content.svg")}
                                                            className="custom-svg"
                                                            alt="Content Management System"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Custom-Software">Content Management System</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={imgUrl("/images/mega-menu/Custom-Software/business-briefcase-thin.svg")}
                                                            className="custom-svg"
                                                            alt="Business Process Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Custom-Software">Business Process Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                    
                                                        <img
                                                            src={imgUrl("/images/mega-menu/Custom-Software/HumanResourceManagement.svg")}
                                                            className="custom-svg"
                                                            alt="Human Resource Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Custom-Software">Human Resource Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        <img
                                                            src={imgUrl(
                                                                "/images/mega-menu/Custom-Software/inventory.svg"
                                                            )}
                                                            className="custom-svg"
                                                            alt="Inventory Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Custom-Software">Inventory Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                 <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        <img
                                                            src={imgUrl(
                                                                "/images/mega-menu/Custom-Software/customer-service-agent-thin.svg"
                                                            )}
                                                            className="custom-svg"
                                                            alt="Customer Relationship Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Custom-Software">Customer Relationship Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>

                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        <img
                                                            src={imgUrl(
                                                                "/images/mega-menu/Custom-Software/financial-gain.svg"
                                                            )}
                                                            className="custom-svg"
                                                            alt="Financial Systems"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Custom-Software">Financial Systems</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        <img
                                                            src={imgUrl(
                                                                "/images/mega-menu/Custom-Software/truck.svg"
                                                            )}
                                                            className="custom-svg"
                                                            alt="Logistics Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Custom-Software">Logistics Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        <img
                                                            src={imgUrl(
                                                                "/images/mega-menu/Custom-Software/supply-chain-optimization-02.svg"
                                                            )}
                                                            className="custom-svg"
                                                            alt="Supply Chain Management (SCM)"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Custom-Software">Supply Chain Management (SCM)</a>
                                                        </span>
                                                    </Tilt>
                                                </div>



                                                
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>

                                    {/* Web & Mobile Apps Section */}
                                    <li className="hidden-md">
                                        <Link href="/services/Web-Mobile-Apps">
                                            <span className="menu-text">Web & Mobile Apps</span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={

                                                                imgUrl("/images/mega-menu/Web-Mobile-Apps/wordpress-thin.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="WordPress Websites"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Web-Mobile-Apps">WordPress Websites</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Web-Mobile-Apps/iOSAppDevelopment.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="iOS App Development"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Web-Mobile-Apps">iOS App Development</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Web-Mobile-Apps/android.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Android App Development"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Web-Mobile-Apps">Android App Development</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={

                                                                imgUrl("/images/mega-menu/Web-Mobile-Apps/code.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Progressive Web Apps"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Web-Mobile-Apps">Progressive Web Apps</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={

                                                                imgUrl("/images/mega-menu/Web-Mobile-Apps/app-developer.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Hybrid App Development"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Web-Mobile-Apps">Hybrid App Development</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={

                                                                imgUrl("/images/mega-menu/Web-Mobile-Apps/performance.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Performance Optimisation"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Web-Mobile-Apps">Performance Optimisation</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={

                                                                imgUrl("/images/mega-menu/Web-Mobile-Apps/api.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Web API Development"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Web-Mobile-Apps">Web API Development</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Web-Mobile-Apps/windows.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="App Integration"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Web-Mobile-Apps">App Integration</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>

                                    <li className="hidden-md">
                                        <Link
                                            href={
                                                "/services/AI-Powered-Solutions"
                                            }
                                        >
                                            <span className="menu-text">AI-Powered Solutions</span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/AI-Powered-Solutions/file-ai.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Predictive Analytics"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/AI-Powered-Solutions">Generative AI </a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(

                                                                    "/images/mega-menu/AI-Powered-Solutions/discussion.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Natural Language Processing"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/AI-Powered-Solutions">AI Chat Integration</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/AI-Powered-Solutions/chart-multi-type.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Recommendation Systems"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/AI-Powered-Solutions">Predictive Analytics</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/AI-Powered-Solutions/technologist.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Deep Learning Models"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/AI-Powered-Solutions">AI Analytics </a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/AI-Powered-Solutions/user-speaker.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Classification Algorithms"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/AI-Powered-Solutions">Natural Language Processing</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={

                                                                imgUrl("/images/mega-menu/AI-Powered-Solutions/DataExtraction.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Clustering Techniques"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/AI-Powered-Solutions">Machine Learning</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/AI-Powered-Solutions/AI-1.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Optimisation Algorithms"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/AI-Powered-Solutions">Deep Learning Models</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={
                                                "/services/Marketing-Automation"
                                            }
                                        >
                                            <span className="menu-text">Marketing Automation</span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Marketing-Automation/envelope-paper-email-thin.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Email Campaigns"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Marketing-Automation">Email Campaigns</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Marketing-Automation/share.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Social Media Automation"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Marketing-Automation">Social Media Automation</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Marketing-Automation/seo-marketing.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Search Engine Optimisation"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Marketing-Automation">Search Engine Optimisation</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Marketing-Automation/one-finger-click.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Pay-Per-Click Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Marketing-Automation">Pay-Per-Click Management</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={


                                                                imgUrl("/images/mega-menu/Marketing-Automation/Content.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Content Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Marketing-Automation">Content Management</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Marketing-Automation/user-analytics.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Analytics & Reporting"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Marketing-Automation">Analytics & Reporting</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Marketing-Automation/sms.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="SMS Marketing"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Marketing-Automation">SMS Marketing</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Marketing-Automation/customer-service.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="CRM Integration"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Marketing-Automation">CRM Integration</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={"/services/MVP-Development"}
                                        >
                                            <span className="menu-text">MVP Development</span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/MVP-Development/circuit.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Prototyping"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/MVP-Development">Prototyping</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/MVP-Development/user-interface.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="UX/UI Design"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/MVP-Development">UX/UI Design</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/MVP-Development/feedback2.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="User Feedback Integration"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/MVP-Development">User Feedback Integration</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/MVP-Development/design-and-development-02.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Iterative Development"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/MVP-Development">Iterative Development</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/MVP-Development/agile.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Agile Development"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/MVP-Development">Agile Development</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={

                                                                imgUrl(
                                                                    "/images/mega-menu/MVP-Development/jira.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Testing & QA"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/MVP-Development">Testing & QA</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/MVP-Development/launch.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Launch Strategy"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/MVP-Development">Launch Strategy</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/MVP-Development/performance.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Performance Analytics"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/MVP-Development">Performance Analytics</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={
                                                "/services/Enterprise-Software"
                                            }
                                        >
                                            <span className="menu-text">Enterprise Software</span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Enterprise-Software/security.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Security Solutions"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Enterprise-Software">Security Solutions</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Enterprise-Software/network-server-database.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Database Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Enterprise-Software">Database Management</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Enterprise-Software/integration.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="System Integration"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Enterprise-Software">System Integration</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Enterprise-Software/chart-multi-line.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Analytics Platforms"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Enterprise-Software">Analytics Platforms</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Enterprise-Software/get-ahead-of-risk-and-compliance.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Compliance Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Enterprise-Software">Compliance Management</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Enterprise-Software/workflow-diagram.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Workflow Automation"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Enterprise-Software">Workflow Automation</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={"/services/Data-Analysis-ETL"}
                                        >
                                            <span className="menu-text">Data Analysis & ETL</span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Data-Analysis-ETL/DataExtraction.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Data Extraction"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Data-Analysis-ETL">Data Extraction</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Data-Analysis-ETL/DataTransforming.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Data Transformation"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Data-Analysis-ETL">Data Transformation</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Data-Analysis-ETL/Dataloading.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Data Loading"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Data-Analysis-ETL">Data Loading</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Data-Analysis-ETL/CustomDashboards.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Custom Dashboards"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Data-Analysis-ETL">Custom Dashboards</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Data-Analysis-ETL/BussinessIntelligence.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Business Intelligence"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Data-Analysis-ETL">Business Intelligence</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Data-Analysis-ETL/database.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Big Data Solutions"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Data-Analysis-ETL">Big Data Solutions</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={

                                                                imgUrl(
                                                                    "/images/mega-menu/Data-Analysis-ETL/DataCleaning.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Data Cleaning"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/Data-Analysis-ETL">Data Cleaning</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link href={"/services/UI-UX-Design"}>
                                            <span className="menu-text">UI/UX Design </span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/UI-UX-Design/WebsiteDesignDevelopment.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Web Design"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/UI-UX-Design">Web Design</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/UI-UX-Design/Mobile-UI-Design.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="obile UI Design"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/UI-UX-Design">Mobile UI Design</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/UI-UX-Design/Prototyping.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Prototyping"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/UI-UX-Design">Prototyping</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/UI-UX-Design/Brand-Design.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Brand Design"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/UI-UX-Design">Brand Design</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/UI-UX-Design/Responsive.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Responsive Design"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/UI-UX-Design">Responsive Design</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/services/On-Demand-Dedicated-Talent"
                                            }
                                        >
                                            <span className="menu-text">
                                                On-Demand Dedicated Talent{" "}
                                            </span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/On-Demand-Dedicated-Talent/Dedicated-Developer.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Dedicated Professionals"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/On-Demand-Dedicated-Talent">Dedicated Professionals</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/On-Demand-Dedicated-Talent/man-technologist.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Remote Developers"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/On-Demand-Dedicated-Talent">Remote Developers</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/On-Demand-Dedicated-Talent/connection-thin.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Rapid Hiring"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/On-Demand-Dedicated-Talent">Rapid Hiring</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/On-Demand-Dedicated-Talent/woman-technologist.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Project-Specific Developers"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/On-Demand-Dedicated-Talent">Project-Specific Developers</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/On-Demand-Dedicated-Talent/share-knowledge.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Long-Term Partnerships"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/On-Demand-Dedicated-Talent">Long-Term Partnerships</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/On-Demand-Dedicated-Talent/people-dialogue.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="End-to-End Support"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="/services/On-Demand-Dedicated-Talent">End-to-End Support</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="ruby-menu-mega-blog">
                            <Link href={"/Home/Industries"}>
                                <span className="menu-text">Industries</span>
                            </Link>
                            <div className="mega-height">
                                <ul className="ruby-menu-mega-blog-nav">
                                    <li className="ruby-active-menu-item">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "Workforce Compliance Solutions".replace(/\s+/g, "-")
                                            }
                                        >
                                            <span className="menu-text">
                                                Workforce Compliance Solutions
                                            </span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Workforce-Compliance-Solutions/Compliance-Tracking.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Compliance Tracking"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" + "Workforce Compliance Solutions".replace(/\s+/g, "-")}>Compliance Tracking</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Workforce-Compliance-Solutions/Real-Time-Reporting.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Real-Time Reporting"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" + "Workforce Compliance Solutions".replace(/\s+/g, "-")}>Real-Time Reporting</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Workforce-Compliance-Solutions/Wage-Verification.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Wage Verification"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" + "Workforce Compliance Solutions".replace(/\s+/g, "-")}>Wage Verification</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Workforce-Compliance-Solutions/Training-Modules.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Training Modules"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" + "Workforce Compliance Solutions".replace(/\s+/g, "-")}>Training Modules</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Workforce-Compliance-Solutions/Risk-Assessment.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Risk Assessment"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" + "Workforce Compliance Solutions".replace(/\s+/g, "-")}>Risk Assessment</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Workforce-Compliance-Solutions/Financial-Audit.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Financial Audit"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" + "Workforce Compliance Solutions".replace(/\s+/g, "-")}>Financial Audit</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>

                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "Publishing Rights Management".replace(/\s+/g, "-")
                                            }
                                        >
                                            <span className="menu-text">
                                                Publishing Rights Management
                                            </span>
                                        </Link>

                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Publishing-Rights-Management/Digital-Rights-Management.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Digital Rights Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" +
                                                                "Publishing Rights Management".replace(/\s+/g, "-")}>Digital Rights Management</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Publishing-Rights-Management/Global-Search.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Global Search"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" +
                                                                "Publishing Rights Management".replace(/\s+/g, "-")}>Global Search</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Publishing-Rights-Management/Content-Protection.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Content Protection"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" +
                                                                "Publishing Rights Management".replace(/\s+/g, "-")}>Content Protection</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Publishing-Rights-Management/Content-Extraction.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Content Extraction"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" +
                                                                "Publishing Rights Management".replace(/\s+/g, "-")}>Content Extraction</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Publishing-Rights-Management/Web-Scraping.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Web Scraping"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" +
                                                                "Publishing Rights Management".replace(/\s+/g, "-")}>Web Scraping</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Publishing-Rights-Management/Real-Time-Reportingh.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Real-Time Reportingh"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={"/Home/Industries?Industrytype=" +
                                                                "Publishing Rights Management".replace(/\s+/g, "-")}>Real-Time Reporting</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "Financial Audit Compliance".replace(/\s+/g, "-")
                                            }
                                        >
                                            {" "}
                                            <span className="menu-text">
                                                Financial Audit Compliance Solutions
                                            </span>
                                        </Link>{" "}
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Financial-Audit-Compliance/Real-Time-Analytics.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Real-Time Analytics"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Financial Audit Compliance".replace(/\s+/g, "-")
                                                            }>Real-Time Analytics</a>
                                                        </span>{" "}
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Financial-Audit-Compliance/AI-Market-Predictions.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="AI Market Predictions"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Financial Audit Compliance".replace(/\s+/g, "-")
                                                            }>AI Market Predictions</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Financial-Audit-Compliance/Portfolio-Management.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Portfolio Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Financial Audit Compliance".replace(/\s+/g, "-")
                                                            }>Portfolio Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Financial-Audit-Compliance/Risk-Assessment.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Risk Assessment"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Financial Audit Compliance".replace(/\s+/g, "-")
                                                            }>Risk Assessment</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Financial-Audit-Compliance/Regulatory-Compliance.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Regulatory Compliance"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Financial Audit Compliance".replace(/\s+/g, "-")
                                                            }>Regulatory Compliance</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Financial-Audit-Compliance/Controls-management.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Controls management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Financial Audit Compliance".replace(/\s+/g, "-")
                                                            }>Controls management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "Food Ordering Solutions".replace(/\s+/g, "-")
                                            }
                                        >
                                            <span className="menu-text">Food Ordering Solutions</span>
                                        </Link>

                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Food-Ordering-Solutions/Google-Places-API.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Google Places API"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Food Ordering Solutions".replace(/\s+/g, "-")
                                                            }>Google Places API</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Food-Ordering-Solutions/Cart-Management.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Cart Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Food Ordering Solutions".replace(/\s+/g, "-")
                                                            }>Cart Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Food-Ordering-Solutions/Payment-Gateway-Integration.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Payment Gateway Integration"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Food Ordering Solutions".replace(/\s+/g, "-")
                                                            }>Payment Gateway Integration</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Food-Ordering-Solutions/Assign-Driver.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Assign Driver"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Food Ordering Solutions".replace(/\s+/g, "-")
                                                            }>Assign Driver</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Food-Ordering-Solutions/Food-Delivery.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Food Delivery"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Food Ordering Solutions".replace(/\s+/g, "-")
                                                            }>Food Delivery</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "Information Technology Solutions".replace(/\s+/g, "-")
                                            }
                                        >
                                            <span className="menu-text">
                                                Information Technology Solutions
                                            </span>
                                        </Link>

                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Information-Technology-Solutions/Custom-Software.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Custom Software"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Information Technology Solutions".replace(/\s+/g, "-")
                                                            }>Custom Software</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Information-Technology-Solutions/Cloud-Management.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Cloud Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Information Technology Solutions".replace(/\s+/g, "-")
                                                            }>Cloud Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Information-Technology-Solutions/Cybersecurity.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Cybersecurity"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Information Technology Solutions".replace(/\s+/g, "-")
                                                            }>Cybersecurity</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Information-Technology-Solutions/IT-Infrastructure.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="IT Infrastructure"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Information Technology Solutions".replace(/\s+/g, "-")
                                                            }>IT Infrastructure</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Information-Technology-Solutions/Digital-Transformation.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Digital Transformation"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Information Technology Solutions".replace(/\s+/g, "-")
                                                            }>Digital Transformation</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "Business Promotion Solutions".replace(/\s+/g, "-")
                                            }
                                        >
                                            <span className="menu-text">
                                                Business Promotion Solutions
                                            </span>
                                        </Link>

                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Business-Promotion-Solutions/Explainer-Video.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Explainer Video"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Business Promotion Solutions".replace(/\s+/g, "-")
                                                            }>Explainer Video</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Business-Promotion-Solutions/Product-Demo-Content.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Product Demo Content"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Business Promotion Solutions".replace(/\s+/g, "-")
                                                            }>Product Demo Content</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Business-Promotion-Solutions/SMS-Campaigns.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="SMS Campaigns"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Business Promotion Solutions".replace(/\s+/g, "-")
                                                            }>SMS Campaigns</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Business-Promotion-Solutions/PDF-Generation.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="PDF Generation"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Business Promotion Solutions".replace(/\s+/g, "-")
                                                            }>PDF Generation</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Business-Promotion-Solutions/Social-Wall.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Social Wall"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Business Promotion Solutions".replace(/\s+/g, "-")
                                                            }>Social Wall</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Business-Promotion-Solutions/WebSite-Content.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Web Site Content"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Business Promotion Solutions".replace(/\s+/g, "-")
                                                            }>Web Site Content</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Business-Promotion-Solutions/Reviews-Ratings.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Reviews & Ratings"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Business Promotion Solutions".replace(/\s+/g, "-")
                                                            }>Reviews & Ratings</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "HOA Automation Solutions".replace(/\s+/g, "-")
                                            }
                                        >
                                            <span className="menu-text">
                                                HOA Automation Solutions
                                            </span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/HOA-Automation-Solutions/Bulk-Email.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Bulk Email"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "HOA Automation Solutions".replace(/\s+/g, "-")
                                                            }>Bulk Email</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/HOA-Automation-Solutions/E-Voting-System.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="E-Voting System"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "HOA Automation Solutions".replace(/\s+/g, "-")
                                                            }>E-Voting System</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/HOA-Automation-Solutions/Document-Scanning.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Document Scanning"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "HOA Automation Solutions".replace(/\s+/g, "-")
                                                            }>Document Scanning</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/HOA-Automation-Solutions/MICR-Reading.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="MICR Reading"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "HOA Automation Solutions".replace(/\s+/g, "-")
                                                            }>MICR Reading</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/HOA-Automation-Solutions/Automated-Notifications.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Automated Notifications"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "HOA Automation Solutions".replace(/\s+/g, "-")
                                                            }>Automated Notifications</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>

                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "Logistics and Supply Chain Management".replace(
                                                    /\s+/g,
                                                    "-"
                                                )
                                            }
                                        >
                                            <span className="menu-text">
                                                Logistics & Supply Chain Management
                                            </span>
                                        </Link>

                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Logistics-and-Supply-Chain-Management/Fleet-Management.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Fleet Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Logistics and Supply Chain Management".replace(
                                                                    /\s+/g,
                                                                    "-"
                                                                )
                                                            }>Fleet Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Logistics-and-Supply-Chain-Management/Route-Optimization.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Route Optimization"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Logistics and Supply Chain Management".replace(
                                                                    /\s+/g,
                                                                    "-"
                                                                )
                                                            }>Route Optimization</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Logistics-and-Supply-Chain-Management/Real-Time-Tracking.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Real-Time Tracking"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Logistics and Supply Chain Management".replace(
                                                                    /\s+/g,
                                                                    "-"
                                                                )
                                                            }>Real-Time Tracking</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Logistics-and-Supply-Chain-Management/Predictive-Analytics.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Predictive Analytics"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Logistics and Supply Chain Management".replace(
                                                                    /\s+/g,
                                                                    "-"
                                                                )
                                                            }>Predictive Analytics</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Logistics-and-Supply-Chain-Management/AI-Driven-Automation.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="AI-Driven Automation"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Logistics and Supply Chain Management".replace(
                                                                    /\s+/g,
                                                                    "-"
                                                                )
                                                            }>AI-Driven Automation</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "Construction Industry Software".replace(/\s+/g, "-")
                                            }
                                        >
                                            <span className="menu-text">
                                                Construction Industry Software
                                            </span>
                                        </Link>
                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Construction-Industry-Software/Project-Management.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Project Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Construction Industry Software".replace(/\s+/g, "-")
                                                            }>Project Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Construction-Industry-Software/Cost-Estimation.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Cost Estimation"
                                                        />
                                                        <span className="menu-text">
                                                            <a href="#">Cost Estimation</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Construction-Industry-Software/Real-Time-Updates.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Real-Time Updates"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Construction Industry Software".replace(/\s+/g, "-")
                                                            }>Real-Time Updates</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Construction-Industry-Software/Risk-Management.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Risk Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Construction Industry Software".replace(/\s+/g, "-")
                                                            }>Risk Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Construction-Industry-Software/AI-Powered-Insights.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="AI-Powered Insights"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Construction Industry Software".replace(/\s+/g, "-")
                                                            }>AI-Powered Insights</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "Healthcare and Medical Solutions".replace(/\s+/g, "-")
                                            }
                                        >
                                            <span className="menu-text">
                                                Healthcare & Medical Solutions
                                            </span>
                                        </Link>

                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Healthcare-and-Medical-Solutions/Telemedicine.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Telemedicine"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Healthcare and Medical Solutions".replace(/\s+/g, "-")
                                                            }>Telemedicine</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Healthcare-and-Medical-Solutions/Appointment-Scheduling.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Appointment Scheduling"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Healthcare and Medical Solutions".replace(/\s+/g, "-")
                                                            }>Appointment Scheduling</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Healthcare-and-Medical-Solutions/EHR-Integration.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="EHR Integration"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Healthcare and Medical Solutions".replace(/\s+/g, "-")
                                                            }>EHR Integration</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Healthcare-and-Medical-Solutions/AI-Diagnostics.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="AI Diagnostics"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Healthcare and Medical Solutions".replace(/\s+/g, "-")
                                                            }>AI Diagnostics</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Healthcare-and-Medical-Solutions/Remote-Patient-Monitoring.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Remote Patient Monitoring"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Healthcare and Medical Solutions".replace(/\s+/g, "-")
                                                            }>Remote Patient Monitoring</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                    <li className="hidden-md">
                                        <Link
                                            href={

                                                "/Home/Industries?Industrytype=" +
                                                "Tourism and Travel Solutions".replace(/\s+/g, "-")
                                            }
                                        >
                                            <span className="menu-text">
                                                Tourism & Travel Solutions
                                            </span>
                                        </Link>

                                        <div className="ruby-grid ruby-grid-lined mega-height">
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Tourism-and-Travel-Solutions/Online-Bookings.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Online Bookings"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Tourism and Travel Solutions".replace(/\s+/g, "-")
                                                            }>Online Bookings</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Tourism-and-Travel-Solutions/Virtual-Tours.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Virtual Tours"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Tourism and Travel Solutions".replace(/\s+/g, "-")
                                                            }>Virtual Tours</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Tourism-and-Travel-Solutions/AI-Recommendations.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="AI Recommendations"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Tourism and Travel Solutions".replace(/\s+/g, "-")
                                                            }>AI Recommendations</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Tourism-and-Travel-Solutions/AI-Diagnostics.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="AI Diagnostics"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Tourism and Travel Solutions".replace(/\s+/g, "-")
                                                            }>AI Diagnostics</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                            <div className="ruby-row">
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Tourism-and-Travel-Solutions/Multilingual-Support.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Multilingual Support"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Tourism and Travel Solutions".replace(/\s+/g, "-")
                                                            }>Multilingual Support</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Tourism-and-Travel-Solutions/Real-Time-Updates.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Real-Time Updates"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Tourism and Travel Solutions".replace(/\s+/g, "-")
                                                            }>Real-Time Updates</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Tourism-and-Travel-Solutions/Reservation-Management.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="Reservation Management"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Tourism and Travel Solutions".replace(/\s+/g, "-")
                                                            }>Reservation Management</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                                <div className="ruby-col-3 text-center">
                                                    <Tilt scale={scale} transitionSpeed={4000}>
                                                        {" "}
                                                        <img
                                                            src={
                                                                imgUrl(
                                                                    "/images/mega-menu/Tourism-and-Travel-Solutions/API-Integration.svg")
                                                            }
                                                            className="custom-svg"
                                                            loading="lazy"
                                                            alt="API Integration"
                                                        />
                                                        <span className="menu-text">
                                                            <a href={

                                                                "/Home/Industries?Industrytype=" +
                                                                "Tourism and Travel Solutions".replace(/\s+/g, "-")
                                                            }>API Integration</a>
                                                        </span>
                                                    </Tilt>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="ruby-dropdown-toggle"></span>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link href="/careers">
                                <span className="menu-text">Career</span>
                            </Link>
                        </li>


                        <li>
                            <Link href="/OurWork">
                                <span className="menu-text">Portfolio</span>
                            </Link>
                            {/* <ul className="sub-menu">
                                <li>
                                    <Link href="/OurWork" target="_blank" rel="noopener noreferrer">
                                        <span className="menu-text">Our Work</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/technologies">
                                        <span className="menu-text">Technologies</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gallery">
                                        <span className="menu-text">Gallery</span>
                                    </Link>
                                </li>
                            </ul> */}
                        </li>

                        <li className="has-children dropdown">
                            <Link href="/about-us">
                                <span className="menu-text">About Us</span>
                            </Link>
                            <ul className="sub-menu">
                                {/* <li>
                                    <Link href="/about-us">
                                        <span className="menu-text">About Us</span>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/faqs">
                                        <span className="menu-text">FAQs</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/our-clients">
                                        <span className="menu-text">Our Clients</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/testimonials">
                                        <span className="menu-text">Testimonials</span>
                                    </Link>
                                </li>
                                 <li>
                                    <Link href="/gallery">
                                        <span className="menu-text">Gallery</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="/request-a-quote">
                                <span className="menu-text">Get a Quote</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact-us">
                                <span className="menu-text">Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NewNavBar;