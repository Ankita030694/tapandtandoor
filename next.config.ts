import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "tapntandoor.ca",
          },
        ],
        destination: "https://www.tapntandoor.ca/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "tapandtandoor.vercel.app",
          },
        ],
        destination: "https://www.tapntandoor.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
