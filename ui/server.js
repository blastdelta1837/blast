const express = require('express'),
app = express(),
requireDir = require('require-dir'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
newsession = require('express-session'),
fs   = require('fs'),
routes = requireDir('./routes',{recurse: true}),
path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(newsession({
  secret: 'bc4ApP456KlI',
  resave: false,
  saveUninitialized: false,
  cookie:{}

}));


app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));



app.use(cookieParser('bc4ApP456KlI'));

for (var i in routes) app.use('/', routes[i]);



if (!module.parent) {
  app.listen(3002);
  console.log('Blast app started on port 3000');
}
