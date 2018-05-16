const user = require('../models/user.model');
const joi = require('joi');
const { createUser } = require('../config/param-validation');

function load(req) {
    return user.get(req.params.id);
}

function get(req, res) {
    return load(req).then( (data) => {
        res.json(data);
    }, (err) => {
        res.json(err);
    })
}

/*
Create new user 
*/
function create(req, res) {
    var result = joi.validate(req.body, createUser, (err, value) => {
        if (err) {
            res.send(err);
            console.log(err);
            return null;
        }
        else{
            const new_user = new user({
                username: req.body.username,
                password: req.body.password,
                location: {
                    name: req.body.location.name
                }
            });
            new_user.save();
            return res.json(new_user);
        }
    })
}

function remove(req, res) {
    return load(req).then(user => {
        user.remove();
    }).then( (result) => {
        res.json(result);
    })
}

// Update a user's info
function update(req, res) {
    return load(req).then(event => {
        console.log(JSON.stringify(req.body));
        if (req.body.username)
            user.username = body.title;
        if (req.body.password)
            user.password = body.author;
        if (req.body.bio)
            user.bio = body.bio;
        if (req.body.eventsAuthored)
            user.eventsAuthored = body.eventsAuthored;
        if (req.body.eventsAttended)
            user.eventsAttended = body.eventsAttended;
        if (req.body.location)
            user.location = body.location;
        return user.save();
    });
}

/*
List users
*/
function list(req, res) {
    const { limit=50, skip=0 } = req.query;
    return user.list({limit, skip}).then( (data, err) => {
        res.json(data);
    })
}


module.exports = { load, get, create, update, list, remove };