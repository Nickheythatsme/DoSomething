var Promise = require('bluebird');
var mongoose = require('mongoose');
var httpStatus = require('http-status');
var APIError = require('../config/APIError');

const userSchema = new mongoose.Schema({
    username: String,
    password: String, // Hash of password
    phonenum: Number,
    bio: String,
    created: {type: Date, default: Date.now},
    eventsAuthored: [Number], // ID of event
    eventsAttended:[Number],  // ID of event
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
        @returns {Promise<User, APIError}
    */
    get(id) {
        return this.findById(id).exec().then( (user) => {
            if (user) return user;
            const error = new APIError("User does not exist", id);
            return Promise.reject(error);
        });
    },

    /*
    Find user by username
        @param {String} name
        @returns {Promise<User, APIError}
    */
    getUsername(name) {
        return this.find({'username':name}, (err, user) => {
            if (err || !user) {
                const error = new APIError("User does not exist");
                return Promise.reject(error);
            }
            return user
        })
    },

    // List a collection of events
    list({ skip=0, limit=50 } = {}) {
        return this.find()
            .sort({created: -1})
            .skip(+skip)
            .limit(+limit)
            .exec();
    }
}

module.exports = mongoose.model('User', userSchema);