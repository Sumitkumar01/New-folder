/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // images: {
  //   domains: [
  //     "eazotel-client-images.s3.ap-south-1.amazonaws.com",
  //     "cdn.builder.io",
  //   ],
  // },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-client-images.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
    ],
  },
};

export default nextConfig;
