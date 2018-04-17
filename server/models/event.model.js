

var eventSchema = {
    title:  String,
    author: String,
    created: {type: Date, default: Date.now},
    time: Date,
    type: String,
    location: {
        name: String,
        latitude: Number,
        longitude: Number
    },
    upcoming: {type: Boolean, default: true}
};

module.exports = eventSchema;
