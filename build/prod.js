const path = require('path');
const baseConfig = require('./base.js');
const WebpackMerge = require('webpack-merge');

let prodConfig = WebpackMerge(baseConfig, {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../lib'),
        library: 'Patch',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },
    mode: 'production'
});

module.exports = prodConfig;
