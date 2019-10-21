const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].bundle.[hash:8].js',
        publicPath: '/'
    },
    resolve: {
        modules: [path.resolve( __dirname, 'node modules')],
        extensions: ['.js', '.jsx'],
        alias: {
            Utilities: path.resolve(__dirname, 'src/common/utils')
        }
    },
    module: {
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
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2*1024,
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
            }
        ]
    },
    // 插件
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
    ]
};