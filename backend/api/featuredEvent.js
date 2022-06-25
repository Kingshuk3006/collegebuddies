const express = require('express');
const router = express.Router();
const featuredEventController = require('../controllers/featureEventController');

router.get('/', featuredEventController.getEvents);
router.post('/', featuredEventController.postEvent);
router.delete('/:id', featuredEventController.deleteEvent);
router.patch('/:id', featuredEventController.updateFeatured);

module.exports = router;