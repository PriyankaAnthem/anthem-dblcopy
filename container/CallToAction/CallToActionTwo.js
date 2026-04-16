"use client";

import React from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import Link from "next/link";
import Image from "next/image";

const CallToActionTwo = ({ classOption }) => {
  // Cloudinary images
  const cloudBase = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL;

  const shapeImages = [
    "/images/icon-animation/icon-1.png",
    "/images/icon-animation/icon-2.png",
    "/images/icon-animation/icon-3.png",
    "/images/icon-animation/icon-4.png",
    "/images/icon-animation/icon-5.png",
    "/images/icon-animation/icon-6.png",
    "/images/icon-animation/icon-7.png",
    "/images/icon-animation/icon-8.png",
    "/images/icon-animation/icon-9.png",
  ];

  return (
    <section className={`cta-section section section-padding-250 ${classOption}`}>
      <div className="container text-center icon-up-down-animation">
        <SectionTitle
          headingOption="fz-34"
          title="Have a Project in Mind? Let’s Bring It to Life!"
          subTitle="Connect with us to develop tailored solutions that achieve your goals and propel your success. Let’s turn your vision into reality."
        />

<Link
  href="/contact-us"
  className="btn btn-bottom"
  data-aos="fade-up"
  data-aos-delay="300"
  data-hover="Contact Us"
  style={{ background: "#0e6497", zIndex: 100000, position: "relative" }}
>
  Contact Us
</Link>


        {/* Shape Images */}
        {shapeImages.map((img, index) => (
          <div key={index} className={`shape shape-${index + 1}`}>
            <span>
              <Image
                src={`${cloudBase}${img}`}
                alt={`shape-${index + 1}`}
                width={50} // adjust width as per design
                height={50} // adjust height as per design
                priority={index < 3} // prioritize first few for faster LCP
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CallToActionTwo;