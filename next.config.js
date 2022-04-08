/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
};

module.exports = nextConfig;
