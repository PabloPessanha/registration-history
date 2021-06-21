import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllUsers from './pages/AllUsers';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/users" component={AllUsers} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
