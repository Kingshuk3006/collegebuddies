const EventModel = require('../models/postEvent');

class eventController {


    static getEvent = async (req, res) => {

        try {
            const result = await EventModel.find();
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }


    static getEventById = async (req, res) => {
        try {

            const result = await EventModel.findById(req.params.id)
            res.send(result);

        } catch (err) {
            res.json({
                message: "Error"
            })
        }
    }

    // Post event
    static postEvent = async (req, res) => {

        const newEvent = new EventModel({
            name: req.body.name,
            email: req.body.email,
            collegeName: req.body.collegeName,
            collegeWebsite: req.body.collegeWebsite,
            eventName: req.body.eventName,
            eventLink: req.body.eventLink,
            location: req.body.location,
        })
        try {
            newEvent.save()
            res.json(newEvent);
        } catch (err) {
            console.log(err);
            res.json({
                message: "Error"
            })
        }
    }

    // Update Event by Id
    static eventUpdate = async (req, res) => {
        try {
            const id = req.params.id
            const data = req.body
            const updatedData  = await EventModel.findByIdAndUpdate(id, data);
            res.json({
                message:`Event with ID: ${id} has been updated`
            })
        } catch (err) {
            console.log(err);
            res.json({
                message:"Error"
            })
        }
    };

    // Delete event by Id
    static eventDelete = async (req, res) => {
        const deleteID = await EventModel.findByIdAndDelete(req.params.id);
        res.send(deleteID);
    }
}



module.exports = eventController;

