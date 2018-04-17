const app = require('./server/app.js');
const path = require('path');
const debug = require('debug')('app');

app.get('*', function(req, res) {
    debug('GET request: ' + req.url);
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// start listening
var port = process.env.PORT || 8080;
app.listen(port);
console.log("App listening on port: " + port);
