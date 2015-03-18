'use strict';

import React from 'react';

var Home = React.createClass({
  getInitialState: function () {
    return {
      message: 'Probably not'
    };
  },
  componentDidMount: function () {
    this.setState({
      message: 'Yes'
    });
  },
  render: function () {
    return (
      <div className="container">
        <h3>Home</h3>
        <p>Is JavaScript loaded?</p>
        <small>{this.state.message}</small>
      </div>
    );
  }
});

export default Home;

