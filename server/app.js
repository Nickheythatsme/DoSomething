const mongoose = require('./mongoose_init.js');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const event = require('./event');

// Debug
const debug = require('debug')('app');

// Express init/config
var app = express();

// Initialize app
app.use(express.static(path.join(__dirname,'/dist')));    // set the static files location 
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// Add event api to the app
app.use('/api/event', event);


module.exports = app;