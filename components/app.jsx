'use strict';

var React = require('react');
var Header = require('./header');
var Photos = require('./photos');

var App = React.createClass({
  render: function () {
    return (
      <div id="app">
        <Header />
        <Photos photos={this.props.photos} />
      </div>
    );
  }
});

module.exports = App;

