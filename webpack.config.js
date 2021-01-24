const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./webpack.config.base')

module.exports = {
  ...base,
  mode: 'development', //模式改为production模式
  devtool: "inline-source-map",
  devServer: { //添加devServer相关配置
    contentBase: './dist',
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};

   