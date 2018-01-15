const webpack = require('webpack');

const config = {
  devtool: 'source-map',
  module: {
    rules: [],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
};

module.exports = config;
