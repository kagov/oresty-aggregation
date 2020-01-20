var express = require('express');

var logger = require('morgan');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());


app.get('/service-one/json', function(req, res, next) {
  var obj = {

    "status" : "response from service one"
  }
  res.json(obj);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3001, function () {
  console.log('listening on port 3001!')
});

module.exports = app;
