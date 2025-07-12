/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname: "/63c9df6b055c091e80c5d708/**",
      },
    ],
    domains: ['cdn.prod.website-files.com'],
  },
};

export default nextConfig;