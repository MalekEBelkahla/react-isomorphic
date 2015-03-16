'use strict';

var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <header role="banner">
        <h1>Photos</h1>
        <nav role="navigation">
          <a href="/birds">Birds</a>
          <a href="/dinosaurs">Dinosaurs</a>
          <a href="/unicorns">Unicorns</a>
        </nav>
      </header>
    );
  }
});

module.exports = Header;

