/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.puma.com",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;
