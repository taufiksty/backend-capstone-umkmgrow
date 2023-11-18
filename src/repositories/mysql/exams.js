const Exam = require('../../models/exam');

const getExamId = async (courseId) => {
	return await Exam.findOne({
		where: { courseId },
		attributes: ['id'],
	}).then((result) => result.dataValues.id);
};

module.exports = { getExamId };
