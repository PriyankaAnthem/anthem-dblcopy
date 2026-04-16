"use client"
import React from "react";
import SEO from "../../../components/SEO.jsx";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb.js";
import BreadcrumbSchema from "../../../components/BreadCrumbSchema.jsx";
import ServiceDesign from "../../../container/service/serviceDesign.js";
import servicesData from "../../../data/services/services.json";
import ServiceGrid from "../../../components/Services/ServiceGrid.jsx";

const MVPDevelopment = () => {
  let filterservices = "MVP Development"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="MVP Development Company in Chandigarh | Anthem Infotech"
        description="Rapidly develop a Minimum Viable Product (MVP) to test, validate, and launch your idea. Our AI and web development experts help startups and businesses achieve fast time-to-market and product-market fit."
        ogtitle="MVP Development Company in Chandigarh | Anthem Infotech"
        ogdescription="Rapidly develop a Minimum Viable Product (MVP) to test, validate, and launch your idea. Our AI and web development experts help startups and businesses achieve fast time-to-market and product-market fit."
      />

     <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Services/MVP-Development",
        url: "https://antheminfotech.com/services/MVP-Development",
      },
    ]}
  /> 
      <Breadcrumb
        image="images/bg/MVP-Development.webp"
        title="Validate Your Market Idea with a <span class='text-color-span'>Minimum Viable Product</span> and <span class='text-color-span'>Agile Iterative</span> Process"
        content="Home"
        contentTwo="services"
        contentThree="MVP Development"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
     
    </React.Fragment>
  );
};

export default MVPDevelopment;
