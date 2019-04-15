import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomeworkList from '../pages/HomeworkList';
import QuestionList from '../pages/QuestionList';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={HomeworkList} />
            <Route path="/questionList" component={QuestionList} />
            <Redirect to="/" />
        </Switch>
    </Router>
);
  