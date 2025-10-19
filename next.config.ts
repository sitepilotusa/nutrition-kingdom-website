import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [360, 414, 540, 768, 1024],
    imageSizes: [160, 240, 320, 480, 640],
  },
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
