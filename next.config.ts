/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
     allowedDevOrigins: ['192.168.100.44'],

  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;

// const nextConfig = {
//    allowedDevOrigins: ['192.168.100.44'],
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "*",
//       },
//     ],
   
//   },
// };

// export default nextConfig;