/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ntaweli-hr.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "*",
      }
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
