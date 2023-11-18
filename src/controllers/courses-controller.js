const { asyncWrapper } = require('../middlewares');
const { getContentsByModuleId } = require('../services/content-service');
const {
	getCourses,
	getCoursesByFilter,
	getCourse,
} = require('../services/course-service');
const { getCourseModulesByCourseId } = require('../services/module-service');

const getCourseByIdHandler = asyncWrapper(async (req, res) => {
	const { id } = req.params;

	const course = await getCourse(id);

	res.json({
		success: true,
		data: { course },
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

module.exports = {
	getCourseByIdHandler,
	getCourseModulesHandler,
	getCoursesHandler,
};
