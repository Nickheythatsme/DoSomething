var mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const debug = require('debug')('express-mongoose-es6-rest-api:index');

// Get the mongo authentication from the JSON. Use local mongo as default
if (fs.existsSync(path.join(__dirname, 'mongo_auth.json'))) {
    var mongo_auth = JSON.parse(fs.readFileSync(path.join(__dirname, 'mongo_auth.json')));
}
else
    var mongo_auth = {
        // Local address
        "uri":"mongodb://localhost:27017/hiking_albums",
        "username":null,
        "password":null
    };

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
// Get mongoose to use the global Promise library
mongoose.Promise = global.Promise;

// Get the default connection
var db = mongoose.connection;
db.on('error', function(error) {
    console.error('MongoDB error: ' + String(error));
});
db.once('open', (err) =>{
    if(err) debug(err);
    else debug("Database connection opened");
});

module.exports = mongoose;