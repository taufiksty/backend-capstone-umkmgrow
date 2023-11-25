const ExamHistories = require('../../models/examhistories');

const addExamHistory = async (payload) => {
	return await ExamHistories.create(payload);
};

const getExamHistory = async (examId, userId) => {
	return await ExamHistories.findOne({
		where: { examId, userId },
		order: [['createdAt', 'DESC']],
		limit: 1,
	});
};

module.exports = { addExamHistory, getExamHistory };
