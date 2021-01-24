const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', //输入改为src/index.js文件
  output: {
    //path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'My App',  //HTML文件的title
        template: 'src/assets/test.html' //HTML文档的模板文件
      }),
  ]
};

   