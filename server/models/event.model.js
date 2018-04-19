var Promise = require('bluebird');
var mongoose = require('mongoose');
var httpStatus = require('http-status');
var APIError = require('../config/APIError');

const eventSchema = new mongoose.Schema({
    title:  String,
    author: String,
    created: {type: Date, default: Date.now},
    time: Date,
    type: String,
    tags: [String],
    location: {
        name: String,
        latitude: Number,
        longitude: Number
    },
    upcoming: {type: Boolean, default: true}
});

eventSchema.method({});

eventSchema.statics = {
    /* Get a specific post
        @param {ObjectId} id
        @returns {Promise<Event, APIError}
    */
    get(id) {
        return this.findById(id).exec().then( (event) => {
            if(event) {
                return event;
            }
            const error = new APIError('Event does not exist', httpStatus.NOT_FOUND);
            return Promise.reject(error);
        });
    },

    // List a collection of events
    list({ skip=0, limit=50 } = {}) {
        return this.find()
            .sort({created: -1})
            .skip(+skip)
            .limit(+limit)
            .exec();
    }
};

module.exports = mongoose.model('Event', eventSchema);