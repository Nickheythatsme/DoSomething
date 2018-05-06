var express = require('express');
var validate = require('express-validator');
var paramValidation = require('../config/param-validation');
var eventCtrl = require('../controllers/event.controller');
var router = express.Router();

// Debug
// TODO figure out how to use debug
var debug = require('debug')('app-event');

router.route('/')
    .get(eventCtrl.list)
    .post(validate(paramValidation.createEvent), eventCtrl.create) // Post a new event
    .put(validate(paramValidation.updateEvent), eventCtrl.update); // Post a new event

router.route('/:id')
    .get(eventCtrl.get)
    .put(validate(paramValidation.updateEvent), eventCtrl.update)
    .delete(eventCtrl.remove);

module.exports = router;