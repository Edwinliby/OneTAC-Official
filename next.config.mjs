/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beckn-ui-application.s3.ap-south-1.amazonaws.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
