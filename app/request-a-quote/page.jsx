import Head from "next/head";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import RequestQuoteContainer from "../../container/RequestQuoteContainer/RequestQuoteContainer";
export const metadata = {
  title:
    "Request a Free Quote | Web & AI Software Development Company – Anthem Infotech",

  description:
    "Request a free project quote from Anthem Infotech. We deliver Web Development, AI Solutions, and Custom Software Development tailored to your business goals.",

  
  openGraph: {
    title:
      "Request a Free Quote | Web & AI Software Development – Anthem Infotech",
    description:
      "Get a free quote for Web Development, AI Solutions, and Custom Software Development. Let Anthem Infotech help you build scalable digital solutions.",
    url: "https://antheminfotech.com/request-a-quote",
    siteName: "Anthem Infotech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Request a Free Quote – Anthem Infotech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Request a Free Quote | Anthem Infotech",
    description:
      "Request a free project quote for Web, AI, and Custom Software Development. Start your digital journey with Anthem Infotech.",
    images: ["/images/og-image.png"],
  },

  alternates: {
    canonical: "https://antheminfotech.com/request-a-quote",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const RequestQuote = () => {
  return (
    <>
     

    <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Request A Quote",
        url: "https://antheminfotech.com/request-a-quote",
      },
    ]}
  /> 
      <Breadcrumb
        image="/images/bg/breadcrumb-bg-three.webp"
        title="Request a<span class='text-color-span'> Free Quote</span>"
        content="Home"
        contentTwo="Request A Quote"
      />
      <h1 className="visually-hidden">
        Request a Free Quote for Your Software Development Project</h1>
      <RequestQuoteContainer classOption="bg-white" />
  
    </>
  );
}



export default RequestQuote;















