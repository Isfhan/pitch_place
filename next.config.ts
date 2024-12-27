import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // allow images from anywhere
      },
    ],
  },
  experimental: {
    after: true,
  },
};

export default nextConfig;
