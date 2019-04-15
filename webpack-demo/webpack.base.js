const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const Happypack = require('happypack');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.[hash:6].js',
        publicPath: './'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
    module: {
        noParse: /jquery/,
        rules: [
            // {
            //     test: /\.js$/,
            //     use: "eslint-loader",
            //     enforce: "pre",
            //     exclude: [
            //         path.resolve(__dirname, 'node_modules')
            //     ]
            // },
            {
                test: /\.(js|jsx)$/,
                use: "Happypack/loader?id=js",
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "Happypack/loader?id=css"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "Happypack/loader?id=less"
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5*1024,
                            name: '[name]_[hash:8].[ext]',
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
                            name: 'fonts/[name]_[hash:8].[ext]'
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
    plugins: [
        new Happypack({
            id: 'js',
            use: ["babel-loader"]
        }),
        new Happypack({
            id: 'css',
            use: [
                "css-loader",
                "postcss-loader"
            ]
        }),
        new Happypack({
            id: 'less',
            use: [
                "css-loader",
                "postcss-loader",
                "less-loader"
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
};