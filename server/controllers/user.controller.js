const user = require('../models/user.model');
const joi = require('joi');
const { createUser } = require('../config/param-validation');

function load(req) {
    return user.get(req.params.id);
}

function get(req, res) {
    return user.get(req.params.id).then( (data) => {
        res.json(data);
    }, (err) => {
        res.json(err);
    })
}

function create(req, res) {
    var result = joi.validate(req.body, createUser, (err, value) => {
        if (err) {
            res.send(err);
            return null;
        }
        else{
            const new_user = new user({
                username: req.body.username,
                password: req.body.password,
                created: Date.now,
                location: {
                    name: req.body.location.name
                }
            });
            res.json(value);
            return new_user.save();
        }
    })
}