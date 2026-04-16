"use client";

import dynamic from "next/dynamic";

// Dynamically import CircleLoader with no SSR
const CircleLoader = dynamic(
  () => import("react-spinners").then((mod) => mod.CircleLoader),
  { ssr: false }
);

function Loader() {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // centers vertically
  };

  return (
    <div style={loaderStyle}>
      <CircleLoader color="#0a507a" size={80} />
    </div>
  );
}

export default Loader;