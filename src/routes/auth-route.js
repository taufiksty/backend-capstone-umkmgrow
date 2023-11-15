const express = require('express');
const {
	postSignupAuthenticationHandler,
	postSigninAuthenticationHandler,
	deleteSignoutAuthenticationHandler,
} = require('../controllers/auth-controller');
const { auth } = require('../middlewares');

const router = express.Router();

router.route('/signup').post(postSignupAuthenticationHandler);
router.route('/signin').post(postSigninAuthenticationHandler);
router.route('/signout').delete(auth, deleteSignoutAuthenticationHandler);

module.exports = router;
