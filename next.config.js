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
