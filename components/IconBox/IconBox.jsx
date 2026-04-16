"use client";
import PropTypes from "prop-types";
import React, { useEffect } from 'react';
import ReactVivus from 'react-vivus';
import Link from "next/link";

const IconBox = ({ data, classOption }) => {
    const iconName = data.icon;
    const iconUrl = `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/${iconName}`;

    useEffect(() => {
        const equalizeHeights = () => {
            const boxes = document.querySelectorAll(".icon-box.equal-height");

            let maxHeight = 0;

            // Reset & find max
            boxes.forEach(box => {
                box.style.height = "auto";
                const h = box.offsetHeight;
                if (h > maxHeight) maxHeight = h;
            });

            // Set equal height
            boxes.forEach(box => {
                box.style.height = `${maxHeight}px`;
            });
        };

        // 🟦 Delay ensures SVG + content are fully rendered
        const timer = setTimeout(() => {
            equalizeHeights();
            window.addEventListener("resize", equalizeHeights);
        }, 250); // 250ms = perfect timing for Vivus SVG

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", equalizeHeights);
        };
    }, []);

    return (
        <div className={`icon-box equal-height text-center ${classOption}`}>
          <Link href={data.link}>
          <div className="icon">
                    <ReactVivus
                        id={`servicesvg-${data.id}`}
                        option={{
                            file: iconUrl,
                            animTimingFunction: 'EASE',
                            type: 'oneByOne',
                            delay: 80
                        }}
                    />
                </div>
                <div className="content">
                    <h3 className="title">{data.title}</h3>
                    <div className="desc">
                        <p>{data.desc}</p>
                    </div>
                </div>
          </Link>
                
          
        </div>
    );
};

IconBox.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

IconBox.defaultProps = {
    classOption: "icon-box text-center",
};

export default IconBox;

