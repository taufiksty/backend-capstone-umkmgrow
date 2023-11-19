const { nanoid } = require('nanoid');
const {
	addCertificate,
	getCertificationByUserIdAndCourseId,
	updateCertification,
	getCertificationById,
} = require('../repositories/mysql/certifications');
const { getCourseById } = require('../repositories/mysql/courses');
const { getStatusEnrollment } = require('../repositories/mysql/enrollments');
const { getQuestionsByExamId } = require('../repositories/mysql/examQuestions');
const { getExamId } = require('../repositories/mysql/exams');
const { findById } = require('../repositories/mysql/users');
const { createCertification } = require('./certification-service');
const { verifyEnrollStatusBeforeSubmitExam } = require('./enroll-service');
const { convertToLocalDatetime } = require('../utils/moment-timezone');

const getExamQuestionsByCourseId = async (courseId) => {
	const examId = await getExamId(courseId);
	const questions = await getQuestionsByExamId(examId);

	return { examId, questions };
};

const submitExam = async (userId, courseId, score) => {
	const enrollStatus = await getStatusEnrollment(userId, courseId);

	verifyEnrollStatusBeforeSubmitExam(enrollStatus, score);

	const userName = await findById(userId).then(
		(result) => result.dataValues.fullname,
	);
	const courseName = await getCourseById(courseId).then(
		(result) => result.dataValues.courseName,
	);

	let imageCertificate = null;
	let certificateReceiptDate = null;

	if (score === 100) {
		imageCertificate = createCertification(userName, courseName);
		certificateReceiptDate = Date.now();
	}

	const oldCertification = await getCertificationByUserIdAndCourseId(
		userId,
		courseId,
	).then((result) => (result ? result.dataValues : result));

	if (oldCertification) {
		await updateCertification(
			{ certificateReceiptDate, score, imageCertificate },
			oldCertification.id,
		);
		const updatedCertification = await getCertificationById(
			oldCertification.id,
		);

		return convertToLocalDatetime(updatedCertification);
	} else {
		const id = `cert-${nanoid(16)}`;
		const newHistoryCertification = await addCertificate({
			id,
			courseId,
			userId,
			certificateReceiptDate,
			score,
			imageCertificate,
		});

		return convertToLocalDatetime(newHistoryCertification);
	}
};

module.exports = { getExamQuestionsByCourseId, submitExam };
