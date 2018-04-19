var express = require('express');
var validate = require('express-validator');
var paramValidation = require('../config/param-validation');
var eventCtrl = require('../controllers/event.controller');
/*
import express from 'express';
import validate from 'express-validator';
import paramValidation from '../config/param-validation';
import eventCtrl from '../controllers/event.controller';
*/
var router = express.Router();

// Debug
var debug = require('debug')('app-event');

// Handle errors, send error file/message
function handleError(req, res, err, message='unknown') {
    var output = "Error encountered in event module." + 
    "\n\tCustom Message: " + message + "\n\terr: " + err.toString() +
    "\n\tRequest: {Type: " + req.method + ", URL: " + req.url + "}";
    console.error(output);
    res.status(500);
    res.send('Error: ' + message);
}

router.route('/')
    .get(eventCtrl.list)
    .put(validate(paramValidation.createEvent), eventCtrl.create); // Post a new event

router.route('/:id')
    .get(eventCtrl.get)
    .put(validate(paramValidation.updateEvent), eventCtrl.update)
    .delete(eventCtrl.remove);


// router.param('id', eventCtrl.load);


module.exports = router;