const Exam = require('../../models/exam');

const getExamId = async (courseId) => {
	return await Exam.findOne({
		where: { courseId },
		attributes: ['id'],
	}).then((result) => result.dataValues.id);
};

const getCourseIdInExams = async (examId) => {
	return await Exam.findOne({
		where: { id: examId },
		attributes: ['courseId'],
	});
};

module.exports = { getExamId, getCourseIdInExams };
