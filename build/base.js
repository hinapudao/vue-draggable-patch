const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, '../config/babel.js')
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    stats: {
        chunks: false,
        children: false,
        entrypoints: false,
        modules: false
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
