var Joi = require('joi');


/*
    Event api validation
*/
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
        location: Joi.object().required().keys({
            name: Joi.string().required().max(200),
            latitude: Joi.number().optional(),
            longitude: Joi.number().optional()
        })
    });

/*
    User api validation
*/
const createUser = 
    Joi.object().keys({
        username: Joi.string().required().max(16),
        password: Joi.string().required().min(8).max(30),
        bio: Joi.string().required().max(10000),
        location: Joi.object().required().keys({
            name: Joi.string().required().max(200)
        })
    })

const updateUser =
    Joi.object().keys({
        username: Joi.string().optional().max(16),
        password: Joi.string().optional().min(8).max(30),
        bio: Joi.string().optional().max(10000),
        location: Joi.object().optional().keys({
            name: Joi.string().optional().max(200)
        })
    })

module.exports = { createEvent, updateEvent, createUser }