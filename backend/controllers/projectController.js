const ProjectModel = require('../models/projectModel');

class projectController {

    // Get List of Project
    static getProject = async (req, res) => {
        try {
            const data = await ProjectModel.find();
            res.send(data)

        } catch (err) {
            res.json({
                message: "Error"
            })
        }
    }

    // Get Project by Id
    static getProjectById = async (req, res) => {
        try {
            const projectId = await ProjectModel.findById(req.params.id)
            res.send(projectId);
        } catch (error) {
            console.log(error)
            res.json({
                message: "Error",
            })
        }
    }

    // Delete Project by Id
    static deleteProject = async (req, res) => {
        try {
            const data = await ProjectModel.findByIdAndDelete(req.params.id);
            res.send(data);
        } catch (err) {
            console.log(err);
        }
    }

    // Create Project
    static createProject = async (req, res) => {
        try {
            const newData = new ProjectModel({

                projectName: req.body.projectName,
                projectAbout: req.body.projectAbout,
                githubLink: req.body.githubLink,
                liveLink: req.body.liveLink,
            });
            const result = await newData.save();
            res.send(result);

        } catch (err) {
            console.log(err);
        }
    }


}


module.exports = projectController;