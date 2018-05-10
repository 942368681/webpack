const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
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
                    use: 'css-loader'
                })
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
            /* minify: { 
                collapseWhitespace: true, // 压缩空白区域
                removeAttributeQuotes: true // 删除属性双引号
            }, */
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