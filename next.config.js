const path = require('path');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const isProd = process.env.NODE_ENV === 'production';

const localeSubpaths = {
  de: 'de',
};

module.exports = withPlugins([
  [
    optimizedImages, {
      optimizeImages: false,
      imagesPublicPath: isProd ? 'https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/' : '/_next/static/images/',
      inlineImageLimit: 1,
    },
  ],
], {
  compress: false,
  crossOrigin: 'anonymous',
  reactStrictMode: true,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  // assetPrefix: isProd ? 'https://test2021-frontend-nick-k-task3-source.abzdev2.com' : '',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
      };

      require('./scripts/generate-sitemap');
      // config.optimization.splitChunks = {
      //   chunks: 'async',
      //   minSize: 20000,
      //   maxSize: 0,
      //   minChunks: 1,
      //   maxAsyncRequests: 30,
      //   maxInitialRequests: 30,
      //   enforceSizeThreshold: 50000,
      //   cacheGroups: {
      //     defaultVendors: {
      //       test: /[\\/]node_modules[\\/]/,
      //       priority: -10,
      //       reuseExistingChunk: true,
      //     },
      //     default: {
      //       minChunks: 2,
      //       priority: -20,
      //       reuseExistingChunk: true,
      //     },
      //   },
      // };
    }

    return config;
  },
});
