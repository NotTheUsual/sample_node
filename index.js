var express = require("express"),
    nano = require('nano')('http://localhost:5984'),
    app = express();

app.get("/", function (req, res) {
  res.send("Hey buddy!");
});

app.get("/untested", function (req, res) {
  res.send("How does code coverage work?");
});

app.listen(3000, function () {
  console.log('Express listening on port 3000');
});
