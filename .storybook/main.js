module.exports = {
  "stories": [
    "../stories/**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]'
          },
          sourceMap: true,
        }
      },
    }
  ]
}
