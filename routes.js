'use strict';

var http = require('http');
var JSX = require('node-jsx').install({extension: '.jsx'});
var React = require('react');
var AppFactory = React.createFactory(require('./components/app'));

module.exports = {

  index: function (req, res) {
    // Set up the Flickr public API.
    var params = [
      'tags=' + req.params.tag || 'birds',
      'format=json',
      'nojsoncallback=1'
    ].join('&');

    var options = {
      host: 'api.flickr.com',
      path: '/services/feeds/photos_public.gne?' + params,
      headers: { 'Content-Type': 'application/json' }
    };

    // Get some images.
    var request = http.request(options, function (response) {
      var photos = '';

      response.setEncoding('utf-8');

      // Append chunked data.
      response.on('data', function (chunk) {
        photos += chunk;
      });

      response.on('end', function () {
        // Fix the Flickr API's crazy escapes.
        photos = JSON.parse(photos.replace(/\\'/g, '\''));

        res.render('home', {
          markup: React.renderToString(
            AppFactory({
              photos: photos.items
            })
          ),
          state: JSON.stringify(photos)
        });
      });
    });

    request.on('error', function (error) {
      console.error(error);
    });

    request.end();
  }

};

