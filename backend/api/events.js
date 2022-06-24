const express = require('express');
const router = express.Router();
const EventController = require('../controllers/eventController');

router.get('/',EventController.getEvent)
router.get('/:id', EventController.getEventById);
router.put('/:id', EventController.eventUpdate);
router.delete('/:id', EventController.eventDelete);

module.exports = router;