import React from "react";
import Breadcrumb from "@/container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import Faq from "@/container/Faq/Faq";
import Script from "next/script";

export const metadata = {
  title: "FAQs | Anthem Infotech",
  description: "Find answers to your questions about Anthem Infotech's services, solutions, and how we can help your business succeed with our expert technology offerings. Learn about Web Development, AI Solutions, Custom Software Development, and more.",
  openGraph: {
    title: "FAQs | Anthem Infotech",
    description: "Find answers to your questions about Anthem Infotech's services, solutions, and how we can help your business succeed with our expert technology offerings.",
    url: "https://antheminfotech.com/faqs",
    siteName: "Anthem Infotech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anthem Infotech FAQs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Anthem Infotech",
    description: "Find answers to your questions about Anthem Infotech's services, solutions, and how we can help your business succeed with our expert technology offerings.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://antheminfotech.com/faqs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FaqsPage = () => {
  return (
    <>
      {/* Structured Data - FAQPage */}
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Anthem Infotech offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Anthem Infotech offers comprehensive software development services including Web Development, Custom Software Development, AI Solutions, Mobile App Development, Enterprise Software, and IT Consulting."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Anthem Infotech located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Anthem Infotech is located in Chandigarh, India, and serves clients worldwide."
                }
              },
              {
                "@type": "Question",
                "name": "How can I contact Anthem Infotech?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact Anthem Infotech through our contact page, email, or phone for inquiries and support."

                }
              }
            ]
          }),
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
        name: "FAQs",
        url: "https://antheminfotech.com/faqs",
      },
    ]}
  />
      <Breadcrumb
        image="/images/bg/faq.webp"
        title="Everything You Need to Know About Our <span class='text-color-span'>Services</span> and <span class='text-color-span'>Solutions</span>"
        content="Home"
        contentTwo="FAQs"
      />
      <h1 className="visually-hidden">Frequently Asked Questions About Our Software & AI Services</h1>
      <Faq classOption="bg-white" />
    </>
  );
};

export default FaqsPage;