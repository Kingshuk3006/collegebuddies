const ProfileModel = require('../models/profileContent');

class profileController {
    static createProfile = async (req, res) => {
        try {
            const { name, email, collegeName, collegeWebsite, eventName, eventLink, eventPosterurl } = req.body
            const doc = new ProfileModel({
                name: name,
                email: email,
                collegeName: collegeName,
                collegeWebsite: collegeWebsite,
                eventName: eventName,
                eventLink: eventLink,
                eventPosterurl: eventPosterurl
            })
            const result = await doc.save();
            res.send(result);

        } catch (err) {
            console.log(err);
        }
    }
    static getAllDoc = async (req, res) => {
        // res.send('All Data');
        try {
            const result = await ProfileModel.find();
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = profileController;