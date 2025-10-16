import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // do NOT fail CI builds on lint errors
  },
};

export default nextConfig;
