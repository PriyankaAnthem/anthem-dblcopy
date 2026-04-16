import { style } from "d3-selection";
import React from "react";

const GoogleMap = ({ classOption }) => {
  return (
    <div
      className={`google-map-area section text-center  ${classOption}`}
     style={{paddingTop:"30px",paddingBottom:"20px"}}
    >
      <div className="container">
        <div className="contact-map-area" data-aos="fade-up">
          <iframe
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.8369302833735!2d76.8217079750338!3d30.638552990179114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb34165bc719%3A0xeef887919eec714c!2sAnthem%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1724663440253!5m2!1sen!2sin"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
