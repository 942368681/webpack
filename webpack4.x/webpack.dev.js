const path = require('path');
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    // 调试
    devtool: 'cheap-module-eval-source-map',
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/js/[name].bundle.js',
        chunkFilename: 'assets/js/[name].bundle.js',
        publicPath: './'
    },
    // 插件
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[name].css'
        })
    ],
    // 开发服务器
    devServer: {
        // 设置服务器访问路径
        contentBase: path.resolve(__dirname, 'dist'),
        // ip
        host: 'localhost',
        // 端口
        port: 3000,
        // 自动启动默认浏览器
        open: true,
        // 热更新
        hot: true,
        publicPath: '/'
    },
    mode: 'development'
});