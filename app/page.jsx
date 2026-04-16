export const metadata = {
  title: "Anthem Infotech Pvt. Ltd. | Software Product Development Company",
  description:
    "Anthem Infotech Pvt. Ltd. is a software product development company delivering custom software, MVP development, AI solutions, and enterprise applications since 2011.",
 
  openGraph: {
    title: "Anthem Infotech Pvt. Ltd. | Software Product Development Company",
    description:
      "Anthem Infotech Pvt. Ltd. delivers custom software, MVP development, AI, and enterprise solutions for global businesses.",
    url: "https://antheminfotech.com/",
    siteName: "Anthem Infotech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anthem Infotech - Web & AI Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthem Infotech Pvt. Ltd. | Software Product Development Company",
    description:
      "Custom software, AI solutions, and MVP development by Anthem Infotech Pvt. Ltd.",
    images: ["/images/og-image.png"],
    creator: "@antheminfotech",
  },
  alternates: {
    canonical: "https://antheminfotech.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import IntroSlider from "../container/IntroSlider/IntroSlider";
import HomeAbout from "../components/About/HomeAbout.jsx";
import Funfact from "../container/Funfact/Funfact";
import ServiceIconBox from "../container/service/ServiceIconBox";
import HomeSuccess from "../components/Success/HomeSuccess.jsx";
import CallToAction from "../container/CallToAction/CallToAction";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import BrandContainer from "../container/Brand/BrandContainer";
import ScrollToTop from "../components/ScrollToTop";
import Script from "next/script";


export default function HomePage() {

  return (
    <>
      {/* Structured Data - Service */}
      <Script
        id="home-page-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Software Development Services",
            "provider": {
              "@type": "Organization",
              "name": "Anthem Infotech Private Limited"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Custom web development services for businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Solutions",
                    "description": "Artificial Intelligence solutions and consulting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software Development",
                    "description": "Tailored software solutions for your business needs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "iOS and Android mobile application development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Software",
                    "description": "Scalable enterprise software solutions"
                  }
                }
              ]
            }
          }),
        }}
      />

      <main>
        <IntroSlider />
        <HomeAbout classOption="bg-white" />
        {/* <Funfact classOption="bg-white" /> */}
        <BrandContainer classOption=" custom-background-2" />
        <ServiceIconBox classOption="background-1" />
        <CallToAction />
        <HomeSuccess classOption="bg-white" />
        <div style={{ display: "none" }}>
          <ContactInformation />
        </div>

        {/* <ContactInformation classOption="bg-white" />      */}
      </main>
      <ScrollToTop />
    </>
  );
}
