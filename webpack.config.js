const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
      app: './src/index.js'
  },
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new CleanWebpackPlugin([ 'dist' ]),
      new HtmlWebpackPlugin({ title: 'Hello World' })
  ],
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: [
        'style-loader', 
        'css-loader', 
        'postcss-loader',
        'sass-loader'
      ]
    }]
  }
};