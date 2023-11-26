const ExamHistories = require('../../models/examhistories');

const addExamHistory = async (payload) => {
	return await ExamHistories.create(payload);
};

const getExamHistory = async (examId, userId) => {
	return await ExamHistories.findOne({
		where: { examId, userId },
		order: [['score', 'DESC'], ['createdAt', 'DESC']],
		limit: 1,
	});
};

const getExamHistoryByUser = async (userId) => {
	return await ExamHistories.findAll({
		where: { userId },
		order: [['createdAt', 'DESC']],
	});
};

module.exports = { addExamHistory, getExamHistory, getExamHistoryByUser };
