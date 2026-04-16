import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import WorkContainer from "../../../container/Work/WorkContainer";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const title = `Portfolio - ${slug ? slug.toUpperCase() : "Our Work"} ∣ Custom Web & AI Projects`;
  const description = `Explore Anthem Infotech's ${
    slug ? slug : "portfolio"
  } projects in Web and AI App Development.`;

  return {
    title,
    description,
  };
}

export default function WorkSlugPage({ params }) {
  const { slug } = params;

  return (
    <>
      {/* Structured Data */}
      <Script
        id="portfolio-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Anthem Infotech Portfolio",
            "description": "Showcase of successful web and AI development projects",
            "url": `https://antheminfotech.com/OurWork${slug ? "/" + slug : ""}`,
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
        name: "Portfolio",
        url: `https://antheminfotech.com/OurWork${slug ? "/" + slug : ""}`,
      },
    ]}
  /> 
      
      <Breadcrumb
        image="/images/bg/portfoliobg.webp"
        title={`A Glimpse Into Our Recent <span class='text-color-span'>Success Stories</span> and <span class='text-color-span'>Innovative Solutions</span>`}
        content="Home"
        contentTwo="Portfolio"
      />

      {/* Pass slug to WorkContainer */}
      <WorkContainer slug={slug} classOption="bg-white" />
    </>
  );
}
