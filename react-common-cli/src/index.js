import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Router from './router/router';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './common/style/main.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}