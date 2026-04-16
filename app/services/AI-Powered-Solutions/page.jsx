"use client";

import React from "react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import ServiceDesign from "@/container/service/serviceDesign";
import ServiceGrid from "@/components/Services/ServiceGrid";
import servicesData from "@/data/services/services.json";

const AIMLDevelopment = () => {
  const filterservices = "AI-Powered Solutions"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <>
      <SEO
        title="AI Development & AI App Solutions Company in Chandigarh | Anthem Infotech"
        description="Transform your business with AI-powered solutions, AI app development, and intelligent software. Our AI experts provide predictive analytics, content automation, and machine learning solutions for enterprises."
        ogtitle="AI Development & AI App Solutions Company in Chandigarh | Anthem Infotech"
        ogdescription="Transform your business with AI-powered solutions, AI app development, and intelligent software. Our AI experts provide predictive analytics, content automation, and machine learning solutions for enterprises."
      />

  
<BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Services/AI-Powered-Solutions",
        url: "https://antheminfotech.com/services/AI-Powered-Solutions",
      },
    ]}
  /> 
      <Breadcrumb
        image="images/bg/AI-ML-Development.webp"
        title="<span class='text-color-span'>AI-Powered</span> Solutions to <span class='text-color-span'>Elevate Creativity</span>, Streamline Processes, and <span class='text-color-span'>Boost Customer Engagement</span>"
        content="Home"
        contentTwo="services"
        contentThree="AI-Powered Solutions"
      />

      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />

     
    </>
  );
};

export default AIMLDevelopment;
