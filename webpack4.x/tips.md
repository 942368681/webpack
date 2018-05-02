## webpack4.x

#### 作用：
    1.打包（根据模块间依赖关系，把多个文件打包为一个js文件，减小服务器压力，减小带宽）；
    2.转化（依赖loader）；
    3.优化（SPA）；

#### 构成：
    1.入口（entry）
    2.出口（output）
    3.loaders（编译器，预处理）
    4.plugins（插件）
    5.devServer（开发服务器）
    6.mode（模式，开发/生产模式，4.x）

#### 本地安装：
    1.node环境
    2.npm i -S webpack-cli
    3.npm i -S webpack

#### 开发环境：（development）
    编写代码的环境
    npm i -D XXX / npm i --save-dev XXX

#### 生产环境：（production）
    开发完毕，部署上线
    npm i -S XXX / npm i --save XXX

#### 初始化项目依赖配置文件（package.json）
    npm init -y

#### 简单的一次打包过程
    webpack .\src\index.js --output .\dist\bundle.js

#### webpack配置文件（webpack.config.js）
    module.exports = {
        // 入口配置
        entry: {},
        // 出口
        output: {},
        // module(里面配rules -> loaders)
        module: {},
        // 插件
        plugins: [],
        // 开发服务器
        decServer: {}
    };

#### mode(webpack4.x)
    webpack --mode development
    webpack --mode production（压缩代码）

#### js单入口，单出口
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    }

#### js多入口，单出口
    entry: ['./src/index.js', './src/index2.js'], 按照顺序依次打包
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    }

#### js多入口，多出口
    entry: {
        index: './src/index.js',
        index2: './src/index2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].bundle.js' // [name]，变量，打包后分别对应index，index2
    }

#### 插件（html-webpack-plugin）
    1.安装
        npm i -D html-webpack-plugin
    2.引入
        const HtmlWebpackPlugin = require('html-webpack-plugin')
    3.使用
        plugins: [
            new HtmlWebpackPlugin()
        ]

#### 多页面（分别引入对应的js）
    entry: {
        a: './src/index.js',
        b: './src/index2.js',
        c: './src/index3.js',
        d: './src/index4.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['a', 'd'], // 想分别引入对应的js时，必选
            filename: 'index1.html', // 必选
            title: '第一个页面',
            templete: './src/index1.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['b', 'c'], // 想分别引入对应的js时，必选
            filename: 'index2.html', // 必选
            title: '第二个页面',
            templete: './src/index2.html'
        })
    ]

#### devServer（开发服务器）
    1.安装
        npm i -D webpack-dev-server
    2.热更新
        hot: true
        const webpack = require('webpack')
        new webpack.NamedModulesPlugin()
        new webpack.HotModuleReplacementPlugin()
        if (module.hot) {
            module.hot.accept();
        }


#### loaders

