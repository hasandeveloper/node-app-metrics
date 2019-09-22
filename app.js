const express = require('express');
const expressStatsd = require('express-statsd');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiV1Router = require('./routes/api/v1/index')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressStatsd());
app.use('/', indexRouter);
app.use('/api/v1', apiV1Router);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;