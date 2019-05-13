import './common/style/main.css';
import '@babel/polyfill';
import icon from './common/img/empty.png';
import './common/fonts/iconfont.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
    constructor(){
        super();
        this.state = {
           
        };
    };
    componentDidMount () {
        console.log(1);
    };
    render () {
        return (
            <div>
                hello world!
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));