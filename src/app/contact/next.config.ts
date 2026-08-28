import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "10.206.2.246",
    "172.20.10.2",
  ],
};

export default nextConfig;
