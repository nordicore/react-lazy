const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-syntax-dynamic-import']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new Dotenv({
      path: './.env',
      safe: true
    })
  ],
  devServer: {
    contentBase: "./public",
    historyApiFallback: true
  },
  devtool: 'eval-cheap-source-map'
};