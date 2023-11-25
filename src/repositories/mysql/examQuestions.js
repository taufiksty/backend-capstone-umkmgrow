const ExamQuestion = require('../../models/examquestion');

const getQuestionsByExamId = async (examId) => {
	return await ExamQuestion.findAll({
		where: { examId },
		order: [['questionSequence', 'ASC']],
		attributes: [
			'id',
			'question',
			'questionSequence',
			'answers',
			'correctAnswer',
		],
	});
};

module.exports = { getQuestionsByExamId };
