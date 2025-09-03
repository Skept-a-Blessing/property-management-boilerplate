import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // Disable turbopack for production builds
      enabled: false,
    },
  },
};

export default nextConfig;
