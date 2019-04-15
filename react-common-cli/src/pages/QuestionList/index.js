import React from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({
        data: state.questionBankReducer.b
    }),
    dispatch => ({
      
    })
)
class QuestionList extends React.PureComponent {
    componentDidMount() {
        console.log(this.props.data);
    };
    
    render () {
        return (
            <div>题库</div>
        );
    };
}

export default QuestionList;
