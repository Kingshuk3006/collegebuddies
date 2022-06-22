const mongoose = require('mongoose');


// Schema
const postEventschema = mongoose.Schema({
    name: {
        type: String,
        requied: true,
        trim: true,
    },
    email: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true,
    },
    collegeWebsite: {
        type: String,
        required: true,
    },
    eventName: {
        type: String,
        required: true,
    },
    eventLink: {
        type: String
    },
    eventPosterurl: {
        type: String,
    }
})

// Model
const postEventModel = mongoose.model("postEvent", postEventschema);

module.exports = postEventModel;