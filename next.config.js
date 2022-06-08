const isGHPages =
  process.env.HOST_ENV && process.env.HOST_ENV.toLowerCase() === "ghpages"
    ? "prod"
    : "local"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: isGHPages === "prod" ? "/figmage" : "",
  assetPrefix: isGHPages === "prod" ? "/figmage" : "", // assetPrefix requires the trailing slash
}

module.exports = nextConfig
