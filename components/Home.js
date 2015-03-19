'use strict';

import React from 'react';

var Home = React.createClass({
  getInitialState: function () {
    return {
      loaded: false
    };
  },
  componentDidMount: function () {
    this.setState({
      loaded: true
    });
  },
  render: function () {
    var message = this.state.loaded ? 'Yes' : 'No';

    return (
      <div className="container">
        <h3>Home</h3>
        <p>Is JavaScript loaded?</p>
        <small>{message}</small>
      </div>
    );
  }
});

export default Home;

