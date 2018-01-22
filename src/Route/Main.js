import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Home, Users } from '../container';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={Users} />
  </Switch>
);

export default withRouter(Main);
