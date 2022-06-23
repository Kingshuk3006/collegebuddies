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

    // Update Event by Id
    static eventUpdate = async (req, res) => {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }
        const id = req.params.id;
        EventModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Cannot update Event with id=${id}. Maybe Event was not found!`
                    });
                } else res.send({ message: "Event was updated successfully." });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Event with id=" + id
                });
            });
    };

    // Delete event by Id
    static eventDelete = async (req, res) => {
        const deleteID = await EventModel.findByIdAndDelete(req.params.id);
        res.send(deleteID);
    }
}



module.exports = eventController;

// {
//     const data = new EventModel({
//         _id: req.params.id,
//         name: req.body.name,
//         email: req.body.email,
//         collegeName: req.body.collegeName,
//         collegeWebsite: req.body.collegeWebsite,
//         eventName: req.body.eventName,
//         eventLink: req.body.eventLink,
//         eventPosterurl: req.body.eventPosterurl,
//     });
//     EventModel.updateOne({ _id: req.params.id }, data).then(
//         () => {
//             res.status(201).json({
//                 message: 'Thing updated successfully!'
//             });
//         }
//     ).catch(
//         (error) => {
//             res.status(400).json({
//                 error: error
//             });
//         }
//     );
// };