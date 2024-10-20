// next.config.js

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@napi-rs/canvas"],
    serverComponentsExternalPackages: ["@napi-rs/image"],
  },
};
module.exports = nextConfig;
