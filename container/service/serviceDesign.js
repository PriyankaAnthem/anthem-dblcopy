
"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IconBoxService from "../../components/IconBox/IconBoxService";
import { style } from "d3-selection";

const ServiceDesign = ({ service, classOption }) => {
  if (!service?.length || !service[0]?.key_services) {
    return null; // 
  }

  return (
    <div
      className={`section section-padding-top ${classOption}` }
      style={{ paddingTop: "10px",paddingBottom:"20px"}}
    >
      <Container>
        <Row>
          <Col md={12}>
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 icon-box-shape-animation mt-2">
              {service[0].key_services.map((data, index) => (
                <div
                  key={index}
                  className="col mb-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <IconBoxService
                    classOption="box-border background-7"
                    data={data}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDesign;
