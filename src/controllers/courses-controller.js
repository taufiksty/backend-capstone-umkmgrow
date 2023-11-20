const { asyncWrapper } = require('../middlewares');
const { getContentsByModuleId } = require('../services/content-service');
const {
	getCourses,
	getCoursesByFilter,
	getCourse,
} = require('../services/course-service');
const {
	getExamQuestionsByCourseId,
	submitExam,
	getExamHistoryByExamId,
} = require('../services/exam-service');
const { getCourseModulesByCourseId } = require('../services/module-service');

const getCourseByIdHandler = asyncWrapper(async (req, res) => {
	const { id } = req.params;

	const course = await getCourse(id);

	res.json({
		success: true,
		data: { course },
	});
});

const getCourseExamHistoryHandler = asyncWrapper(async (req, res) => {
	const { id } = req.params;
	const userId = req.auth.id;

	const { examId, questions } = await getExamQuestionsByCourseId(id);
	const histories = await getExamHistoryByExamId(id, userId);

	res.json({
		success: true,
		data: {
			course: {
				id,
				exams: {
					id: examId,
					questions: questions.map((q, i) => ({
						...q,
						yourAnswer: histories[i + 1],
					})),
				},
			},
		},
	});
});

const getCourseExamsHandler = asyncWrapper(async (req, res) => {
	const { id } = req.params;

	const { examId, questions } = await getExamQuestionsByCourseId(id);

	res.json({
		success: true,
		data: { course: { id, exams: { id: examId, questions } } },
	});
});

const getCourseModulesHandler = asyncWrapper(async (req, res) => {
	const { id } = req.params;
	const { content } = req.query;
	let modules = await getCourseModulesByCourseId(id);

	if (content) {
		modules = await Promise.all(
			modules.map(async (module) => {
				const retrieveContents = await getContentsByModuleId(module.id);
				module.contents = retrieveContents;

				return module;
			}),
		);
	}

	res.json({
		success: true,
		data: { courseId: id, modules },
	});
});

const getCoursesHandler = asyncWrapper(async (req, res) => {
	const isQueryHasValue = Object.keys(req.query).length;

	let courses;

	if (isQueryHasValue) {
		courses = await getCoursesByFilter(req.query);
	} else {
		courses = await getCourses();
	}

	res.json({
		success: true,
		data: { courses },
	});
});

const postCourseExamSubmitHandler = asyncWrapper(async (req, res) => {
	const { id } = req.params;
	const userId = req.auth.id;
	const { score, answers } = req.body;

	let certification = await submitExam(userId, id, score, answers);

	res.status(201).json({
		success: true,
		data: { courseId: id, certification },
	});
});

module.exports = {
	getCourseByIdHandler,
	getCourseExamHistoryHandler,
	getCourseExamsHandler,
	getCourseModulesHandler,
	getCoursesHandler,
	postCourseExamSubmitHandler,
};
