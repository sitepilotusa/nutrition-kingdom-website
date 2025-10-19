import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/storelocator",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
