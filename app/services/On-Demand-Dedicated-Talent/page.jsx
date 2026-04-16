
"use client"
import React from "react";
import SEO from "../../../components/SEO.jsx";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb.js";
import BreadcrumbSchema from "../../../components/BreadCrumbSchema.jsx";
import ServiceDesign from "../../../container/service/serviceDesign.js";
import servicesData from "../../../data/services/services.json";
import ServiceGrid from "../../../components/Services/ServiceGrid.jsx";

const OnDemandDedicatedTalent = () => {
  let filterservices = "On-Demand Dedicated Talent"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];
  return (
    <>
      <SEO
        title="Hire Dedicated AI & Web Developers in Chandigarh | Anthem Infotech"
        description=" Access flexible, skilled on-demand developers for your projects. Our dedicated AI, web, and full-stack talent ensures fast delivery, high-quality solutions, and scalable support for your business.
"
        ogtitle="Hire Dedicated AI & Web Developers in Chandigarh | Anthem Infotech"
        ogdescription=" Access flexible, skilled on-demand developers for your projects. Our dedicated AI, web, and full-stack talent ensures fast delivery, high-quality solutions, and scalable support for your business.
"
      />

 <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Services/On-Demand-Dedicated-Talent",
        url: "https://antheminfotech.com/services/On-Demand-Dedicated-Talent",
      },
    ]}
  /> 
      <Breadcrumb
        image="images/bg/OnDemand-1.webp"
        title="Expert Professional <span class='text-color-span'>Designers, Developers</span>, and Other <span class='text-color-span'>Resources</span> Are Available on Fixed or Hourly Basis"
        content="Home"
        contentTwo="services"
        contentThree="On-Demand Dedicated Talent"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
     
    </>
  );
};

export default OnDemandDedicatedTalent;
