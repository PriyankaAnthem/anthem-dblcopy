"use client";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PacmanLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

const WorkItemTwo = ({ data }) => {
  const [scale] = useState(1.04);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const stripHtml = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const sliceAfterWordComplete = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const lastSpaceIndex = text.lastIndexOf(" ", maxLength);
    if (lastSpaceIndex === -1) return text.slice(0, maxLength) + "...";
    return text.slice(0, lastSpaceIndex) + "...";
  };

  const plainTextDescription = sliceAfterWordComplete(
    stripHtml(data.description),
    168
  );

  // useEffect(() => {
  //   const equalizeHeights = () => {
  //     const divs = document.querySelectorAll(".ViewProjectclass");
  //     if (window.innerWidth < 768) {
  //       divs.forEach((div) => (div.style.height = "auto"));
  //       return;
  //     }

  //     let maxHeight = 0;
  //     divs.forEach((div) => {
  //       div.style.height = "auto";
  //       const height = div.offsetHeight;
  //       if (height > maxHeight) maxHeight = height;
  //     });

  //     divs.forEach((div) => {
  //       div.style.height = `${maxHeight}px`;
  //     });
  //   };

  //   equalizeHeights();
  //   window.addEventListener("resize", equalizeHeights);
  //   return () => window.removeEventListener("resize", equalizeHeights);
  // }, []);

  const toTitleCase = (str) =>
    str
      .split(" ")
      .map((word) =>
        word.charAt(0) === word.charAt(0).toUpperCase()
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");

  return (

    <>
     <Tilt scale={scale} transitionSpeed={4000} className="w-100 d-flex">
      <div className="card mb-4 custom-background-2 equal-card h-100 w-100 " >
        {/* Project Image & Title */}
        <Link
          href={`/ViewProject/${data.projectID}`}
          target="_blank"
          style={{ color: "unset", textDecoration: "none" }}
        >
          <div className="card-img-top px-2 py-0 m-0">
            <div
              id="protfolio-project-title"
              className="image d-flex justify-content-center align-items-center text-align-center background-4 mt-2 px-3"
              style={{ height: "100px" }}
            >
              <h5
                style={{
                  WebkitTextFillColor: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  display: "inline-block",
                  textAlign: "center",
                  padding: 0,
                  margin: 0,
                }}
              >
                {data.projectName}
              </h5>
            </div>
          </div>
        </Link>

        {/* Project Description */}
        <div className="card-body px-2 py-0 m-0">
          <Link
            href={`/ViewProject/${data.projectID}`}
            target="_blank"
            style={{ color: "#222", textDecoration: "none" }}
          >
            <p
              className="card-text justify-content text-sm leading-snug"
              title={sliceAfterWordComplete(
                stripHtml(data.description),
                data.description.length
              )}
            >
              {plainTextDescription}
            </p>
          </Link>

          {/* Technologies Tags */}
          <div className="tagcloud mt-1line-clamp">
            {(data?.technolgies || "")
  .split(",")
  .map(t => t.trim())
  .filter(Boolean)
  .filter(t => {
    const wordCount = t.split(" ").length;
    return (
      !t.includes(",") &&        // 🚫 sentence
      wordCount <= 4 &&          // 🚫 too many words
      t.length <= 30             // 🚫 very long text
    );
  })
  .sort((a, b) => a.length - b.length)
  .slice(0, 4)
  .map((highlight, index) => (
                <Link
                  key={index}
                  href={`/OurWork/${highlight
                    .replace(/\.js\b/gi, "-js")
                    .replace(/[\/\s_]+/g, "-")  
                    .toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <span className="line-clamp">{toTitleCase(highlight)}</span>
                </Link>
              ))}
                </div>
               </div>

        {/* View More Button */}
        <div className="card-footer d-flex justify-content-end">
          <Link
            href={`/ViewProject/${data.projectID}`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <button className="text-primary btn-View-More">View More</button>
          </Link>
        </div>
      </div>
{/* <p>removed->  min-height: 380px;  from equal card</p> */}
    <style jsx>{`
  .equal-card {
    display: flex;
    flex-direction: column;
         
  }

  .equal-card .card-body {
    flex: 1;
  }

  .equal-card .card-footer {
    margin-top: auto;
  }
`}</style>


    </Tilt>
    
    
    </>
   
  );
};

WorkItemTwo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkItemTwo;
