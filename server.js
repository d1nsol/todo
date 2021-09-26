const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("server started...");

// heroku sleep 방지
const http = require('http');
setInterval(function() {
  http.get(config.herokuURI);
}, 600000);