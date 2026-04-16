// import React from 'react';

// function BackgroundVideo({ videoSrc, overlayColor, children, className }) {
//     return (
//         <div
//             className={`position-relative overflow-hidden w-100 ${className}`}
//             style={{ height: '100vh' }} // Ensure the container takes up the full viewport height
//         >
//             <video
//                 className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
//                 src={process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_BASE_URL + videoSrc}
//                 autoPlay
//                 loop
//                 muted
//                 style={{ objectFit: 'cover', zIndex: -1 }} // Ensure the video is behind the overlay
//             />
//             {overlayColor && (
//                 <div
//                     className="position-absolute top-0 start-0 w-100 h-100"
//                     style={{
//                         backgroundColor: overlayColor,
//                         mixBlendMode: 'multiply',
//                         zIndex: 0 // Ensure the overlay is above the video
//                     }}
//                 />
//             )}
//             <div className="position-relative z-index-1">
//                 {children} {/* Content will appear on top of the video */}
//             </div>
//         </div>
//     );
// }

// export default BackgroundVideo;









"use client";
import { style } from "d3-selection";
import React, { useEffect, useState } from "react";

function BackgroundVideo({ videoSrc, overlayColor, children, className }) {
  // const [height, setHeight] = useState("100svh");

  // useEffect(() => {
  //   const updateHeight = () => {
  //     if (window.innerWidth <= 768) {
  //       setHeight("70vh"); // MOBILE HEIGHT
  //     } else {
  //       setHeight("100svh"); // DESKTOP HEIGHT
  //     }
  //   };

  //   updateHeight();
  //   window.addEventListener("resize", updateHeight);

  //   return () => window.removeEventListener("resize", updateHeight);
  // }, []);

  return (
    <div
      className={`position-relative overflow-hidden  w-100 ${className}` }

    >
      <video
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        src={process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_BASE_URL + videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: -1 }}
      />

      {overlayColor && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: overlayColor,
            mixBlendMode: "multiply",
            zIndex: 0,
          }}
        />
      )}

      <div className="position-relative z-index-1 h-100">{children}</div>
    </div>
  );
}

export default BackgroundVideo;






















