const mongoose = require('mongoose')

const featuredEventSchema = mongoose.Schema({
    projectName: { type: String, },
    projectAbout: { type: String, },
    githubLink: { type: String, },
    liveLink: { type: String, },
})

const featureModel = mongoose.model("featured", featuredEventSchema);
module.exports = featureModel;