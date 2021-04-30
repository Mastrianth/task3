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
      imagesPublicPath: isProd ? '' : '/_next/static/images/',
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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
      };
      // config.plugins.push(new HtmlCriticalWebpackPlugin({
      //   base: path.resolve(__dirname, 'dist'),
      //   src: 'index.html',
      //   dest: 'index.html',
      //   inline: true,
      //   minify: true,
      //   extract: true,
      //   width: 375,
      //   height: 565,
      //   penthouse: {
      //     blockJSRequests: false,
      //   },
      // }));
    }

    return config;
  },
});
