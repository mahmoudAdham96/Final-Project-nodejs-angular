var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const {connectDB} = require('./config/db.config');
connectDB();
var cors = require('cors')
const {AuthRequest} = require('./middlewares/auth.request.middleware')


const todosRoutes = require('./routes/todos.routes')
const authRoutes = require('./routes/auth.routes');

var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));


app.use('/todos',AuthRequest, todosRoutes)
app.use('/auth', authRoutes);

 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // render the error page
  res.status(err.status || 500);
  res.json({err})
});

module.exports = app;
