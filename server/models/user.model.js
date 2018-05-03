var Promise = require('bluebird');
var mongoose = require('mongoose');
var httpStatus = require('http-status');
var APIError = require('../config/APIError');
var Event = require('./event.model');

const userSchema = new mongoose.Schema({
    username: String,
    password: String, // Has of password
    bio: String,
    created: Date,
    eventsAuthored: [Event],
    eventsAttended:[Event],
    sex: String,
    location: {
        name: String,
        latitude: Number,
        longitude: Number
    },
});

userSchema.method({});

userSchema.statics = {
    // Rertrieve a user by ID
    get(id) {
        return this.findById(id).exec().then( (user) => {
            if (user) return event;
            const error = new APIError("User does not exist");
            return Promise.reject(error);
        });
    }
}