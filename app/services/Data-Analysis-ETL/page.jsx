"use client"
import React from "react";
import SEO from "../../../components/SEO.jsx";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb.js";
import BreadcrumbSchema from "../../../components/BreadCrumbSchema.jsx";
import ServiceDesign from "../../../container/service/serviceDesign.js";
import servicesData from "../../../data/services/services.json";
import ServiceGrid from "../../../components/Services/ServiceGrid.jsx";

const DataAnalysisETL = () => {
  let filterservices = "Data Analysis & ETL"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Data Analysis & ETL Solutions Company in Chandigarh | Anthem Infotech"
        description=" Unlock the power of your data with data analysis, ETL pipelines, and custom dashboards. Make smarter, data-driven decisions with our AI-enabled analytics solutions.
"
        ogtitle="Data Analysis & ETL Solutions Company in Chandigarh | Anthem InfotechL"
        ogdescription=" Unlock the power of your data with data analysis, ETL pipelines, and custom dashboards. Make smarter, data-driven decisions with our AI-enabled analytics solutions.
"
      />

  <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Services/Data-Analysis-ETL",
        url: "https://antheminfotech.com/services/Data-Analysis-ETL",
      },
    ]}
  /> 
      <Breadcrumb
        image="images/bg/Data-Analysis-ETL.webp"
        title="<span class='text-color-span'>Empower</span> Your Decision-Making with Comprehensive <span class='text-color-span'>Data Solutions</span> and <span class='text-color-span'>Custom Dashboards</span>"
        content="Home"
        contentTwo="services"
        contentThree="Data Analysis & ETL"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
   
    </React.Fragment>
  );
};

export default DataAnalysisETL;
