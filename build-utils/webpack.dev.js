const config = {
  devServer: {
    port: 8082,
    historyApiFallback: true,
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;

