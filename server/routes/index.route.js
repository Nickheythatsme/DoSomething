var express = require('express');
var eventRoute = require('./event.route');
/*
import express from 'express';
import eventRoute from './event.route';
*/

const router = express.Router(); // make a router for the whole api

router.get('/health-check', (req, res) => {
    const stats = {
        'status':'ok',
        'cpuUsage':process.cpuUsage(),
    }
    res.send('Stats:\n' + JSON.stringify(stats));
});

// mount event api
router.use('/event', eventRoute);

module.exports = router;