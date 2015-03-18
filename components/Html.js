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
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        <script defer src="/bundle.js"></script>
      </body>
      </html>
    );
  }
});

export default Html;

