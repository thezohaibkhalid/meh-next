/** @type {import('next').NextConfig} */
const nextConfig = {
  // This option enables the creation of a standalone folder
  // which copies only the necessary files for a production deployment.
  // This is crucial for the optimized Dockerfile.
  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/**',
      },

    ],
  },

  // experimental: {
  //   allowedDevOrigins: ['http://192.168.100.44:3000'],
  // },
};

module.exports = nextConfig;
