const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const ResponseHelper = require('./lib/response.helper');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));
app.disable('x-powered-by');

// Routes
app.get('/', function (req, res) {
  return res.send(':)');
});
app.use('/api', apiRoutes);

// Handling errors
// eslint-disable-next-line no-unused-vars
app.use(function (err, _req, res, _next) {
  ResponseHelper.errorResponse(res, err);
});

module.exports = app;