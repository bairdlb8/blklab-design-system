const path = require('path')

module.exports = ['@storybook/addon-docs/react/preset']

module.exports = {
  stories: [
    '../src/basics/**/*.stories.(js|mdx)',
    '../src/components/**/*.stories.(js|mdx)',
    '../src/features/**/*.stories.(js|mdx)',
    '../src/layouts/**/*.stories.(js|mdx)',
    '../src/containers/**/*.stories.(js|mdx)',
    '../src/templates/**/*.stories.(js|mdx)',
    '../src/pages/**/*.stories.(js|mdx)',
    '../src/*.stories.(js|mdx)'
  ],
  addons: [
    // '@storybook/addon-knobs/register',
    '@storybook/addon-controls',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
        include: path.resolve(__dirname, '../src')
      }
    )

    return config
  }
}
