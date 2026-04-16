'use client';
import { useEffect } from "react";
import PropTypes from "prop-types";
import CounterUpData from '../../data/counter/counterText.json';
import CounterUpItem from '../../components/CounterUp/CounterUpItem.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { style } from "d3-selection";

const Funfact = ({ classOption }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    // <div className={`section section-padding-bottom ${classOption}`} style={{ paddingTop: "20px"}}>
    <div className={`section  ${classOption}`} style={{ paddingTop: "20px"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
              {CounterUpData.map((single, index) => (
                <div key={index} className="col mb-6" data-aos="fade-up">
                  <CounterUpItem data={single} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Funfact.propTypes = {
  classOption: PropTypes.string
};

Funfact.defaultProps = {
  classOption: "section section-padding-bottom"
};

export default Funfact;
