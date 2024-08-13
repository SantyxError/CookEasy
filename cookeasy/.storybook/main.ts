module.exports = {
  stories: ["../src/ui/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],
  framework: "@storybook/react-vite",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/images",
          },
        },
      ],
    });

    return config;
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
