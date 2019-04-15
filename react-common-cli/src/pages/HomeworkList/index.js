import React from 'react';
import { connect } from 'react-redux';
import oStyle from './index.css';
import ajaxRequest from 'Utilities/ajax';

@connect(
    state => ({
        data: state.workListReducer.a
    }),
    dispatch => ({
      
    })
)
class HomeworkList extends React.PureComponent {
    componentDidMount() {
        console.log(this.props.data);
        this.testGetData();
    };
    
    async testGetData () {
        const {
            req1,
            req2,
            req3
        } = this;
        const mainDataArr = await Promise.all([
            req1(),
            req2(),
            req3()
        ]);
        console.log(mainDataArr);
    };

    req1 = () => {
        return ajaxRequest({
            method: 'GET',
            url: "https://api.github.com/users/sfl",
            useOwnUrl: true,
            data: {}
        });
    };
    req2 = () => {
        return ajaxRequest({
            method: 'GET',
            url: "https://api.github.com/users/kobe",
            useOwnUrl: true,
            data: {}
        });
    };
    req3 = () => {
        return ajaxRequest({
            method: 'GET',
            url: "https://api.github.com/users/curry",
            useOwnUrl: true,
            data: {}
        });
    };

    render () {
        return (
            <div>
                <div className={oStyle.title}>作业列表</div>
            </div>
        );
    };
}

export default HomeworkList;
