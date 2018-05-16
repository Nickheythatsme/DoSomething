var express = require('express');
var eventRoute = require('./event.route');
var userRoute = require('./user.route');

const router = express.Router(); // make a router for the whole api

router.get('/health-check', (req, res) => {
    const stats = {
        'status':'ok',
        'cpuUsage':process.cpuUsage(),
        'memory':process.memoryUsage(),
        'upTime':process.uptime()
    }
    res.json(stats);
});

// mount sub api's
router.use('/event', eventRoute);
router.use('/user', userRoute);

module.exports = router;