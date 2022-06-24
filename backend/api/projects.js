const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/projectController');

router.get('/', ProjectController.getProject);
router.post('/', ProjectController.createProject);
router.get('/:id', ProjectController.getProjectById);
router.delete('/:id', ProjectController.deleteProject);


module.exports = router;