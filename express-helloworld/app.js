var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('This is Version 2 of the App Powered by Amr Elgazzar\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

