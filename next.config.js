// @ts-check

const path = require('path');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "~@styles/theme.module.scss";`
  },
};

module.exports = nextConfig;
