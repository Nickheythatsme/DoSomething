var event = require('../models/event.model');
/*
import event from '../models/event.model';
*/

function load(params) {
    console.log('api load req' + params.id);
    return event.get(params.id);
}

function get(req, res) {
    console.log('api get req');
    return res.json(req.post);
}

function create(params) {
    const new_event = new Event({
        title: params.data.title,
        author: params.data.author,
        time: params.data.time,
        type: params.data.type,
        tags: params.data.tags,
        location: {
            name: params.data.location.name,
        }
    });
    return new_event.save();
}

function update(params){
    return load(params).then(event => {
        const tmp = event;
        if (params.data.title)
            event.title = params.data.title;
        if (params.data.author)
            event.author = params.data.author;
        if (params.data.time)
            event.time = params.data.time;
        if (params.data.type)
            event.type = params.data.title;
        return post.save();
    });
}

function list(params) {
    console.log(params);
    const { limit=50, skip=0 } = params;
    return event.list({limit, skip});
}

function remove(params){
    return load(params).then(event => {
        event.remove();
    });
}

module.exports = { load, get, create, update, list, remove };
// export default { load, get, create, update, list, remove };
