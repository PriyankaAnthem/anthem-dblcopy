
"use client"
import React from "react";
import SEO from "../../../components/SEO.jsx";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb.js";
import BreadcrumbSchema from "../../../components/BreadCrumbSchema.jsx";
import ServiceDesign from "../../../container/service/serviceDesign.js";
import servicesData from "../../../data/services/services.json";
import ServiceGrid from "../../../components/Services/ServiceGrid.jsx";

const UIUXDesign = () => {
  let filterservices = "UI/UX Design"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <>
      <SEO
        title="UI/UX Design Company in Chandigarh | Anthem Infotech
"
        description=" Design intuitive and engaging user interfaces for web and mobile apps. Our user-centred UI/UX design services enhance usability, increase engagement, and deliver a seamless digital experience."
        ogtitle="UI/UX Design Company in Chandigarh | Anthem Infotech
"
        ogdescription=" Design intuitive and engaging user interfaces for web and mobile apps. Our user-centred UI/UX design services enhance usability, increase engagement, and deliver a seamless digital experience."
      />
<BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Services/UI-UX-Design",
        url: "https://antheminfotech.com/services/UI-UX-Design",
      },
    ]}
  /> 
   


      <Breadcrumb
        image="images/bg/ui-ux.webp"
        title="<span class='text-color-span'>Craft Engaging</span> User Experiences with <span class='text-color-span'>Intuitive</span> and Visually Appealing <span class='text-color-span'>Digital Interfaces</span>"
        content="Home"
        contentTwo="services"
        contentThree="UI/UX Design"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
     
    </>
  );
};

export default UIUXDesign;
