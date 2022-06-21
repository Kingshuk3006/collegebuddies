const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/postController');

router.post('/', ProfileController.createProfile);
router.get('/', ProfileController.getAllDoc);

module.exports = router;