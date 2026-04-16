"use client";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Brand = ({ data }) => {
    const [imageStatus, setImageStatus] = useState("loading");

    useEffect(() => {
        if (!data || !data.logo1) {
            setImageStatus("error");
            return;
        }

        setImageStatus("loading");

        // Preload the image with a slight delay to ensure rendering stability
        const img = new Image();
        img.src = data.logo1;

        const handleLoad = () => {
            // Add a small delay to avoid flickering
            setTimeout(() => setImageStatus("loaded"), 100);
        };
        const handleError = () => {
            setTimeout(() => setImageStatus("error"), 100);
        };

        img.onload = handleLoad;
        img.onerror = handleError;

        // Cleanup to prevent memory leaks
        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [data]);
  const Wrapper = data?.websiteAddress ? "a" : "div";
    return (
        <div className="brand-item">
            <Wrapper
        href={data?.websiteAddress}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          cursor: data?.websiteAddress ? "pointer" : "default",
        }}
      >
                <div className="image-container position-relative" style={{ width: 200, height: 100 }}>
                    {(!data || !data.logo1 || imageStatus === "loading") && (
                        <Skeleton
                            height={100}
                            width={200}
                            className="rounded"
                            baseColor="#f0f0f0"
                            highlightColor="#e0e0e0"
                            style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
                        />
                    )}
                    {imageStatus === "error" && (
                        <img
                            src="/path/to/fallback-image.png"
                            alt={data?.clientName || "Brand"}
                            className="brand-image img-fluid"
                            style={{
                                position: "relative",
                                zIndex: 2,
                                width: 200,
                                height: 100,
                                objectFit: "contain",
                            }}
                        />
                    )}
                    {imageStatus === "loaded" && (
                        <img
                            src={data.logo1}
                            alt={data.clientName}
                            title={data.clientName}
                            className="brand-image img-fluid"
                            style={{
                                position: "relative",
                                zIndex: 2,
                                width: 200,
                                height: 100,
                                objectFit: "contain",
                                opacity: 1,
                                transition: "opacity 0.3s ease",
                            }}
                        />
                    )}
                </div>
         </Wrapper>
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.shape({
        logo1: PropTypes.string,
        clientName: PropTypes.string,
        websiteAddress: PropTypes.string,
    }),
};

export default Brand;