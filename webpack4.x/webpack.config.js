const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // 调试
    devtool: 'cheap-module-source-map',
    // 入口配置
    entry: './src/app.js',
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/js/bundle.js',
        publicPath: './'
    },
    // module(里面配rules -> loaders)
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            module: true, //开启css模块化
                            localIdentName: '[path]-[name]-[local]-[hash:base64:6]'
                        }
                    }
                }),
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
                include: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
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
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
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
        new cleanWebpackPlugin(['dist/assets']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('assets/css/index.css')
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