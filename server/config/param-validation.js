var Joi = require('joi');


module.export = {
    // POST /api/event
    createEvent: {
        body: {
            title: Joi.string().required(),
            author: Joi.string().required(),
            time: Joi.string().isoDate(),
            type: Joi.string().required().lowercase(),
            tags: Joi.array().optional(),
            location: {
                name: Joi.string().required(),
                latitude: Joi.number().optional(),
                longitude: Joi.number().optional()
            }
        }
    },
    updateEvent: {
        body: {
            title: Joi.string().required()
        },
        params: {
            eventId: Joi.string().hex().required()
        }
    }
}