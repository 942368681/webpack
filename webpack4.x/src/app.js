import React, {Component}from 'react';
import ReactDOM from 'react-dom';
// 全局公共css
import './common/style/main.css';
import './common/fonts/iconfont.css';
// sass
import './common/style/main.scss';
// 模块化css
import appStyle from './css/index.css';
// 图片静态资源
import kobePic from './common/img/kobe.jpg';
import rosePic from './common/img/rose.jpg';

class Greeter extends Component {
    componentDidMount = () => {
        let obj1 = {
            "a": 1,
            "b": 2
        };
        let obj2 = {
            ...obj1,
            "c": 3
        };
        console.log(obj2);
    };
    render() {
        return (
            <div>
                <div className = "o">React</div>
                <div id = { appStyle.title } className = "title">hello world</div>
                <img src = { kobePic } />
                <img src = { rosePic } />
                <div className = "iconfont icon-login"></div>
            </div>
        );
    }
}

ReactDOM.render(
    <Greeter />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}