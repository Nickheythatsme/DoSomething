var express = require('express');
var validate = require('express-validator');
var paramValidation = require('../config/param-validation');
var userCtrl = require('../controllers/user.controller');
var router = express.Router();

router.route('/')
    // Get a user by id
    .get(userCtrl.get)
    // Post a new user
    .put(validate(paramValidation.createUser), userCtrl.create); 

router.route('/:id')
    .get(eventCtrl.get)
    .put(validate(paramValidation.updateEvent), eventCtrl.update)
    .delete(eventCtrl.remove);


