const FeatureEventModel = require('../models/featuredEventModel');


class featureController {
    static getEvents = async (req, res) => {
        try {
            const data = await FeatureEventModel.find();
            res.send(data)
        } catch (err) {
            res.json({
                message: "Error"
            })
        }
    }

    static postEvent = async (req, res) => {
        const newFeaturedModels = new FeatureEventModel({
            projectName: req.body.projectName,
            projectAbout: req.body.projectName,
            githubLink: req.body.projectName,
            liveLink: req.body.projectName,
        })
        try {
            const newData = await newFeaturedModels.save()
            res.json(newData)
        } catch (err) {
            console.log(err);
            res.json({
                message: "message"
            })
        }
    }

    // Delete an featured event by Id
    static deleteEvent = async (req, res) => {
        try {
            const deleteData = await FeatureEventModel.findByIdAndDelete(req.params.id)
            res.send(deleteData);
        } catch (err) {
            console.lof(err)
            res.json({
                message: "Error"
            })
        }
    }

    // Update
    static updateFeatured = async (req, res) => {
        try {
            const id = req.params.id
            const update = req.body
            const result = await FeatureEventModel.findByIdAndUpdate(id, update)
            res.json({
                message:`Updated Successfully`
            });
        } catch (err) {
            console.log(err)
            res.json({
                message: "message"
            })
        }
    }


}

module.exports = featureController;