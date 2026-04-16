import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Industries.css";

export const Services = () => {
  const [animate, setAnimate] = useState(false);
  const [animated, setAnimated] = useState({});
  const images = ["/img/ourServicesTopImage.webp"];
  const servicesData = [
    {
      gif: "/img/coding.gif",
      name: "Website Design & Development",
      text: "ASP.NET is a unified Web development model that includes the services necessary for you to build enterprise-class Web applications with a minimum of coding. .NET is a developer platform made up of tools, programming languages, and libraries for building many different types of applications.The base platform provides components that apply to all different types of apps. Additional frameworks, such as ASP.NET, extend .NET with components for building specific types of apps.",
      image: "/img/WebsiteDesignDevelopment.webp",
    },
    {
      gif: "/img/computer.gif",
      name: "Custom Software & Development",
      text: "Anthem Infotech Pvt. Ltd. with its experienced staff offers solutions and not just code or pages. We believe in the thoughtful processes, one of our core strategies is to think and do and not do and think.Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. Software development is a process of writing and maintaining the source code, but in a broader sense, it includes all that is involved between the conception of the desired software through to the final manifestation of the software, sometimes in a planned and structured process.[1] Therefore, software development may include research, new development,prototyping, modification, reuse, re-engineering, maintenance, or any other activities that result in software products.",
      image: "/img/custom_Software_1110x400.webp",
    },
    {
      gif: "/img/management.gif",
      name: "Web Software Maintenance",
      text: "We offer a team that will work towards minimizing your Software Maintenance cost, workout schedules and plan of action for short term and long term goals. Quite simply we are the best that team you never had.Software maintenance and evolution of systems was first addressed by Meir M. Lehman in 1969. Over a period of twenty years, his research led to the formulation of Lehman's Laws (Lehman 1997). Key findings of his research conclude that maintenance is really evolutionary development and that maintenance decisions are aided by understanding what happens to systems (and software) over time. Lehman demonstrated that systems continue to evolve over time. As they evolve, they grow more complex unless some action such as code refactoring is taken to reduce the complexity. In the late 1970s, a famous and widely cited survey study by Lientz and Swanson, exposed the very high fraction of life-cycle costs that were being expended on maintenance. The survey showed that around 75% of the maintenance effort was on the first two types, and error correction consumed about 21%. Many subsequent studies suggest a similar problem magnitude. Studies show that contribution of end users is crucial during the new requirement data gathering and analysis. This is the main cause of any problem during software evolution and maintenance. Software maintenance is important because it consumes a large part of the overall lifecycle costs and also the inability to change software quickly and reliably means that business opportunities are lost.",
      image: "/img/Maintenance_1110x400.webp",
    },
    {
      gif: "/img/lightbulb.gif",
      name: "Digital Marketing (SEO)",
      text: 'Search engine optimization (SEO) is the process of improving the visibility of a website in search engines via the "natural" or un-paid ("organic" or "algorithmic") search results. You might think of a search engine as a website you visit to type (or speak) a question into a box and Google, Yahoo!, Bing, or whatever search engine you\'re using magically replies with a long list of links to webpages that could potentially answer your question. That\'s true. But have you ever stopped to consider what\'s behind those magical lists of links? Here\'s how it works: Google (or any search engine you\'re using) has a crawler that goes out and gathers information about all the content they can find on the Internet. The crawlers bring all those 1s and 0s back.',
      image: "/img/SEO_1100x400.webp",
    },
    {
      gif: "/img/idea.gif",
      name: "Mobile App & Development",
      text: "We are a Mobile application Development company which develops smart, interesting and intelligent solutions. We deliver iOS (iPhone & iPad), Android and Windows Mobile Apps in both Native and hybrid code. here are two dominant platforms in the modern smartphone market. One is the iOS platform from Apple Inc. The iOS platform is the operating system that powers Apple's popular line of iPhone smartphones. The second is Android from Google. The Android operating system is used not only by Google devices but also by many other OEMs to built their own smartphones and other smart devices. Although there are some similarities between these two platforms when building applications, developing for iOS vs. developing for Android involves using different software development kits (SDKs) and different development toolchain. While Apple uses iOS exclusively for its own devices, Google makes Android available to other companies provided they meet specific requirements such as including certain Google applications on the devices they ship. Developers can build apps for hundreds of millions of devices by targeting both of these platforms. Alternatives for Building Mobile Apps There are four major development approaches when building mobile applications Native Mobile Applications Cross-Platform Native Mobile Applications Hybrid Mobile Applications Progressive Web Applications",
      image: "/img/Mobile_1110x400.webp",
    },
    {
      gif: "/img/ux-design.gif",
      name: "UI/UX Designing",
      text: "Anthem Infotech offer Web Designing Service either as part of a big picture solution or as standalone services, if you wish. You can either ask us to design your website for you as per your needs. Web Design with your customer in mind. Modern web design is more involved than creating an attractive website. Consideration of user experience, search engine optimization, ease of use, and technical details are just a few elements that are involved in developing a website that is designed to perform in today’s competitive marketplace. Our web design & development team has established a host of effective services to facilitate the growth of your business. These include WordPress websites and eCommerce solutions focused on usability and responsive design, creative branding solutions that inject personality into your business, and custom programming for ideas that you need help bringing to fruition. Whether you’re in need of a simple WordPress website to get your business online, or a more complicated eCommerce website, our web development team will help bring your vision to life.",
      image: "/img/UIUX_1110x400.webp",
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const handleClick = (serviceName) => {
    setSelectedService(serviceName === selectedService ? null : serviceName);
  };
  const handleCloseButtonClick = () => {
    setSelectedService(null);
  };
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const ids = ["servicepage"]; // Array of IDs
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element && !animated[id]) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setAnimated((prevState) => ({
              ...prevState,
              [id]: true,
            }));
            element.classList.add("animate-heading");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  return (
    <div id="services" className={`text-center ${animate ? "animate" : ""}`}>
      <div className="container-fluid">
        <div className="">
          <style>
            {`
          .service-card {
            transition: transform 2s ease, box-shadow 2s ease;
            cursor: pointer;
            text-align: center;
          }
          
          .service-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 0px 0px rgba(0, 0, 0, 0.9);
          }

          .service-name, .service-icon {
            display: ${selectedService ? "none" : "block"};
          }

          .service-text {
            display: ${selectedService ? "block" : "none"};
            margin: 0 auto; 
          }

          /* Make selected service occupy full width */
          .selected-service {
            flex-basis: 100%;
          }  
          .services-image {
            float: right;
            margin-left: 20px; 
            width: 500px; 
            height:250px
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);  
          }
          .services-image-left {
            float: left;  
            margin-right: 20px;  
            width: 500px;  
            height: 250px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);  
          }
           
          .left-aligned {
            text-align: left;  
          }
          .center-aligned {
            text-align: center;  
          }

        `}
          </style>
          <div className="" id="servicepage">
            <div className="row">
              <div className="section-title">
                <h2>Our Services</h2>

                {/* {!selectedService && (
                <div className="col-md-6">
                  <img
                    src={images[0]}
                    alt="Our Services"
                    className="services-image"
                  />
                </div>
              )}
              {!selectedService && (
                <div className="col-md-6">
                  <p
                    className="left-aligned"
                    style={{ color: "white", fontSize: "16px" }}
                  >
                    We are a proficient Web & Mobile Applications development
                    team with core skills in Microsoft Stack which mainly
                    consists of Asp.net/ MS SQL Server/ .Net Framework, Azure /
                    C# / OOPS. With underlying technologies such as Entity
                    Framework, HTML5, Windows presentation framework (WPF), Web
                    REST API, Sql Server Reporting services, Jquery, AJAX and
                    many open source frameworks that can be plugged into MS
                    Stack. We also handle hybrid mobile apps in Xamrin and
                    PhoneGap.
                  </p>
                  <br />
                  <br />
                </div>
              )} */}
              </div>
            </div>

            <div className="row service-row">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className={`col-md-${
                    selectedService ? "12" : "4"
                  } service-card`} // Adjusting column class based on selection
                  onClick={() => handleClick(service.name)}
                >
                  {selectedService === service.name && (
                    <div className="col text-right mt-3">
                      <a
                        style={{
                          boxShadow:
                            "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                        }}
                        onClick={handleCloseButtonClick}
                        className="btn btn-custom btn-lg page-scroll"
                      >
                        <span style={{ marginRight: "10px" }}>Close</span>
                        <FontAwesomeIcon icon={faTimes} />
                      </a>
                    </div>
                  )}

                  <div>
                    <div className={`service-icon`}>
                      <img
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "100px",
                          boxShadow:
                            "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                        }}
                        src={service.gif}
                        alt={service.name}
                      />
                    </div>
                    <div className={`service-name`}>
                      <h3
                        dangerouslySetInnerHTML={{ __html: service.name }}
                      ></h3>
                    </div>
                    <div
                      className={`service-text`}
                      style={{
                        display:
                          selectedService === service.name ? "block" : "none",
                      }}
                    >
                      {selectedService === service.name && (
                        <div>
                          <img
                            src={service.image}
                            alt={service.name}
                            className="services-image-left"
                          />
                          <p className="left-aligned">{service.text}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
              <div
                style={{
                  boxShadow: "none",
                  border: "none",
                  textAlign: "justify",
                }}
              >
                <h3 style={{ color: "#fff", textAlign: "center" }}>
                  <span
                    className="fa fa-sign-in"
                    style={{ color: "white" }}
                  ></span>{" "}
                  What We Do
                </h3>
                <p style={{ color: "#fff", textAlign: "justify" }}>
                  <span
                    style={{ display: "inline-block", textAlign: "justify" }}
                  >
                    We pride ourselves on our consistency to deliver solutions
                    that meet client expectations which in turn help us forge
                    long term relationships. Where our team becomes your team
                    and team is not only focused on delivering on timelines, but
                    also on a sensible and reasonable solution. We follow our
                    motto of Trust, Commitment and Delivery to the letter.
                  </span>
                  <br />
                </p>
                <p style={{ color: "#fff", marginBottom: "10px" }}>
                  <b>Trust:</b> Trust means a firm belief in the reliability,
                  truth, or ability of someone. We intend to be that someone, we
                  present ourselves as a team that will carry the load with the
                  client and work as a member of their team with same goals and
                  not a separate team with different objectives in mind.
                </p>
                <p style={{ color: "#fff", marginBottom: "10px" }}>
                  <b>Commitment:</b> Commitment means the state or quality of
                  being dedicated to a cause or activity. We believe in our
                  commitments and carry them as a badge with pride. We make
                  realistic and sometimes unrealistic goals possible and once we
                  commit, we do not back off it.
                </p>
                <p style={{ color: "#fff", marginBottom: "10px" }}>
                  <b>Delivery:</b> Delivery means the supply or provision of
                  something, in software context that also means on time, we
                  adhere to preset timelines and work with the client on
                  maximizing the chance of on-time delivery, so client plans
                  stay on track.
                </p>
                <p>&nbsp;</p>
                <h3 style={{ color: "#fff" }}>
                  We follow the following modus operandi while dealing with the
                  clients
                </h3>
                <p style={{ color: "#fff" }}>
                  <ul
                    style={{
                      color: "#fff",
                      listStyle: "disc",
                      paddingLeft: "30px",
                    }}
                  >
                    <li style={{ marginBottom: "5px" }}>
                      Listen to the customer.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      Ask enough & relevant questions to know and get the
                      customer to identify what they want to accomplish.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      Explain what we are going to do and answer customer
                      questions in terms the customer can understand.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      Don’t reinvent the wheel when there are existing scripts
                      or tools to get things done.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      Give a reasonable estimate of the cost and time.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      Get the project done as per commitments.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      Alert the customer if the project is going beyond the
                      agreed scope or budget and provide valid reasoning for the
                      same.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div
                style={{
                  boxShadow: "none",
                  border: "none",
                  textAlign: "justify",
                }}
              >
                <h3
                  style={{
                    marginLeft: "0",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  <span className="fa fa-eye" style={{ color: "white" }}></span>{" "}
                  Our Vision
                </h3>
                <p style={{ color: "#fff", marginBottom: "15px" }}>
                  We envision being a perfect partner to our clients, where we
                  deliver on the IT side of things with independence and
                  foresight. We deliver on Software development and maintenance
                  side on a long term basis. Client is free to focus on the
                  marketing and sales and other endeavors related to the
                  product.
                </p>

                <p style={{ color: "#fff", margin: "0 0 0 1px" }}>
                  We are keen on good internet marketing along with development
                  as a product/business needs to be marketed to be successful
                  and we have often found that having different SEO and
                  development team often leads to finger pointing which is not
                  helpful to anybody involved and of course adds cost to the
                  client.
                </p>
              </div>

              <div className="IMG-Mission">
                <img
                  src="/img/innovation.png"
                  style={{
                    padding: "25px 0px",
                    height: "240px",
                    width: "100%",
                    marginBottom: "15px",
                  }}
                />
              </div>

              <h3 style={{ color: "#fff", textAlign: "justify" }}>
                {/* <img
                src="img/User-Group.png"
                alt="usergroup"
                style={{ paddingRight: "9px" }}
              /> */}
                Our team has prior experience in handling
              </h3>
              <ul
                style={{
                  color: "#fff",
                  padding: "0 0 0 25px",
                  listStyle: "disc",
                  textAlign: "justify",
                }}
              >
                <li>Corporate Governance Compliance tools</li>
                <li>Enterprise Solutions</li>
                <li>Risk Management</li>
                <li>Debt Recovery Industry</li>
                <li>Travel</li>
                <li>B2B Apps</li>
                <li>Accessibility APIs and standards (DAISY)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
