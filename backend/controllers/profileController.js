const ProfileModel = require('../models/profileModel');

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

    // Get profile by college
    static profilebyCollege = async (req, res) => {
        try {
            const userQuery = await req.query;
            // console.log(userQuery)
            const filteredStudent = await ProfileModel.filter((info) => {
                let isValid = true;
                for (key in userQuery) {
                    // console.log(key, userQuery[key], info[key]);
                    isValid = isValid && info[key] === userQuery[key];
                }
                return isValid;
            });
            // console.log(filteredStudent)
            res.json({ data: filteredStudent })
        } catch (err) {
            res.send(err.message)
        }
    }

    // Update profile by Id
    static updateProfile = async (req, res) => {
        try {
            const id = req.params.id
            const data = req.body
            const updatedData = await ProfileModel.findByIdAndUpdate(id, data)
            res.json({
                message: `Profile with id ${id} is updated`
            })
        } catch (err) {
            console.log(err);
            res.json({
                message: "Error"
            })
        }
    }

    // Delete profile by Id
    static profileDelete = async (req, res) => {
        const deleteByid = await ProfileModel.findByIdAndDelete(req.params.id);
        res.send(deleteByid);
    }

}


module.exports = profileController;