const express = require('express');
const {
	postSignupAuthenticationHandler,
	postSigninAuthenticationHandler,
	deleteSignoutAuthenticationHandler,
	putRefreshTokenHandler,
} = require('../controllers/auth-controller');
const { auth } = require('../middlewares');

const router = express.Router();

router.route('/signup').post(postSignupAuthenticationHandler);
router.route('/signin').post(postSigninAuthenticationHandler);
router.route('/signout').delete(auth, deleteSignoutAuthenticationHandler);
router.route('/refresh').put(putRefreshTokenHandler);

module.exports = router;
