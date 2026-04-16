import React from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ContactFrom from "../../components/ContactFrom/ContactFrom.jsx";

const ContactFromContainer = ({ classOption }) => {
  return (
    <div
      className={`contact-form-section section section-padding-t90-b100 ${classOption}`}
      style={{ paddingTop: "20px", marginTop:"0px",paddingBottom:"30px" }}
    >
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8">
            <SectionTitle
              headingOption="fz-32"
              title="Let’s talk about your project"
              subTitle="<span class='text-white'>We have made it easy for clients to reach us and get their solutions weaved</span>"
            />
            <ContactFrom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFromContainer;
