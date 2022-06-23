const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profileController');

router.post('/', ProfileController.createProfile);
router.get('/', ProfileController.getProfiles);
router.get('/:id', ProfileController.profileByid);
router.put('/:id', ProfileController.profileUpdate);
router.delete('/:id', ProfileController.profileDelete);

module.exports = router;