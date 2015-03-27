/* jshint globalstrict: true, esnext: true */
/* global __dirname, module */

'use strict';

module.exports = {
  context: __dirname + '/',
  entry: './browser',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};

