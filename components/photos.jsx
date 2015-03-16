'use strict';

var React = require('react');

var Photos = React.createClass({
  propTypes: {
    photos: React.PropTypes.array
  },
  getInitialState: function () {
    return {
      photos: this.props.photos
    };
  },
  render: function () {
    var photos = this.state.photos.map(function (photo) {
      return (
        <a href={photo.media.m} key={photo.link} className="image-container">
          <img src={photo.media.m} />
        </a>
      );
    });

    return (
      <main role="main">
        {photos}
      </main>
    );
  }
});

module.exports = Photos;

