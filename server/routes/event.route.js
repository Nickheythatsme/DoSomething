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

// Post a new event
router.route('/')
    .get((params) => {
        params.res.send('test');
        return eventCtrl.list(params);
    })
    /*
    .get(function(req, res) {
        console.log('Listing events');
        res.json({works:'true'});
        console.log(eventCtrl.list({limit:50, skip:0}));
        //return res.json(eventCtrl.list(50, 0));
    })
    */
    .put(validate(paramValidation.createEvent), eventCtrl.create);

router.route('/:id')
    .get(eventCtrl.get)
    .put(validate(paramValidation.updateEvent), eventCtrl.update)
    .delete(eventCtrl.remove);

router.param('id', eventCtrl.load);

/*

// Get an event by id
router.get('/:id', (req, res) => {
    event.findOne({_id: req.param.id}, (err, event) => {
        if (err) handleError(req, res, err);
        else res.json(event);
    });
});

// Post a new event
router.post('/', (req, res) => {

    console.log(d);

    // Extract the validation errors from a request.
    const v_error = req.validationErrors();

    // Test if there are errors
    if (v_error) {
        var message = 'Malformed data: ';
        for(e in v_error) {
            message += v_error[e].msg + ', ';
        }
        handleError(req, res, message, message);
    }
    else {
        // Data from form is valid.
        res.send(req.body.title);
    }
});
*/

module.exports = router;