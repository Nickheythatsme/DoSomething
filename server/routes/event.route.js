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
    .put(validate(paramValidation.createEvent), eventCtrl.create); // Post a new event

router.route('/:id')
    .get(eventCtrl.get)
    .put(validate(paramValidation.updateEvent), eventCtrl.update)
    .delete(eventCtrl.remove);


// router.param('id', eventCtrl.load);


module.exports = router;