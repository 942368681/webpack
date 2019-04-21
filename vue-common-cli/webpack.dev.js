const path = require('path');
const baseConfig = require('./webpack.base.js');
const {smart} = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = smart(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash: true, 
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            FLAG: JSON.stringify('dev')
        })
    ],
    devServer: {
        host: 'localhost',
        hot: true, 
        port: 3007,
        progress: true,
        open: true,
        compress: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        historyApiFallback: true,
        // proxy: {
        //     "/api": {
        //         "target": 'http://localhost:8080',
        //         "changeOrigin": true,
        //         "pathRewrite": {
        //             "^/api": ""
        //         }
        //     }
        // }
    },
    mode: 'development'
});