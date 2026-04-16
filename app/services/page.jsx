// app/services/page.jsx
"use client";

import React from "react";
import SEO from "../../components/SEO";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import ServiceIconBoxTwo from "../../container/service/ServiceIconBoxTwo";
import ServiceSkill from "../../container/service/ServiceSkill";
import AboutSix from "../../container/About/AboutSix";
import FunfactTwo from "../../container/Funfact/FunfactTwo";
import ContactInformationThree from "../../container/ContactInformation/ContactInformationThree";
import ScrollToTop from "../../components/ScrollToTop";
import servicesData from "../../data/services/services.json";
import BreadcrumbSchema from "../../components/BreadCrumbSchema";


const ServicePage = () => {
  const filterservices = "Custom Software Development"; // Title to filter
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <>
      {/* SEO Metadata */}

<SEO
  title="Custom Software Development Services | Anthem Infotech"
  description="Anthem Infotech provides custom software development services, including AI, web, and enterprise solutions for scalable business growth."
  ogtitle="Custom Software Development Services | Anthem Infotech"
  ogdescription="Anthem Infotech delivers custom software development, AI, and web solutions for startups and enterprises."
/>

 {/* BreadcrumbList Schema */}
  <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Services",
        url: "https://antheminfotech.com/services",
      },
    ]}
  />
     

      {/* Breadcrumb */}
      <Breadcrumb
        image="/assets/images/bg/breadcrumb-bg-four.webp"
        title="End-to-End Partner in <span class='text-color-span'>Developing, Scaling</span>, and <span class='text-color-span'>Transforming</span> Businesses with Technology"
        content="Home"
        contentTwo="Services"
      />
<h1 className="visually-hidden">
  Custom Software Development Services
</h1>

      {/* Service Sections */}
      <ServiceIconBoxTwo classOption="bg-white" />
      <ServiceSkill classOption="background-1" />
      <AboutSix classOption="bg-white" />
      {/* <FunfactTwo classOption="background-1" /> */}
      <ContactInformationThree classOption="bg-white" />
     
      <ScrollToTop />
    </>
  );
};

export default ServicePage;
