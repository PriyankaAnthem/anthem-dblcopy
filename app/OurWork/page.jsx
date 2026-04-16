
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import WorkContainer from "../../container/Work/WorkContainer";
import Script from "next/script";

// Server-side SSG metadata
export async function generateMetadata() {
const title =
  "Our Portfolio | Web & AI Development Projects by Anthem Infotech";

const description =
  "Explore Anthem Infotech’s portfolio of web, AI, and custom software projects showcasing innovative digital solutions for global clients.";
  return {
    title,
    description,
  
    openGraph: {
      title,
      description,
      url: "https://antheminfotech.com/OurWork",
      siteName: "Anthem Infotech",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Anthem Infotech Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: "https://antheminfotech.com/OurWork",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


export default function Portfolio() {
  return (
    <>
      {/* Structured Data - CollectionPage */}
      <Script
        id="portfolio-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Anthem Infotech Portfolio",
            "description": "Showcase of successful web and AI development projects",
            "url": "https://antheminfotech.com/OurWork",
            "about": {
              "@type": "Thing",
              "name": "Software Development Projects",
              "description": "Web Development, AI Solutions, and Custom Software Projects"
            }
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
        name: "Our Work",
        url: "https://antheminfotech.com/OurWork",
      },
    ]}
  /> 
      <Breadcrumb
        image="/images/bg/portfoliobg.webp"
        title={`A Glimpse Into Our Recent <span class='text-color-span'>Success Stories</span> and <span class='text-color-span'>Innovative Solutions</span>`}
        content="Home"
        contentTwo="Portfolio"
      />
      <h1 className="visually-hidden">
        Our Portfolio – Web & AI Development Projects by Anthem Infotech
      </h1>
      <WorkContainer classOption="bg-white" />
    
    </>
  );
}