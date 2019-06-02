import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomeworkList from '../pages/HomeworkList';
import QuestionList from '../pages/QuestionList';
import Home from '../pages/Home';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/homeworkList" component={HomeworkList} />
            <Route path="/questionList" component={QuestionList} />
            <Redirect to="/" />
        </Switch>
    </Router>
);
  