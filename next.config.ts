import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatar.vercel.sh",
      },
      {
        hostname: "ideogram.ai",
      },
      {
        hostname: "plum-active-landfowl-217.mypinata.cloud",
      },
    ],
  },
};

export default nextConfig;
