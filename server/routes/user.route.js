var express = require('express');
var validate = require('express-validator');
var paramValidation = require('../config/param-validation');
var userCtrl = require('../controllers/user.controller');
var router = express.Router();

router.route('/')
    // Get self profile info
    .get((req, res) => {
        res.send('self user profile info');
    })
    // Post a new user
    .post(validate(paramValidation.createUser), userCtrl.create)
    // Update a user
    .put(validate(paramValidation.updateUser), userCtrl.update);

router.route('/list')
    .get(userCtrl.list);

router.route('/:id')
    // Get a user by id
    .get(userCtrl.get);

/*
List users.
TODO how to impliment/validate?
*/
/*
router.route('/:id')
    .get(userCtrl.get)
    .put(validate(paramValidation.updateEvent), userCtrl.update)
    .delete(userCtrl.remove);
*/


module.exports = router;
