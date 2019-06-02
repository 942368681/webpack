import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

@connect(
    state => ({
        num: state.workListReducer.a,
    }),
    {
        changeAsync: actions.changeNumAsync,
        change: actions.changeNum
    }
)
class QuestionList extends React.PureComponent {
    changeNum = () => {
        console.log(this.props.num);  // 1
        this.props.change(99);
        console.log(this.props.num);  // 1
        setTimeout(() => {
            console.log(this.props.num); // 99
        }, 0);
    };
    render () {
        const { num } = this.props;
        return (
            <h2 onClick={this.changeNum}>{num}</h2>
        );
    };
}

export default QuestionList;
