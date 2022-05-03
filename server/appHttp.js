const express = require('express');

const app = express();

app.disable('x-powered-by');

// Routes

// Handling errors
app.use(function (err, req, res, next) {

});

module.exports = app;