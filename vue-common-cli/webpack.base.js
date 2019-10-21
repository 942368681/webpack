const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name].bundle.[hash:8].js',
        publicPath: './'
    },
    resolve: {
        modules: [path.resolve( __dirname, 'node_modules')],
        extensions: ['.vue', '.js', '.json'],
        alias: {
            Utilities: path.resolve(__dirname, 'src/common/utils')
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|vue)$/,
            //     use: "eslint-loader",
            //     enforce: "pre",
            //     exclude: [
            //         path.resolve(__dirname, 'node_modules')
            //     ]
            // },
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 200*1024,
                            name: '[name]_[hash:6].[ext]',
                            outputPath: 'img/'
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
                            name: 'fonts/[name]_[hash:6].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ["html-withimg-loader"]
            }
        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
    ]
};