import React, { useRef, useEffect, useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import { baseApiUrl } from "./baseApiUrl";

export const Team = (props) => {
  const teamRef = useRef(null);
  const [apiData, setApiData] = useState(null); // State to store API data
  const [logoUrls, setLogoUrls] = useState([]); // State to store logo URLs

  useEffect(() => {
    // Fetch data from the API endpoint with JWT token
    axios
      .get(`${baseApiUrl}api/Client/ViewAllClient`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then((response) => {
        // Log the API data to the console
        console.log("API Data:", response.data);
        // Set the API data to the state
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // Empty dependency array ensures the effect runs only once on component mount

  useEffect(() => {
    if (apiData) {
      // Extract logo URLs from the API data
      const urls = apiData.map((item) => item.logo1);
      setLogoUrls(urls);
    }
  }, [apiData]);

  return (
    <div id="team" className="text-center">
      <style>
        {`
          .team-container {
            display: flex;
            overflow-x: hidden;
          }

          .team {
            flex: 0 0 auto;
            margin-right: 15px; /* Adjust spacing between images */
          }

          .team-img {
            max-width: 15%; /* Decrease the width of the images */
            height: auto; /* Maintain aspect ratio */
            margin-right: 60px; /* Add margin between images */
          }

          .caption {
            text-align: center;
          }
        `}
      </style>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>OUR CLIENTS</h2>
          <p>
            Explore the impressive array of companies we've partnered with. Join
            our esteemed clientele and unlock the pathway to your success.
          </p>
        </div>
      </div>
      <div className="team-container" ref={teamRef}>
        {/* Render images within the marquee */}
        <marquee className="team" direction="left" scrollamount="4">
          {apiData &&
            apiData.map((item, index) => (
              <a
                key={index}
                href={item.websiteAddress}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://antheminfotech.com/ClientImages/${item.logo1}`}
                  alt="..."
                  className="team-img"
                />
              </a>
            ))}
        </marquee>
      </div>
    </div>
  );
};
