"use client"
import React from "react";
import SEO from "../../../components/SEO.jsx";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb.js";
import BreadcrumbSchema from "../../../components/BreadCrumbSchema.jsx";
import ServiceDesign from "../../../container/service/serviceDesign.js";
import servicesData from "../../../data/services/services.json";
import ServiceGrid from "../../../components/Services/ServiceGrid.jsx";

const EnterpriseSoftware = () => {
  let filterservices = "Enterprise Software"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Enterprise Software Development Company in Chandigarh | Anthem Infotech"
        description="Build scalable, secure enterprise software to improve data management, workflow efficiency, and operational performance. Anthem Infotech delivers custom enterprise solutions for long-term growth.
"
        ogtitle="Enterprise Software Development Company in Chandigarh | Anthem Infotech"
        ogdescription="Build scalable, secure enterprise software to improve data management, workflow efficiency, and operational performance. Anthem Infotech delivers custom enterprise solutions for long-term growth.
"
      />

  <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Services/Enterprise-Software",
        url: "https://antheminfotech.com/services/Enterprise-Software",
      },
    ]}
  /> 
      <Breadcrumb
        image="images/bg/Enterprise-Software.webp"
        title="Drive Business Growth with <span class='text-color-span'>Secure Software</span> for Large-Scale <span class='text-color-span'>Data Management</span> and <span class='text-color-span'>Integration</span>"
        content="Home"
        contentTwo="services"
        contentThree="Enterprise Software"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
    
    </React.Fragment>
  );
};

export default EnterpriseSoftware;
