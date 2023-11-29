const { nanoid } = require('nanoid');
const {
	addEnrollment,
	getStatusEnrollment,
	updateStatusAfterPurchase,
	getEnrollment,
} = require('../repositories/mysql/enrollments');
const { convertToLocalDatetime } = require('../utils/moment-timezone');
const { InvariantError } = require('../errors');
const { createPayment } = require('../repositories/mysql/payment');
const { getCourseById } = require('../repositories/mysql/courses');

const enrollCourse = async (payload) => {
	const enrollStatus = await getStatusEnrollment(
		payload.userId,
		payload.courseId,
	);
	verifyEnrollCourse(enrollStatus);

	const id = `enroll-${nanoid(16)}`;

	const enroll = await addEnrollment({ id, ...payload });

	return convertToLocalDatetime(enroll);
};

const getEnroll = async ({ userId }) => {
	const enroll = await getEnrollment({ userId });

	return enroll.map(convertToLocalDatetime);
};

const purchaseEnrollment = async (id) => {
	const enroll = await getEnrollment({ id }).then(
		(result) => result[0].dataValues,
	);

	if (!enroll) {
		throw new InvariantError('You are not enroll this course.');
	}

	const { price } = await getCourseById(enroll.courseId).then(
		(result) => result?.dataValues,
	);

	const paymentId = `payment-${nanoid(16)}`;
	const payment = await createPayment({
		id: paymentId,
		enrollId: enroll.id,
		amount: price,
	});

	await updateStatusAfterPurchase(id);

	return convertToLocalDatetime(payment);
};

const verifyEnrollCourse = (enrollStatus) => {
	if (enrollStatus === 'onpayment') {
		throw new InvariantError(
			'You have enroll this course. Please check and make a payment.',
		);
	}

	if (enrollStatus === 'onlearning') {
		throw new InvariantError('You are learning this course now.');
	}

	if (enrollStatus === 'completed') {
		throw new InvariantError(
			'You already completed this course. No need to enroll again.',
		);
	}
};

const verifyEnrollStatusBeforeSubmitExam = (enrollStatus, score) => {
	if (!enrollStatus) {
		throw new InvariantError(
			'You are not enroll this course. Why you submit an exam?',
		);
	} else if (enrollStatus === 'onpayment') {
		throw new InvariantError(
			'You are now on payment status of this course. Why you submit an exam?',
		);
	} else if (enrollStatus === 'completed' && score === 100) {
		throw new InvariantError(
			'You have completed this course with excellent score, congratulations! ',
		);
	}
};

module.exports = {
	enrollCourse,
	getEnroll,
	purchaseEnrollment,
	verifyEnrollStatusBeforeSubmitExam,
};
