import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.technewsworld.com",
      },
      {
        protocol: "https",
        hostname: "lf16-statics.picovr.com",
      },
      {
        protocol: "https",
        hostname: "cdn.mos.cms.futurecdn.net",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "static.xx.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "virtualspeech-com.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: "optim.tildacdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "metaverselearning.co.uk",
      },
      {
        protocol: "https",
        hostname: "vrelax.com",
      },
      {
        protocol: "https",
        hostname: "airvear.com",
      },
      {
        protocol: "https",
        hostname: "imersifi.com",
      },
    ],
  },
};

export default nextConfig;
