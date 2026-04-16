import React from "react";
// import Logo from "../../components/logo/Logo";
import FooterData from "../../data/Footer/footerItem.json";
import FooterLinkItem from "../../components/Footer/FooterLinkItem.jsx";

const Footer = () => {
  return (
    <div className="footer-section section footer-bg-color">
      <div className="container">
        <div className="row mb-lg-14 mb-md-10 mb-6">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12  mb-6">
            <div className="footer-widget">
              <div className="footer-logo">
                {/* <Logo
                  image={`${process.env.PUBLIC_URL}/images/logo/footer-logo.png`}
                /> */}
                <h3 className="text-white">Anthem Infotech Pvt. Ltd.</h3>
                <p className="text-color-p">
                  #11, Floor 11, Sushma Infinium, Chandigarh - Ambala Highway,
                  Near Best Price Zirakpur, Punjab – 140603 India.
                </p>
              </div>
              <div className="footer-widget-content">
                <div className="content">
                  <p>
                    <a href="tel:9815340123">
                      <i className="fas fa-phone me-2" />
                      +91 9815-34-0123
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@antheminfotech.com">
                      <i className="fas fa-envelope me-2" />
                      info@antheminfotech.com
                    </a>
                  </p>
                </div>
                <div className="footer-social-inline">
                  <a
                    href="https://x.com/antheminfotech"
                    aria-label="Anthem Infotech on Twitter"
                  >
                    <i
                      className="fa-brands fa-square-x-twitter"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/AnthemInfotech"
                    aria-label="Anthem Infotech on Facebook"
                  >
                    <i
                      className="fab fa-facebook-square"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/antheminfotech"
                    aria-label="Anthem Infotech on Instagram"
                  >
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://in.linkedin.com/company/anthem-infotech-pvt-ltd-"
                    aria-label="Anthem Infotech on LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12 mb-6">
            <div className="row">
              {FooterData &&
                FooterData.map((single, key) => {
                  return (
                    <div
                      key={key}
                      className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mb-6"
                    >
                      <FooterLinkItem data={single} key={key} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col ">
            <div className="row copyright d-flex justify-content-between">
              <div className="col-sm-6 text-sm-start text-center">
              <p>
  &copy; {new Date().getFullYear()}–{new Date().getFullYear() + 1}{" "}
  <strong>
    Anthem Infotech Private Limited. All rights reserved.
  </strong>
</p>

              </div>
              <div className="col-sm-6 text-sm-end text-center">
                Powered by <strong>Anthem Infotech Pvt. Ltd.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
