var Joi = require('joi');


const updateEvent = 
Joi.object().keys({
        body: {
            title: Joi.string().required()
        },
        params: {
            eventId: Joi.string().hex().required()
        }
    });

const createEvent =
    Joi.object().keys({
        title: Joi.string().required().max(60),
        author: Joi.string().required(),
        time: Joi.string().isoDate().required(),
        type: Joi.string().required().lowercase().max(60),
        tags: Joi.array().optional(),
        location: Joi.object().keys({
            name: Joi.string().required().max(200),
            latitude: Joi.number().optional(),
            longitude: Joi.number().optional()
        })
    });

module.exports = { createEvent, updateEvent }