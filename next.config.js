/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_HOST}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.NODE_ENV === "development" ? "http" : "https",
        hostname: process.env.NODE_ENV === "development" ? "localhost" : "**",
        port: process.env.NODE_ENV === "development" ? "4566" : "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
