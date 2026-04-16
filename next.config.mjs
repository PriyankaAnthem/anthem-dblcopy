// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;




// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   images: {
// //     remotePatterns: [
// //       {
// //         protocol: "https",
// //         hostname: "res.cloudinary.com",
// //         pathname: "/dzmfvr3dm/**", // match your folder structure
// //       },
// //     ],
// //   },
// // };

// // export default nextConfig;





// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//         pathname: "/**", // Match all paths under res.cloudinary.com
//       },
//     ],
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "management.workanthem.com",
//         pathname: "/**", // match your folder
//       },
//     ],
//   },
// };

// export default nextConfig;



import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "management.workanthem.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
