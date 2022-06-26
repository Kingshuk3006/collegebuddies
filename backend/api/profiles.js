const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profileController');




router.post('/', ProfileController.createProfile);
router.get('/', ProfileController.getProfiles);
router.get('/', ProfileController.profilebyCollege);
router.get('/:id', ProfileController.profileByid);
router.patch('/:id', ProfileController.updateProfile)
router.delete('/:id', ProfileController.profileDelete);

module.exports = router;