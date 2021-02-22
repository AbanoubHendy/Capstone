const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/Client/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
