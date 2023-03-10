/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["@reservoir0x/reservoir-kit-ui"],
  },
};

module.exports = nextConfig;
