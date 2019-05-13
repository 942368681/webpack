const path = require('path');
const baseConfig = require('./webpack.base.js');
const {smart} = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('mocker-api');

module.exports = smart(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash: true, 
            filename: 'index.html'
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
        before (app) {
            apiMocker(app, path.resolve('./src/mock/mocker.js'))
        }
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