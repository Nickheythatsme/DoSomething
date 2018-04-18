var app = require('./config/express');
var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
/*
import app from './config/express';
import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
*/


// Debug
const debug = require('debug')('app');

// INITIALIZE Mongoose =======================================================
// Get mongoose to use the global Promise library
mongoose.Promise = global.Promise;

// Get the mongo authentication from the JSON. Use local mongo as default
if (fs.existsSync(path.join(__dirname, 'mongo_auth.json'))) {
    var mongo_auth = JSON.parse(fs.readFileSync(path.join(__dirname, 'mongo_auth.json')));
}
else{
    console.error('Cannot find mongo authentication.');
    process.exit(1);
}

// Connect to the database, exit if failure
mongoose.connect(mongo_auth.uri, err => {
    if (err){
        console.log("Error connecting to mongodb: " + String(err));
        console.log('Exiting...');
        process.exit(1);
    }
    else {
        console.log('Connected to mongoDB with account: ' + mongo_auth.username);
    }
}); 

// Get the default connection
var db = mongoose.connection;
db.on('error', function(error) {
    console.error('MongoDB error: ' + String(error));
});
db.once('open', (err) =>{
    if(err) debug(err);
    else debug("Database connection opened");
});


// START APP ====================================================================
var port = process.env.PORT || 8080;
app.listen(port);
console.log("App listening on port: " + port);


module.exports = app;