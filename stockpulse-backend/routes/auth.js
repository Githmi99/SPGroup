const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController'); // Correct import

// @route   POST api/auth/signup
// @desc    Register user
// @access  Public
router.post('/signup', signup);

// @route   POST api/auth/signin
// @desc    Authenticate user & get token
// @access  Public
router.post('/signin', signin);

module.exports = router;
