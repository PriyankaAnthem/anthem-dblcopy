"use client";

import PropTypes from "prop-types";
import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, content, contentTwo, contentThree, image }) => {
  const publicUrl = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL;
const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);
  return (



    
    <div
      className="relative page-title-section section section-padding-top overlay-two"
      style={{
        backgroundImage: `url(${publicUrl}/${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
       height: "220px",
     
      }}
    >
       {/* ✅ Mobile styles */}
      <style>
       {`
      @media (max-width: 768px) {
        .page-title-section {
          min-height:58vh;     /* more height on mobile */
          padding-top:100px;
           padding-bottom:10px;
          /* pushes content below header */
         
        }
      }
    `}
      </style>
      <div className="absolute inset-0 bg-black/50 z-0 " />

      {/* <div className="relative page-title">
        <div className="container ">
          <h1
            className="title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </div>
      </div> */}

      <div className="relative page-breadcrumb position-static " >
        <div >
           <div className="relative page-title">
             <h1
            className="title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
           </div>
          <ul className="breadcrumb justify-content-center text-white" >
            <li>
              <Link href="/">{content}</Link>
            </li>

            {!contentThree ? (
              <li className="current">{contentTwo}</li>
            ) : (
              <li>
                {contentTwo === "OurWork" ? (
                  <Link href={`/${contentTwo}`}>{capitalize(contentTwo)}</Link>
                ) : (
                  <Link href={`/${contentTwo}`}>{capitalize(contentTwo)}</Link>
                )}
              </li>
            )}
            {contentThree && <li className="current">{contentThree}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};
  
Breadcrumb.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentTwo: PropTypes.string,
  contentThree: PropTypes.string,
  image: PropTypes.string,
};

export default Breadcrumb;
