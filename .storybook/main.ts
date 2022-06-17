module.exports = {
  stories: ['../src/stories/*.stories.tsx'],
    staticDirs: ['../public'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/preset-create-react-app',
      '@storybook/addon-interactions',
    ],
    features: {
      postcss: false,
    },
    framework: '@storybook/react',
    core: {
      builder: 'webpack4',
    },
    typescript: {
      check: true,
      checkOptions: {
        tsConfig: '../'
      },
      reactDocgen: 'react-docgen-typescript',
      reactDocgenTypescriptOptions: {
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      },
    },
 
  };
  