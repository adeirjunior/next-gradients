const config = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  typescript: {
    check: true,

    reactDocgen: 'react-docgen-typescript'
  },

  docs: {}
};

export default config