
import Breadcrumb from "@/container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import ReactTabs from "@/components/Tabs/Tab";

// Dynamic page props for SEO
export async function generateMetadata({ searchParams }) {
  // Static SEO metadata for Industries page
  const titleTag =
  "Industries We Serve | Custom Software & AI Solutions by Anthem Infotech";

const metaDescription =
  "Discover how Anthem Infotech delivers custom software and AI solutions across industries, helping businesses innovate and scale globally.";

  return {
    title: titleTag,
    description: metaDescription,
    openGraph: {
      title: titleTag,
      description: metaDescription,
      url: "https://antheminfotech.com/Home/Industries",
      siteName: "Anthem Infotech",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Anthem Infotech",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titleTag,
      description: metaDescription,
      images: ["/images/og-image.png"],
    },
  };
}

const IndustriesPage = ({ searchParams }) => {
  const industryType = searchParams?.Industrytype || null;

  return (
    <>
     <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Industries",
        url: "https://antheminfotech.com/Home/Industries",
      },
    ]}
  /> 
      <Breadcrumb
        image="/images/Industries/industryHeader.webp"
        title={`We Work With <span class='text-color-span'>Bold Brands</span> That We <span class='text-color-span'>Believe</span> in <span class='text-color-span'>${
          industryType || ""
        }</span>`}
        content="Home"
        contentTwo="Industries"
      />
      <h1 className="visually-hidden">
  Industries We Serve with Custom Software & AI Solutions
</h1>
      <ReactTabs industryType={industryType} />
   
     
    </>
  );
};

export default IndustriesPage;
