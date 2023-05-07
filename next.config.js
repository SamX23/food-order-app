/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const isProduction = process.env.NODE_ENV === "production";

const config = {
  reactStrictMode: true,
};

const withPWA = require("next-pwa")({
  disable: !isProduction,
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
});

const nextConfig = withPWA(config);

module.exports = nextConfig;
