const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/index.js', //输入改为src/index.js文件
    output: {
        //path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App', //HTML文件的title
            template: 'src/assets/test.html' //HTML文档的模板文件
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            {
                  test: /\.styl$/i,
                  use: [
                    "style-loader",
                    {
                      loader: "css-loader",
                      options: {
                        sourceMap: true,
                      },
                    },
                    {
                      loader: "stylus-loader",
                      options: {
                        sourceMap: true,
                      },
                    },
                  ],
                },              
            {
                test: /\.less$/,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ]
            }
        ]
    }
};