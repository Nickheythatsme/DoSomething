var event = require('../models/event.model');
/*
import event from '../models/event.model';
*/

function load(req) {
    return event.get(req.params.id);
}

function get(req, res) {
    return event.get(req.params.id).then((data) => {
        res.json(data);
    });
}

function create(req, res) {
    const new_event = new Event({
        title: req.params.data.title,
        author: req.params.data.author,
        time: req.params.data.time,
        type: req.params.data.type,
        tags: req.params.data.tags,
        location: {
            name: req.params.data.location.name,
        }
    });
    res.json(new_event);
    return new_event.save();
}

function update(req, res){
    return load(req).then(event => {
        const tmp = event;
        if (req.params.data.title)
            event.title = params.data.title;
        if (req.params.data.author)
            event.author = params.data.author;
        if (req.params.data.time)
            event.time = params.data.time;
        if (req.params.data.type)
            event.type = params.data.title;
        return post.save();
    });
}

function list(req, res) {
    const { limit=50, skip=0 } = req;
    return event.list({limit, skip}).then( (data, err) => {
        res.json(data);
    })
}

function remove(req, res){
    return load(req).then(event => {
        event.remove();
    }).then( (result) => {
        res.json(result);
    })
}

module.exports = { load, get, create, update, list, remove };
// export default { load, get, create, update, list, remove };
