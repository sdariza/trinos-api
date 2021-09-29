const express = require('express');

const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const ErrorSerializer = require('./src/serializers/ErrorSerializer');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  res.status(404);
  res.json(new ErrorSerializer(404, 'Not Found'));
});

app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode);
  res.json(new ErrorSerializer(statusCode, message));
});

// app.use((req, res, next, err) => {

// });

module.exports = app;
