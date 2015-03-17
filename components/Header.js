'use strict';

import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
  render: function () {
    return (
      <header role="banner">
        <h1><Link to="home">{this.props.title}</Link></h1>
        <nav role="navigation">
          <Link to="home">Home</Link>
          <Link to="page" params={{pageNumber: 1}}>Page 1</Link>
          <Link to="page" params={{pageNumber: 2}}>Page 2</Link>
          <Link to="page" params={{pageNumber: 3}}>Page 3</Link>
        </nav>
      </header>
    );
  }
});

export default Header;

