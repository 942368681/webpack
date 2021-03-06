import React, {Component}from 'react';
import ReactDOM from 'react-dom';
// 全局公共css
import './common/style/main.css';
import './common/fonts/iconfont.css';
// 模块化css
import appStyle from './css/index.css';
// 图片静态资源
import kobePic from './common/img/kobe.jpg';

ReactDOM.render(
    // 需babel-loader预处理JSX语法
    <div>
        <div id = { appStyle.title }>hello world</div>
        <img src = { kobePic } />
        <div className = "iconfont icon-login"></div>
    </div>,
    document.getElementById('root')
);
