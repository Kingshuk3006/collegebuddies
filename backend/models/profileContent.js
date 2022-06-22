const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name: {
        type: String,

    },
    college: {
        type: String,

    },
    stream: {
        type: String,

    },
    linkedinLink: {
        type: String,
    },
    githubLink: {
        type: String
    },
    twitterLink: {
        type: String,
    },
    discordLink: {
        type: String,
    }
})


// Models
const profileModel = mongoose.model("profile", profileSchema);

module.exports = profileModel;