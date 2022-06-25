const mongoose = require('mongoose')

const featuredEventSchema = mongoose.Schema({
    name: { type: String, requied: true, trim: true, },
    email: { type: String, required: true },
    collegeName: { type: String, required: true, },
    collegeWebsite: { type: String, required: true, },
    eventName: { type: String, required: true, },
    eventLink: { type: String },
    location: {type:String},
})

const featureModel = mongoose.model("featured", featuredEventSchema);
module.exports = featureModel;