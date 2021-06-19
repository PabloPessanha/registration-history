import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllUsers from './pages/AllUsers';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllUsers} />
        <Route path="users" component={Register} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}