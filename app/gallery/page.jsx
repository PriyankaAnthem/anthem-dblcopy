
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import Script from "next/script";
import AlbumGallery from "@/container/ImageGallery/Albumgallery";

// Server-side SSG metadata
export async function generateMetadata() {
  const title = "Our Gallery ∣ Web Development & AI Projects Showcase in Chandigarh";
  const description =
    "Explore our gallery of innovative web, mobile, and AI software projects. See how our Chandigarh-based team delivers creative, custom software solutions that drive business success.";

  return {
    title,
    description,
    keywords: [
      "Anthem Infotech Portfolio",
      "Web Development Projects",
      "AI App Development",
      "Custom Software Projects",
      "Project Showcase",
      "Case Studies",
      "Success Stories",
    ],
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
 {/* BreadcrumbList Schema */}
  <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Gallery",
        url: "https://antheminfotech.com/gallery",
      },
    ]}
  />      <Breadcrumb
        image="/images/bg/portfoliobg.webp"
       title={`Explore Our <span class='text-color-span'>Project Gallery</span> – A Showcase of <span class='text-color-span'>Innovation & Success</span>`}
        content="Home"
        contentTwo="Gallery"
      />
      <h1 className="visually-hidden">
        Our Gallery – Web Development & AI Projects Showcase in Chandigarh
      </h1>
      
        <AlbumGallery classOption="bg-white" />
    
    
    </>
  );
}