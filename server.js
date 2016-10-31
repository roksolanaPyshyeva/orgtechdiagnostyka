var express = require('express');

var port = Number(process.env.PORT || 8000);

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log('server is listening on port: ' + port);
});