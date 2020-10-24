const projectController = require('../controllers/project');
const express = require('express');
const router = express.Router();
// DELETE
router.delete('/delete/:idProj', projectController.deleteProject);

module.exports = router;
