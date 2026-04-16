import React from "react";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import BrandContainer from "../../container/Brand/BrandContainer";
import ClientGallery from "../../container/ImageGallery/Clientgallery";
import Clientsection from "../../container/CallToAction/Clientsection";
import Script from "next/script";

export const metadata = {
  title: "Our Clients - Trusted by Leading Brands | Anthem Infotech",
  description: "Anthem Infotech is trusted by leading brands across various industries. Our clients benefit from innovative technology solutions that drive business growth and transformation. See who trusts us for Web Development, AI Solutions, and Custom Software Development.",
  keywords: [
    "Anthem Infotech Clients",
    "Our Clients",
    "Client Portfolio",
    "Trusted Software Development Company",
    "Leading Brands",
    "Client Success Stories",
  ],
  openGraph: {
    title: "Our Clients - Trusted by Leading Brands | Anthem Infotech",
    description: "Anthem Infotech is trusted by leading brands across various industries. Our clients benefit from innovative technology solutions that drive business growth and transformation.",
    url: "https://antheminfotech.com/our-clients",
    siteName: "Anthem Infotech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anthem Infotech - Our Clients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients - Trusted by Leading Brands | Anthem Infotech",
    description: "Anthem Infotech is trusted by leading brands across various industries.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://antheminfotech.com/our-clients",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const OurClients = () => {
  return (
    <>
      {/* Structured Data - ItemList */}
      <Script
        id="clients-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Anthem Infotech Clients",
            "description": "Leading brands that trust Anthem Infotech for their software development needs",
            "url": "https://antheminfotech.com/our-clients"
          }),
        }}
      />
 <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Our Clients",
        url: "https://antheminfotech.com/our-clients",
      },
    ]}
  /> 
      <Breadcrumb
        image="images/bg/clients.webp"
        title="<span class='text-color-span'>Trusted</span> by <span class='text-color-span'>Leading Brands</span> Across Industries"
        content="Home"
        contentTwo="Our Clients"
      />
      <h1 className="visually-hidden">Our Clients – Trusted by Leading Brands Worldwide</h1>
      {/* <BrandContainer classOption="section-padding bg-white" /> */}
     
    
      <ClientGallery classOption="bg-white" />
     <Clientsection classOption="bg-white" />
    </>
  );
};

export default OurClients;