import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";

const Testimonial = ({ data }) => {


  
  return (
    <div className="static-testimonial mb-6  ">
      <div className="testimonial-image">
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}${data.image}`}
          alt={data.name}
          width={100} // adjust width according to your design
          height={100} // adjust height
          loading="lazy"
          className="rounded-full" // optional styling
        />
      </div>
      <div className="testimonial-content">
        <p  style={{ fontSize: "16px", fontWeight: "500",textAlign: "justify" }}>{data.desc}</p>
  {/* <p style={{ fontSize: "16px", fontWeight: "500",textAlign: "justify" }} className="testimonial-text">{data.desc}</p> */}

      </div>
      <div className="author-info">
        <div className="cite">
          <h6 className="name">{data.name}</h6>
          <span className="position">{data.position}</span>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    desc: PropTypes.string,
  }),
};

export default Testimonial;
