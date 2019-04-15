const {smart} = require("webpack-merge");
const base = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = smart(base, {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            MODE: JSON.stringify('dev')
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash: true,
            filename: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: 3008,
        progress: true,
        hot: true,
        open: true,
        compress: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
});