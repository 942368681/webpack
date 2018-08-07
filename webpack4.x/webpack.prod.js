const path = require('path');
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig, {
    // 调试
    devtool: 'source-map',
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/js/[name].min.bundle.js',
        chunkFilename: 'assets/js/[name].min.bundle.js',
        publicPath: './'
    },
    // 配置优化
    optimization: {
        // development默认关闭，production时开启
        minimizer: [
            new UglifyJsPlugin({
                exclude: /\.min\.js$/,
                cache: true,
                parallel: true, // 开启并行压缩，充分利用cpu
                sourceMap: true,
                extractComments: false, // 移除注释
                uglifyOptions: {
                    compress: {
                        unused: true,
                        warnings: false,
                        drop_debugger: true
                    },
                    output: {
                        comments: false
                    }
                } 
            }),
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    safe: true,
                    mergeLonghand: false,
                    discardComments: {removeAll: true},
                    autoprefixer: { disable: true },
                },
                canPrint: true
            })
        ],
        // 拆分js
        splitChunks: {
            chunks: "all",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                // 提取 node_modules 中代码
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: "vendors",
                    chunks: "all"
                },
                // 将最少重复引用两次的模块放入default中
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                /* styles: {
                    name: 'styles',
                    test: /\.s?[ac]ss$/,
                    chunks: 'all',
                    enforce: true
                } */
            }
        }
    },
    // 插件
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].min.css',
            chunkFilename: 'assets/css/[name].min.css'
        })
    ],
    mode: 'production'
});