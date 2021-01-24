const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const base = require('./webpack.config.base')

module.exports = {
  ...base,
  mode: 'production',
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/public/path/to/',
              },
            },
             'css-loader'],
      },
    ],
  },
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({ //添加MiniCssExtractPlugin实例
        filename: '[name].css',
        chunkFilename: '[id].css', 
        ignoreOrder: false,
      }),
  ]
};