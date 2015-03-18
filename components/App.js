'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';

import Header from './Header';

var App = React.createClass({
  render: function () {
    return (
      <div className="page-wrap">
        <Header title="Isomorphic React" />
        <main role="main">
          <RouteHandler />
        </main>
      </div>
    );
  }
});

export default App;

