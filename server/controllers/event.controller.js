var event = require('../models/event.model');
var joi = require('joi');
var { createEvent, updateEvent } = require('../config/param-validation');

function load(req) {
    return event.get(req.params.id);
}

function get(req, res) {
    return event.get(req.params.id).then((data) => {
        res.json(data);
    }, (err) => {
        res.json(err);
    });
}

function create(req, res) {
    console.log('body: ' + JSON.stringify(req.body));
    var result = joi.validate(req.body, createEvent, (err, value) =>{
        if (err) {
            res.send(err);
            return null;
        }
        else {
            const new_event = new event({
                title: req.body.title,
                author: req.body.author,
                time: req.body.time,
                type: req.body.type,
                tags: req.body.tags,
                location: req.body.location
            });
            res.json(value);
            return new_event.save();
        }
    });
}

function update(req, res) {
    return load(req).then(event => {
        console.log(JSON.stringify(req.body));
        if (req.body.title)
            event.title = req.body.title;
        if (req.body.author)
            event.author = req.body.author;
        if (req.body.time)
            event.time = req.body.time;
        if (req.body.type)
            event.type = req.body.title;
        res.json(event);
        return event.save();
    });
}

function list(req, res) {
    const { limit=50, skip=0 } = req.query;
    return event.list({limit, skip}).then( (data, err) => {
        res.json(data);
    })
}

function remove(req, res) {
    return load(req).then(event => {
        event.remove();
    }).then( (result) => {
        res.json(result);
    })
}

module.exports = { load, get, create, update, list, remove };
