const { getQuestionsByExamId } = require('../repositories/mysql/examQuestions');
const { getExamId } = require('../repositories/mysql/exams');

const getExamQuestionsByCourseId = async (courseId) => {
	const examId = await getExamId(courseId);
	const questions = await getQuestionsByExamId(examId);

	return { examId, questions };
};

module.exports = { getExamQuestionsByCourseId };
