const path = require('path');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./base.js');

let config  = WebpackMerge(baseConfig, {
    entry: path.resolve(__dirname, '../example/index.js'),
    output: {
        filename: '[name].[hash:7].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, '../src'),
            '@': path.resolve(__dirname, '../lib')
        }
    },
    module: {
        rules: [
            {
                test: /\.s?css/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    remove: false
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        disableHostCheck: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../example/index.html'),
            filename: path.resolve(__dirname, '../dist/index.html')
        })
    ]
});

module.exports = config;
