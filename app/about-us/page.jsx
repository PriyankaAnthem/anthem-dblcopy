"use client";

import React from "react";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import IntroTwo from "@/container/IntroSlider/IntroTwo";
import AboutFour from "@/container/About/AboutFour";
import Video from "@/container/Video/Video";
import AboutFive from "@/container/About/AboutFive";
import TestimonialContainer from "@/container/Testimonial/TestimonialContainer";
import TestimonialQuote from "../../container/Testimonial/TestimonialQuote";
import CallToActionTwo from "@/container/CallToAction/CallToActionTwo";
import Script from "next/script";


const AboutUs = ({classOption}) => {
  return (
    <>
      {/* Structured Data - AboutPage */}
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Anthem Infotech",
            "description": "Leading Web Development and AI Software Company in Chandigarh, India since 2011",
            "url": "https://antheminfotech.com/about-us",
           
          }),
        }}
      />

      
        {/* BreadcrumbList Schema */}
  <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Contact Us",
        url: "https://antheminfotech.com/contact-us",
      },
    ]}
  />
      {/* Breadcrumb */}
      <Breadcrumb
        image="/images/bg/breadcrumb-bg.webp"
        title="Powering  <span class='text-color-span'>Web</span> &  <span class='text-color-span'> AI Innovation</span>"
        content="Home"
        contentTwo="About Us"
      />
<h1 className="visually-hidden">About Anthem Infotech – Web & AI Software Development Company</h1>
      <AboutFour classOption="bg-white" />
      <Video />
      <AboutFive classOption="bg-white" />
      <CallToActionTwo classOption="bg-white" />


      {/* <IntroTwo />
      <AboutFour classOption="bg-white" />
      <Video />
      <AboutFive classOption="bg-white" />
      <CallToActionTwo classOption="bg-white" /> */}
       
  <div className={`contact-form-section  ${classOption}`}>
     
    

    
{/*         
            <TestimonialContainer classOption="background-1" /> */}
            <TestimonialQuote classOption="background-1"/>
          
         
       
  
    </div>
    
    </>
  );
};

export default AboutUs;


