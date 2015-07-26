var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var rout = require('./routes/layout');


function returnApp(db){

  var apiGeneral = require('./routes/apiGeneral.js')(db);
  var app = express();



  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  // uncomment after placing your favicon in /public
  //app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use(logger('dev'));
  app.use(session({
    'resave': true,
    'saveUninitialized': true,
    'secret':'cookie_secret',
    'usuarioId':'nasi',
    'usuarioNombre':'nasi'
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(require('less-middleware')(path.join(__dirname, 'public')));
  app.use(express.static(path.join(__dirname, 'public')));
  //app.use(express.cookieParser());
  app.use('/', routes);
  app.use('/users', users);

  app.get("/registrar",function(req,res){
    res.render("registrar",{});
  })

  app.get("/mindex",function(req,res){
    console.log(req.session.usuarioId);
    res.render("indexm",{});
  })

  app.use('/api',apiGeneral);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });


  return app;

}
  module.exports = returnApp;
