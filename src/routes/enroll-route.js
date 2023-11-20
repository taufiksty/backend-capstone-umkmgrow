const express = require('express');
const { auth } = require('../middlewares');
const {
	postEnrollmentHandler,
	postEnrollmentPurchaseHandler,
	getEnrollmentByUserId,
} = require('../controllers/enroll-controller');

const router = express.Router();

router.use(auth);

router.route('/').get(getEnrollmentByUserId).post(postEnrollmentHandler);
router.route('/:id/purchase').post(postEnrollmentPurchaseHandler);

module.exports = router;
