'use strict';

import React from 'react';

var Html = React.createClass({
  render: function () {
    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Optimized React</title>
        <link rel="stylesheet" href="/main.css" />
        <script defer src="/bundle.js"></script>
      </head>
      <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
      </html>
    );
  }
});

export default Html;

