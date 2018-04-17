const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var mongoose = require('./mongoose_init');
var eventSchema = require('./models/event.model');
var event = mongoose.model('event', eventSchema);
const expressValidator = require('express-validator');

var express = require('express');
var router = express.Router();

router.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
router.use(bodyParser.json());                                     // parse routerlication/json
router.use(bodyParser.json({ type: 'routerlication/vnd.api+json' })); // parse routerlication/vnd.api+json as json
router.use(expressValidator());
router.use(methodOverride());


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

// Middleware placed here
router.all('*', (req, res, next) => {
    console.log('New request: ');
    console.log('\ttype: ' + req.method);
    console.log('\turl: ' + req.url);

    next();
});

// Get an event by id
router.get('/:id', (req, res) => {
    event.findOne({_id: req.param.id}, (err, event) => {
        if (err) handleError(req, res, err);
        else res.json(event);
    });
});

// Post a new event
router.post('/', (req, res) => {

    // Req validation
    req.check('title', 'empty title').notEmpty()
    req.check('author', 'empty author').notEmpty()
    req.check('created', 'Cannot set created date').isEmpty()
    req.check('time', 'No time set for event').notEmpty();
    // TODO implement:
        //req.check('time','malformed time string').isDate();
    // TODO finish checking data

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

module.exports = router;