const ExamQuestion = require('../../models/examquestion');

const getQuestionsByExamId = async (examId) => {
	return await ExamQuestion.findAll({
		where: { examId },
		attributes: ['id', 'question', 'answers', 'correct_answer'],
	});
};

module.exports = { getQuestionsByExamId };
