var Promise = require('bluebird');
var mongoose = require('mongoose');
var httpStatus = require('http-status');
var APIError = require('../config/APIError');
var Event = require('./event.model');

const userSchema = new mongoose.Schema({
    username: String,
    password: String, // Has of password
    bio: String,
    created: {type: Date, default: Date.now},
    eventsAuthored: [Event],
    eventsAttended:[Event],
    location: {
        name: String,
        latitude: Number,
        longitude: Number
    },
});

userSchema.method({});

userSchema.statics = {
    /*
     Rertrieve a user by ID
        @param {ObjectId} id
        @returns {Promise<Event, APIError}
    */
    get(id) {
        return this.findById(id).exec().then( (user) => {
            if (user) return event;
            const error = new APIError("User does not exist");
            return Promise.reject(error);
        });
    },
    getUsername(name) {
        return this.find({'username':name}, (err, user) => {
            if (err) {
                const error = new APIError("User does not exist");
                return Promise.reject(error);
            }
            return user
        })
    }
}

module.exports = mongoose.model('User', userSchema);