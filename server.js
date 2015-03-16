'use strict';

var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var routes = require('./routes');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(serveStatic(__dirname + '/public'));

app.set('port', process.env.PORT || 4000);

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/:tag?', routes.index);

app.listen(app.get('port'), function () {
  console.log('Listening on port: ' + app.get('port'));
});

