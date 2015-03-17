'use strict';

import React from 'react';
import Router from 'react-router';

var Page = React.createClass({
  mixins: [Router.State],
  render: function () {
    var now = Date.now();

    return (
      <div className="container">
        <h3>Page {this.getParams().pageNumber}</h3>
        <small>{now}</small>
      </div>
    );
  }
});

export default Page;

