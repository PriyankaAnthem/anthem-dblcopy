'use client';

import PropTypes from "prop-types";
import React from 'react';
import ReactVivus from 'react-vivus';
import Link from 'next/link';

const IconBoxService = ({ data, classOption, index }) => {
    return (
        <div className={`icon-box text-center ${classOption}`} style={{ height: "350px" }}>
         
                <div className="icon">
                    <ReactVivus
                        id={`ser-${index}`}
                        option={{
                            file: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/${data.icon}`,
                            animTimingFunction: 'EASE',
                            type: 'oneByOne',
                            delay: 80
                        }}
                    />
                </div>
                <div className="content">
                    <h3 className="title">{data.name}</h3>
                    <div className="desc">
                        <p>{data.description}</p>
                    </div>
                </div>
          
        </div>
    )
}

IconBoxService.defaultProps = {
    classOption: "icon-box text-center",
};

export default IconBoxService;
