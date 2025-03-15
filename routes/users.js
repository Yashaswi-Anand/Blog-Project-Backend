const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

router.get('/login', projectController.getAllBlogs);

module.exports = router;

