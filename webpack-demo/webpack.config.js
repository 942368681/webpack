const path = require('path');
// 创建HTML文件的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 此文件是nodejs来跑的，所以要用node的模块化语法，而不是ES6的
module.exports = {
    /* 入口 */
    entry: './src/app.js',
    /* 出口 */
    output: {
        // output中的path是绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    /* 插件 */
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    /* loader（预处理） */
    module: {
        rules: [
            // 匹配js文件采用babel-loader编译
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        // babel-loader可以编译es6，jsx，所以要进行预设（options）
                        options: {
                            presets: ['react'] //编译jsx
                        }
                    }
                ]
            },
            // 预处理css
            {
                // 模块化处理
                test: /\.css$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            module: true, //开启css模块化
                            localIdentName: '[path]-[name]-[local]-[hash:base64:6]' //生成类名的命名规则设定（默认hash:base64）
                        }
                    }
                ],
                // 排除
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                // 普通处理
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            // 预处理图片
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 配置为图片小于10kb，进行base64编码直接加载进页面，否则打包图片再加载
                            limit: 10000
                        } 
                    }
                ]
            },
            // 预处理字体文件
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: ['file-loader']
            }
        ]
    },
    /* webpack-dev-server的相关配置 */
    devServer: {
        open: true, //启动服务自动打开浏览器访问
        port: 9000, //更改端口
    }
};