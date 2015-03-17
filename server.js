'use strict';

import express from 'express';
import morgan from 'morgan';
import serveStatic from 'serve-static';
import React from 'react';
import Router from 'react-router';

import routes from './routes';
import Html from './components/Html';

var app = express();

app.use(morgan('dev'));
app.use(serveStatic(__dirname + '/public'));

app.set('port', process.env.PORT || 4000);

app.use((req, res) => {
  Router.run(routes, req.path, (Handler) => {
    var markup = React.renderToString(<Handler />);
    var html = React.renderToStaticMarkup(<Html markup={markup} />);

    res.send('<!doctype html>' + html);
  });
});

app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port') + '...');
});

