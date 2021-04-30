const { nextI18NextRewrites } = require('next-i18next/rewrites')
const images = require('next-images');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const localeSubpaths = {}

const conf = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],

    });
    //default optimization.splitChunks = { cacheGroups: { default: false, vendors: false, defaultVendors: false }}



    // const totalPages = 4;
    // config.optimization.splitChunks =  {
    //   chunks: 'all',
    //   cacheGroups: {
    //     default: false,
    //     vendors: false,
    //     commons: {
    //       name: 'commons',
    //       chunks: 'all',
    //       minChunks: totalPages > 2 ? totalPages * 0.5 : 2,
    //     },
    //     react: {
    //       name: 'commons',
    //       chunks: 'all',
    //       test: /[\\/]node_modules[\\/](react|react-dom|debounce)[\\/]/,
    //     },
    //   },
    // };


    config.optimization.splitChunks = {
      chunks: 'async',
      minSize: 20000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      }
    }
    //console.log(config);
    return config;

  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://test2021-frontend-nick-k.abzdev2.com/',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expect-CT',
            value:
              'enforce, max-age=86400',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            key: 'X-UA-Compatible',
            value: 'IE=edge; chrome=1',
          },
          {
            key: 'X-XSS-Protection',
            value:
              '1; mode=block',
          },
        ],
      },

    ];
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};

module.exports = withPlugins([
  [images, { inlineImageLimit: 1, exclude: path.resolve(__dirname, 'public/assets/svg') }],
], conf);






