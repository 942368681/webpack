const {smart} = require("webpack-merge");
const base = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = smart(base, {
    mode: 'production',
    watch: false, 
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 500, 
        ignored: /node_modules/
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin('make 2019 by sfl'),
        new webpack.DefinePlugin({
            MODE: JSON.stringify('prod')
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'doc'),
                to: './doc'
            }
        ]),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash: true,
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                exclude: /\.min\.js$/,
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        // 分割代码块
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~', // 打包分隔符
            name: true,
            cacheGroups: { // 缓存组
                // 抽离公共模块（针对非单页应用（多入口多出口），把各页面相同的引用抽离出去）
                default: {
                    priority: -20,
                    chunks: 'initial', // 从入口开始提取代码
                    minSize: 0, // 超过0个字节被公用，就提取
                    minChunks: 2, // 被用了2次及以上
                    reuseExistingChunk: true
                },
                // 抽离第三方模块
                vendors: {
                    priority: -10, // 权重，先抽离第三方模块，再去抽离default
                    test: /node_modules/,
                    name: "vendors",
                    chunks: "initial"
                }
            }
        }
    }
});