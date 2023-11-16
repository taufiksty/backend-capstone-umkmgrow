const { nanoid } = require('nanoid');
const {
	addEnrollment,
	getStatusEnrollment,
	getEnrollmentById,
	updateStatusAfterPurchase,
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
	await verifyEnrollCourse(enrollStatus);

	const id = `enroll-${nanoid(16)}`;

	const enroll = await addEnrollment({ id, ...payload });

	return convertToLocalDatetime(enroll);
};

const purchaseEnrollment = async (id) => {
	const enroll = await getEnrollmentById(id);

	if (!enroll) {
		throw new InvariantError('You are not enroll this course.');
	}

	const { price } = await getCourseById(enroll.courseId);

	const paymentId = `payment-${nanoid(16)}`;
	const payment = await createPayment({
		id: paymentId,
		enrollId: enroll.id,
		amount: price,
	});

	await updateStatusAfterPurchase(id);

	return convertToLocalDatetime(payment);
};

const verifyEnrollCourse = async (enrollStatus) => {
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

module.exports = { enrollCourse, purchaseEnrollment };
