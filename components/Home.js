'use strict';

import React from 'react';

var Home = React.createClass({
  getInitialState: function () {
    return {
      message: null
    };
  },
  handleClick: function () {
    this.setState({
      message: 'Event bindings work'
    });
  },
  render: function () {
    return (
      <div className="container">
        <h3>Home</h3>
        <button onClick={this.handleClick}>Test event bindings</button>
        <small>{this.state.message}</small>
      </div>
    );
  }
});

export default Home;

