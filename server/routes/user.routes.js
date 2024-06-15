const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Route untuk registrasi user baru
router.post('/signup', userController.signup);

// Route untuk login user
router.post('/login', userController.login);

module.exports = router;
