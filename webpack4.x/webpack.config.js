const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

module.exports = env => {
    if (env.mode === 'dev') {
        // 开发环境
        return devConfig;
    } else {
        // 生产环境
        return prodConfig;
    }
}