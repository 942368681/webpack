import { combineReducers } from 'redux';
import workListReducer from './workListReducer';
import questionBankReducer from './questionBankReducer';

export default combineReducers({
    workListReducer,
    questionBankReducer
})