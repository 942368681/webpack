import React, {Component}from 'react';

class Banner extends Component {
    constructor (props) {
        super(props);
    };
    componentWillReceiveProps = (nextProps) => {
        
    };
    shouldComponentUpdate = (nextProps, nextState) => {
        
    };
    handleBtn = () => {
        
    };
    render() {
        return (
            <div>
                <span>{this.props.bannerText}</span><br/>
                <button type="button" onClick = {this.handleBtn}>click</button>
            </div>
        );
    }
}

export default Banner;