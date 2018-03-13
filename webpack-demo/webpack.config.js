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
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    // babel-loader可以编译es6，jsx，所以要进行预设（options）
                    options: {
                        presets: ['react']
                    }
                }]
            }
        ]
    }
};