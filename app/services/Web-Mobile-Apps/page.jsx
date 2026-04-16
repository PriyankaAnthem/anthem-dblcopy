"use client";
import React from "react";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "../../../components/BreadCrumbSchema";
import ServiceDesign from "../../../container/service/serviceDesign";
import ServiceGrid from "../../../components/Services/ServiceGrid";
import servicesData from "../../../data/services/services.json";
import SEO from "../../../components/SEO";

const WebMobileApps = () => {
  const filterservices = "Web & Mobile Apps";
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <>
      <SEO
        title="Web & Mobile App Development Company in Chandigarh | Anthem Infotech"
        description="Build high-performance web and mobile applications with Anthem Infotech. Our team specializes in cross-platform app development, AI-powered apps, and user-focused interfaces to enhance business growth."
        ogtitle="Web & Mobile App Development Company in Chandigarh | Anthem Infotech"
        ogdescription="Build high-performance web and mobile applications with Anthem Infotech. Our team specializes in cross-platform app development, AI-powered apps, and user-focused interfaces to enhance business growth."
      />

 
<BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Services/Web-Mobile-Apps",
        url: "https://antheminfotech.com/services/Web-Mobile-Apps",
      },
    ]}
  /> 
      <Breadcrumb
        image="images/bg/Web-Mobile-Apps.webp"
        title="Deliver <span class='text-color-span'>Seamless User Experiences</span> with Our <span class='text-color-span'>Responsive</span> and <span class='text-color-span'>Cross-Platform</span> Solutions"
        content="Home"
        contentTwo="services"
        contentThree="Web & Mobile Apps"
      />

      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />

   
    </>
  );
};

export default WebMobileApps;
