/** @type {import('next').NextConfig} */
const path = require("path");
const webpack = require("./webpack.config");
const nextConfig = {
  webpack,
  reactStrictMode: true,
  output: "standalone",
  swcMinify: true,
  experimental: {
    appDir: true,
    outputFileTracingRoot: path.join(__dirname, "../../"),
    transpilePackages: ["ui"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
