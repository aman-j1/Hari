const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user')

router.post('/register', UserController.register);
router.post('/google-login', UserController.googleLogin);
router.post('/login', UserController.login);
router.post('/send-otp', UserController.sendOtp);
router.post('/verify-otp', UserController.verifyOtp);


module.exports = router;