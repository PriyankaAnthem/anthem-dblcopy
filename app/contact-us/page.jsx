import React from "react";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import IntroThree from "@/container/IntroSlider/IntroThree";
import ContactInformation from "../../container/ContactInformation/ContactInformation";
import Contactsection from "../../container/CallToAction/Contactsection";
import GoogleMap from "../../container/Map/GoogleMap";

import ContactFromContainer from "../../container/ContactFromContainer/ContactFromContainer";
import Script from "next/script";

export const metadata = {
  title: "Contact Anthem Infotech - Web Development & AI Experts in Chandigarh",
  description: "Ready to start your project? Contact the leading Custom Software Development and Web Development Company in Chandigarh for a free consultation. Talk to our AI experts today! Get expert advice on Web Development, AI Solutions, and Custom Software Development.",

  openGraph: {
    title: "Contact Anthem Infotech - Web Development & AI Experts in Chandigarh",
    description: "Ready to start your project? Contact the leading Custom Software Development and Web Development Company in Chandigarh for a free consultation. Talk to our AI experts today!",
    url: "https://antheminfotech.com/contact-us",
    siteName: "Anthem Infotech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Anthem Infotech - Web Development & AI Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Anthem Infotech - Web Development & AI Experts in Chandigarh",
    description: "Ready to start your project? Contact the leading Custom Software Development and Web Development Company in Chandigarh for a free consultation.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://antheminfotech.com/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ContactUs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Anthem Infotech",
    "description": "Contact the leading Web Development and AI Solutions company in Chandigarh, India",
    "url": "https://antheminfotech.com/contact-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "Anthem Infotech Private Limited",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chandigarh",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi"]
      }
    }
  };

  return (
    <>
      {/* Structured Data - ContactPage */}
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
         {/* BreadcrumbList Schema */}
  <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Contact Us",
        url: "https://antheminfotech.com/contact-us",
      },
    ]}
  />
      {/* Breadcrumb */}
      <Breadcrumb
        image="/images/bg/breadcrumb-bg.webp"
        title=" <span class='text-color-span'>Get in Touch </span> with Anthem Infotech"
        content="Home"
        contentTwo="Contact Us"
      />
      
        <ContactInformation classOption="bg-white" />
         <ContactFromContainer classOption="background-1" />
          
      <IntroThree />
    
       <GoogleMap classOption="bg-white" />
           <Contactsection classOption="bg-white" />
      
      {/* <IntroThree />
      <ContactInformation classOption="bg-white" />
      <GoogleMap classOption="bg-white" />
      <ContactFromContainer classOption="background-1" /> */}
    </>
  );
};

export default ContactUs;