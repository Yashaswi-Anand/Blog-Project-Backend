const express = require('express');
const router = express.Router();
const projectController = require('../controllers/users.controller');

router.post('/login', projectController.loginUser);

router.get('/users', projectController.getAllUsers);

module.exports = router;

