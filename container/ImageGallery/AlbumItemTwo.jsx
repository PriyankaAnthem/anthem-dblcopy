"use client";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

const AlbumItemTwo = ({ data, onPreview }) => {
  const [scale] = useState(1.04);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Tilt scale={scale} transitionSpeed={3000}>
        <div className="gallery-card">
          <img
            src={data.image}
            alt={data.title}
            className="gallery-img"
          />

          {/* Preview Button */}
          <button
            className="preview-btn"
            onClick={(e) => {
              e.stopPropagation();
              onPreview();
            }}
          >
            <i className="fas fa-eye"></i>
          </button>

          {/* Hover Title */}
          <div className="hover-title">{data.title}</div>
        </div>
      </Tilt>

      <style jsx>{`
        .gallery-card {
          position: relative;
          margin-bottom: 15px;
          break-inside: avoid;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .gallery-img {
          width: 100%;
          height: auto;
          border-radius: 15px;
          object-fit: cover;
          display: block;
        }

        .preview-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          border: none;
          padding: 6px 10px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          z-index: 20;
        }

        .hover-title {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 8px 0;
          text-align: center;
          color: white;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .gallery-card:hover .hover-title {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

AlbumItemTwo.propTypes = {
  data: PropTypes.object.isRequired,
  onPreview: PropTypes.func.isRequired,
};

export default AlbumItemTwo;
