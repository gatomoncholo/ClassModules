const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  }
};
