const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const express = require('express');
const appRoot = require('app-root-path');
var routes = require('../routes/index.route');
var APIError = require('./APIError');

// Express init/config
var app = express();

// Initialize express
app.use(express.static(path.join(appRoot.path,'dist')));    // set the static files location 
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use('*', (req, res, next) => {
    var output = "Request"
    + "\n\tType: " + req.method 
    + "\n\tURL: " + req.originalUrl
    + "\n\tParams: " + req.params;
    console.log(output);
    return next();
})

// Add event api to the app
app.use('/api', routes);


// Reroute all other requests to the index page
app.get('*', function(req, res) {
    res.sendFile(path.join(appRoot.path, '/dist/index.html'));
});

// catch 404 and forward to error handler
// TODO catch errors with custom ApiERROR class
app.use((req, res, next) => {
    const err = new APIError('API not found', httpStatus.NOT_FOUND);
    return next(err);
});

module.exports = app;
