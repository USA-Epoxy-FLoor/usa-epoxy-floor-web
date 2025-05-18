import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/our-work",
        destination: "/our-work/All",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
