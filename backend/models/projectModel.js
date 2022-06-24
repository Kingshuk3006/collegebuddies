const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    projectName: { type: String, },
    projectAbout: { type: String, },
    githubLink: { type: String, },
    liveLink: { type: String, },
})


// Models
const projectModel = mongoose.model("project", projectSchema);

module.exports = projectModel;