const app = require('./app.http');

let port = process.env.SERVER_PORT || 8080;
app.set('port', port);

app.listen(port, function () {
  console.log(`Server configuration mounted in port ${port}`);
});