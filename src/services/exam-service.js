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
const {
	getExamId,
	getCourseIdInExams,
} = require('../repositories/mysql/exams');
const { findById } = require('../repositories/mysql/users');
const {
	getExamHistory,
	addExamHistory,
	getExamHistoryByUser,
} = require('../repositories/mysql/examHistories');

const { createCertification } = require('./certification-service');
const { verifyEnrollStatusBeforeSubmitExam } = require('./enroll-service');

const { convertToLocalDatetime } = require('../utils/moment-timezone');
const { parse, stringify } = require('../utils/common');
const { InvariantError } = require('../errors');

const getExamQuestionsByCourseId = async (courseId) => {
	const examId = await getExamId(courseId);
	const questions = await getQuestionsByExamId(examId);

	return {
		examId,
		questions: questions.map((q) => {
			const quest = q.dataValues;
			return { ...quest, answers: parse(quest.answers) };
		}),
	};
};

const getExamHistoryByExamId = async (courseId, userId) => {
	const examId = await getExamId(courseId);
	const history = await getExamHistory(examId, userId);

	if (!history) {
		throw new InvariantError('No history for this exam');
	}

	return parse(history.dataValues.answerHistory);
};

const getExamHistoriesByUserId = async (userId) => {
	const histories = await getExamHistoryByUser(userId).then((result) =>
		result.map(convertToLocalDatetime),
	);

	const courses = await Promise.all(
		histories.map(async (h) => {
			const { courseId } = await getCourseIdInExams(h.examId).then(
				(result) => result.dataValues,
			);
			const { id, courseName } = await getCourseById(courseId).then(
				(result) => result.dataValues,
			);

			return { courseId: id, courseName };
		}),
	);

	return histories.map((history, i) => ({ ...history, ...courses[i] }));
};

const submitExam = async (userId, courseId, score, answers) => {
	const enrollStatus = await getStatusEnrollment(userId, courseId);

	verifyEnrollStatusBeforeSubmitExam(enrollStatus, score);

	const userName = await findById(userId).then(
		(result) => result.dataValues.fullname,
	);
	const courseName = await getCourseById(courseId).then(
		(result) => result.dataValues.courseName,
	);

	const examId = await getExamId(courseId);

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

		const histId = `examhist-${nanoid(16)}`;
		await addExamHistory({
			id: histId,
			examId: examId,
			userId,
			answerHistory: stringify(answers),
			score,
		});

		return convertToLocalDatetime(updatedCertification);
	} else {
		const certId = `cert-${nanoid(16)}`;
		const newHistoryCertification = await addCertificate({
			id: certId,
			courseId,
			userId,
			certificateReceiptDate,
			score,
			imageCertificate,
		});

		const histId = `examhist-${nanoid(16)}`;
		await addExamHistory({
			id: histId,
			examId: examId,
			userId,
			answerHistory: stringify(answers),
			score,
		});

		return convertToLocalDatetime(newHistoryCertification);
	}
};

module.exports = {
	getExamQuestionsByCourseId,
	getExamHistoryByExamId,
	getExamHistoriesByUserId,
	submitExam,
};
