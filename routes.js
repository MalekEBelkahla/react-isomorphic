'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Page from './components/Page';

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/home" handler={Home} />
    <Route name="pages" path="/page">
      <Route name="page" path=":pageNumber" handler={Page} />
    </Route>
    <DefaultRoute handler={Home} />
  </Route>
);

export default routes;

