import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.tailgrids.com',
      },
      {
        protocol: 'https',
        hostname: '**', // Match all hostnames
      },
    ],
  },/* config options here */
};

export default nextConfig;
