// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "swiper/css";
// import "swiper/css/pagination";
// import "aos/dist/aos.css";
// import "react-modal-video/scss/modal-video.scss";
// import "./assets/scss/style.scss";
// import "./globals.css";
// import "../app/assets/scss/style.scss";
// import "../app/assets/css/custom.css";
// import "../app/assets/css/plugins/animate.css";
// import "../app/assets/css/font-awesome/css/all.css";
// import "../app/assets/css/font-awesome/css/fontawesome.min.css";

// import Header from "../partials/header/Header";
// import Footer from "../components/FooterComponent/Footer";
// import Script from "next/script";
// import Chatbot from "@/components/Chatbot";
// import ScrollToTop from "@/components/ScrollToTop";


// export const metadata = {
//   metadataBase: new URL("https://antheminfotech.com"),
//   title: {
//     default: "Anthem Infotech - SOFTWARE PRODUCT DEVELOPMENT AND MAINTENANCE COMPANY",
//     template: "%s | Anthem Infotech",
//   },
//   description:
//     "Anthem Infotech specializes in end-to-end software product development, IT consulting, and digital solutions for businesses worldwide. Leading Web Development Company in Chandigarh, India since 2011.",
//   alternates: {
//     canonical: "https://antheminfotech.com",
//     languages: {
//       "en-in": "https://antheminfotech.com/",
//       "x-default": "https://antheminfotech.com/",
//     },
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   icons: {
//     icon: "/images/logo/logo.webp",
//     shortcut: "/images/favicon.png",
//   },
//   openGraph: {
//     type: "website",
//     url: "https://antheminfotech.com",
//     siteName: "Anthem Infotech",
//     title: "Anthem Infotech - Software Product Development & IT Solutions",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp",
//         width: 1200,
//         height: 630,
//         alt: "Anthem Infotech",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@AnthemInfotech",
//   },
//   other: {
//     "link:preconnect:fonts-google": "https://fonts.googleapis.com",
//     "link:preconnect:fonts-gstatic": "https://fonts.gstatic.com",
//     "link:rubik":
//       "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap",
//     "link:muli":
//       "https://fonts.googleapis.com/css2?family=Muli:wght@400;500;600;700&display=swap",
//     "geo.region": "IN-PB",
//     "geo.placename": "Chandigarh",
//     "geo.position": "30.7333;76.7794",
//     ICBM: "30.7333, 76.7794",
//   },
//   verification: {
//     google: "r4ta9ktAXRU_E8ih-j4M2QuAbdsU1Y3ku3rkJoY62rs", // ✅ Updated Google verification code
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" data-bs-theme="dark">
//       <head>
//         {/* Google Search Console Verification */}
//         <meta
//           name="google-site-verification"
//           content="r4ta9ktAXRU_E8ih-j4M2QuAbdsU1Y3ku3rkJoY62rs"
//         />
//       </head>
//       <body className="antialiased">
//         <noscript>You need to enable JavaScript to run this app.</noscript>

//         {/* Organization Schema */}
//       <Script
//   id="organization-schema"
//   type="application/ld+json"
//   strategy="afterInteractive"
//   dangerouslySetInnerHTML={{
//     __html: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "Organization",
//       name: "Anthem Infotech Pvt. Ltd.",
//       url: "https://antheminfotech.com",
//       logo: "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp",
//       sameAs: [
//         "https://www.linkedin.com/company/antheminfotech",
//         "https://www.facebook.com/antheminfotech",
//         "https://twitter.com/AnthemInfotech"
//       ]
//     })
//   }}
// />

// <Script
//   id="website-schema"
//   type="application/ld+json"
//   strategy="afterInteractive"
//   dangerouslySetInnerHTML={{
//     __html: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "WebSite",
//       name: "Anthem Infotech Pvt. Ltd.",
//       url: "https://antheminfotech.com",
//       potentialAction: {
//         "@type": "SearchAction",
//         target: "https://antheminfotech.com/search?q={search_term_string}",
//         "query-input": "required name=search_term_string"
//       }
//     })
//   }}
// />

//         {/* Google Analytics */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-YGDQN3RN6W"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-YGDQN3RN6W');
//           `}
//         </Script>

//         <Header />
//         <main>{children}</main>
         
//         <ScrollToTop />
//          <Chatbot />
//         <Footer />

         
//       </body>
//     </html>
//   );
// }



import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import "react-modal-video/scss/modal-video.scss";
import "./assets/scss/style.scss";
import "./globals.css";
import "../app/assets/scss/style.scss";
import "../app/assets/css/custom.css";
import "../app/assets/css/plugins/animate.css";
import "../app/assets/css/font-awesome/css/all.css";
import "../app/assets/css/font-awesome/css/fontawesome.min.css";

import Header from "../partials/header/Header";
import Footer from "../components/FooterComponent/Footer";
import Script from "next/script";
import Chatbot from "@/components/Chatbot";
import ScrollToTop from "@/components/ScrollToTop";
import { headers } from "next/headers"; // ✅ NEW

export const metadata = {
  metadataBase: new URL("https://antheminfotech.com"),
  title: {
    default: "Anthem Infotech - SOFTWARE PRODUCT DEVELOPMENT AND MAINTENANCE COMPANY",
    template: "%s | Anthem Infotech",
  },
  description:
    "Anthem Infotech specializes in end-to-end software product development, IT consulting, and digital solutions for businesses worldwide. Leading Web Development Company in Chandigarh, India since 2011.",
  alternates: {
    canonical: "https://antheminfotech.com",
    languages: {
      "en-in": "https://antheminfotech.com/",
      "x-default": "https://antheminfotech.com/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo/logo.webp",
    shortcut: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://antheminfotech.com",
    siteName: "Anthem Infotech",
    title: "Anthem Infotech - Software Product Development & IT Solutions",
    images: [
      {
        url: "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "Anthem Infotech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AnthemInfotech",
  },
  other: {
    "link:preconnect:fonts-google": "https://fonts.googleapis.com",
    "link:preconnect:fonts-gstatic": "https://fonts.gstatic.com",
    "link:rubik":
      "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap",
    "link:muli":
      "https://fonts.googleapis.com/css2?family=Muli:wght@400;500;600;700&display=swap",
    "geo.region": "IN-PB",
    "geo.placename": "Chandigarh",
    "geo.position": "30.7333;76.7794",
    ICBM: "30.7333, 76.7794",
  },
  verification: {
    google: "r4ta9ktAXRU_E8ih-j4M2QuAbdsU1Y3ku3rkJoY62rs",
  },
};

// ✅ async to read headers
export default async function RootLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <meta
          name="google-site-verification"
          content="r4ta9ktAXRU_E8ih-j4M2QuAbdsU1Y3ku3rkJoY62rs"
        />
      </head>
      <body className="antialiased">
        <noscript>You need to enable JavaScript to run this app.</noscript>

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Anthem Infotech Pvt. Ltd.",
              url: "https://antheminfotech.com",
              logo: "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp",
              sameAs: [
                "https://www.linkedin.com/company/antheminfotech",
                "https://www.facebook.com/antheminfotech",
                "https://twitter.com/AnthemInfotech",
              ],
            }),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Anthem Infotech Pvt. Ltd.",
              url: "https://antheminfotech.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://antheminfotech.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YGDQN3RN6W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YGDQN3RN6W');
          `}
        </Script>

        {/* ✅ Hidden on all /admin/* routes */}
        {!isAdmin && <Header />}
        <main>{children}</main>
        {!isAdmin && <ScrollToTop />}
        {!isAdmin && <Chatbot />}
        {!isAdmin && <Footer />}

      </body>
    </html>
  );
}