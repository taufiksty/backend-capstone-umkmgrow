const express = require('express');
const {
	postSignupAuthenticationHandler,
} = require('../controllers/auth-controller');

const router = express.Router();

router.route('/signup').post(postSignupAuthenticationHandler);

module.exports = router;
