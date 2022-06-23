const ProfileModel = require('../models/profileContent');

class profileController {
    // Create a new profile
    static createProfile = async (req, res) => {
        try {
            const newData = new ProfileModel({

                name: req.body.name,
                college: req.body.college,
                stream: req.body.stream,
                linkedinLink: req.body.linkedinLink,
                githubLink: req.body.githubLink,
                discordLink: req.body.discordLink
            });
            const result = await newData.save();
            res.send(result);

        } catch (err) {
            console.log(err);
        }
    }

    // get the list if all profiles
    static getProfiles = async (req, res) => {

        try {
            const result = await ProfileModel.find();
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }

    // get profile by id
    static profileByid = async (req, res) => {
        try {
            const profileId = await ProfileModel.findById(req.params.id)
            res.send(profileId);

        } catch (err) {
            console.log(err);
        }
    }

    // Update profile by Id
    static profileUpdate = async (req, res) => {
        try {
            const id = req.params.id;
            ProfileModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            res.send({
                "message": "Profile Updated Successfully"
            })
        } catch (err) {
            console.log(err)
        }
    }
    // Delete profile by Id
    static profileDelete = async (req, res) => {
        const deleteByid = await ProfileModel.findByIdAndDelete(req.params.id);
        res.send(deleteByid);
    }

}


module.exports = profileController;