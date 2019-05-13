const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        "index": './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js/'),
        filename: '[name].bundle.[hash:8].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path]-[name]-[local]-[hash:base64:6]'
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
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
                include: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // 模版
            title: 'webpack 4.x', // 标题
            hash: true, // 清除缓存
            filename: 'index.html', // 文件名
            // minify: {
            //     removeAttributeQuotes: true, // 删除属性双引号
            //     collapseWhitespace: true // 压缩为一行 
            // }
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        host: 'localhost', // 域名
        hot: true, // 热更新
        port: 3000, // 端口
        progress: true, // 开启进度条
        open: true, // 自动打开默认浏览器
        compress: true, // 采用gzip压缩
        historyApiFallback: true, // 使用HTML5 History API时，index.html可能必须提供该页面来代替任何404响应
        contentBase: path.resolve(__dirname, 'dist'), // 服务器当前执行目录
        publicPath: '/'
    }
};