const { asyncWrapper } = require('../middlewares');
const {
	enrollCourse,
	getEnroll,
	purchaseEnrollment,
} = require('../services/enroll-service');

const getEnrollmentByUserId = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;

	const enrollment = await getEnroll({ userId });

	res.json({
		success: true,
		data: { enrollment },
	});
});

const postEnrollmentHandler = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;
	const payload = req.body;

	const enrollment = await enrollCourse({ userId, ...payload });

	res.status(201).json({
		success: true,
		message: 'Enrollment created',
		data: { enrollment },
	});
});

const postEnrollmentPurchaseHandler = asyncWrapper(async (req, res) => {
	const { id } = req.params;

	const payment = await purchaseEnrollment(id);

	res.status(201).json({
		success: true,
		message: 'Purchase successful',
		data: { payment },
	});
});

module.exports = {
	getEnrollmentByUserId,
	postEnrollmentHandler,
	postEnrollmentPurchaseHandler,
};
