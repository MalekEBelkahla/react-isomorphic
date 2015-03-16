'use strict';

var React = require('react');
var App = require('./components/app');

var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

React.render(
  <App photos={initialState.items} />,
  document.querySelector('.page-wrap')
);

