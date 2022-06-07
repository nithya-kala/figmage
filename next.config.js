const isGHPages =
  process.env.HOST_ENV && process.env.HOST_ENV.toLowerCase() === "ghpages"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: (isGHPages && "/figmage") || "",
  assetPrefix: (isGHPages && "/figmage/") || "", // assetPrefix requires the trailing slash
}

module.exports = nextConfig
