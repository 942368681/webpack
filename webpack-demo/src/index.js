import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import botImg from './common/img/susp_bot.png';
import '@babel/polyfill';
import './index.css';
import './common/style/common.less';

console.log("app!!!!")

class App extends Component {
    constructor(){
        super();
        this.state = {
           
        };
    };
    componentDidMount () {
        const obj1 = {
            "a": 1,
            "b": 2
        };
        const obj2 = {
            "c": 3,
            "d": 4
        };
        const newObj = {...obj1, ...obj2};
        console.log(newObj);
        console.log('Blue Whale'.includes('blue'));
    };
    print = () => {
        console.log("click");
    };
    render () {
        return (
            <div>
                <img src={botImg}></img>
                <button onClick={this.print}>click</button>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}