// pages/services/custom-software.js
import React from "react";
import SEO from "../../../components/SEO";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "../../../components/BreadCrumbSchema";
import ServiceDesign from "../../../container/service/serviceDesign";
import ServiceGrid from "../../../components/Services/ServiceGrid";
import servicesData from "../../../data/services/services.json";

const CustomSoftware = () => {
  // Filter service by title
  const filterservices = "Custom Software Development";
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];
    console.log("Filtered:", filteredServices);
  return (
    <>
      <SEO
        title="Custom Software Development Company in Chandigarh | Anthem Infotech"
        description="Delivering custom software solutions to meet your business needs. Our experts in AI development, full-stack, and web development create scalable and efficient software for enterprises and startups."
        ogtitle="Custom Software Development Company in Chandigarh | Anthem Infotech"
        ogdescription="Delivering custom software solutions to meet your business needs. Our experts in AI development, full-stack, and web development create scalable and efficient software for enterprises and startups."
      />
<BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Custom-Software",
        url: "https://antheminfotech.com/services/Custom-Software",
      },
    ]}
  /> 
      <Breadcrumb
        image="/images/bg/Custom-Software.webp"
        title="<span class='text-color-span'>Optimise</span> Your Operations with <span class='text-color-span'>Bespoke Software</span> Designed for <span class='text-color-span'>Efficiency</span> and <span class='text-color-span'>Scalability</span> Web & Mobile Apps"
        content="Home"
        contentTwo="services"
        contentThree="Custom Software Development"
      />

      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />

    
    </>
  );
};

export default CustomSoftware;
