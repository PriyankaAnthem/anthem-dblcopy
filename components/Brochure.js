import React, { useEffect } from "react";
import Nav from "./nav";

function Brochure(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <br />
      <br />
      <div>
        {" "}
        <iframe
          title="Brochure"
          src="https://antheminfotech.com/Brochure/mobile/index.html"
          width="100%"
          height="600px"
        />
      </div>
      <div>
        <div id="contact" style={{ paddingTop: "10px" }}>
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/AnthemInfotech">
                        <img
                          src="./img/facebook.png"
                          alt="Facebook"
                          style={{ width: "50px", height: "50px" }}
                          className="social-icon"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/antheminfotech">
                        <img
                          src="./img/twitter.png"
                          alt="Twitter"
                          style={{ width: "50px", height: "50px" }}
                          className="social-icon"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/anthem-infotech-pvt-ltd-">
                        <img
                          src="./img/linkedin-logo.png"
                          alt="LinkedIn"
                          style={{ width: "50px", height: "50px" }}
                          className="social-icon"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/919815340123/?text=Hi Anthem Team.">
                        <img
                          src="./img/whatsapp.png"
                          alt="WhatsApp"
                          style={{ width: "50px", height: "50px" }}
                          className="social-icon"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2024 Anthem Infotech Private Limited. All rights reserved.
              {/* <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brochure;
