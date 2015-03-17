'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';

import Header from './Header';

var App = React.createClass({
  render: function () {
    return (
      <div id="app">
        <Header title="Optimized React" />
        <main role="main">
          <RouteHandler />
        </main>
      </div>
    );
  }
});

export default App;

