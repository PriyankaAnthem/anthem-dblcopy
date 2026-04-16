"use client"
import React from "react";
import SEO from "../../../components/SEO.jsx";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb.js";
import BreadcrumbSchema from "../../../components/BreadCrumbSchema.jsx";
import ServiceDesign from "../../../container/service/serviceDesign.js";
import servicesData from "../../../data/services/services.json";
import ServiceGrid from "../../../components/Services/ServiceGrid.jsx";

const MarketingAutomation = () => {
  let filterservices = "Marketing Automation"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];
  return (
    <>
      <SEO
        title="Marketing Automation Services in Chandigarh | Anthem Infotech"
        description="Automate and optimise your marketing campaigns with AI-driven tools. Enhance engagement, increase ROI, and streamline marketing strategies with Anthem Infotech’s digital marketing and automation expertise."
        ogtitle="Marketing Automation Services in Chandigarh | Anthem Infotech"
        ogdescription="Automate and optimise your marketing campaigns with AI-driven tools. Enhance engagement, increase ROI, and streamline marketing strategies with Anthem Infotech’s digital marketing and automation expertise."
      />
<BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Services/Marketing-Automation",
        url: "https://antheminfotech.com/services/Marketing-Automation",
      },
    ]}
  /> 
  
      <Breadcrumb
        image="images/bg/Marketing-Automation.webp"
        title="Enhance <span class='text-color-span'>Lead Generation</span> and <span class='text-color-span'>Customer Engagement</span> with Streamlined <span class='text-color-span'>Marketing Workflows</span>"
        content="Home"
        contentTwo="services"
        contentThree="Marketing Automation"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
     
    </>
  );
};

export default MarketingAutomation;
