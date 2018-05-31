const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    // 调试
    devtool: 'cheap-module-eval-source-map',
    // 入口配置
    entry: {
        index: './src/app.js',
    },
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/js/[name].bundle.js',
        publicPath: './'
    },
    // module(里面配rules -> loaders)
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            module: true, //开启css模块化
                            localIdentName: 'purify_[path]-[name]-[local]-[hash:base64:6]'
                        }
                    },
                    'postcss-loader'
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'postcss-loader'
                ],
                include: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'less-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50000,
                            name: 'assets/img/[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/fonts/[name]_[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    // 配置优化
    optimization: {
        // development默认关闭，production时开启
        minimizer: [
            new UglifyJsPlugin({
                exclude: /\.min\.js$/,
                cache: true,
                parallel: true,
                sourceMap: false,
                extractComments: false,
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
            chunks: "async",
            minSize: 30000,
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
                styles: {
                    name: 'styles',
                    test: /\.s?[ac]ss$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html', // 模版
            title: 'webpack 4.x', // 标题
            hash: true, // 清除缓存
            // 压缩输出
            minify: { 
                collapseWhitespace: true, // 压缩空白区域
                removeAttributeQuotes: true // 删除属性双引号
            },
            filename: 'index.html' // 文件名
        }),
        new cleanWebpackPlugin(['dist/assets', 'dist/static']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[id].css'
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/static'),
                to: './static'
            }
        ]),
        // 引入第三方库
        new webpack.ProvidePlugin({
            // $: 'jquery'
        })
    ],
    // 开发服务器
    devServer: {
        // 设置服务器访问路径
        contentBase: path.resolve(__dirname, 'dist'),
        // ip
        host: 'localhost',
        // 端口
        port: 8090,
        // 自动启动默认浏览器
        open: true,
        // 热更新
        hot: true,
        publicPath: '/'
    }
};