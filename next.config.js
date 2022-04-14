/**
 * @type {import('next').NextConfig}
 */

const removeImports = require('next-remove-imports')();

const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
};

module.exports = (phase, { nextConfig }) => {
  return removeImports({
    ...nextConfig,
  });
};

// module.exports = nextConfig;
