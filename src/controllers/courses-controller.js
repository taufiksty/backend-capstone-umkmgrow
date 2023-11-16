const { asyncWrapper } = require('../middlewares');
const {
	getCourses,
	getCoursesByFilter,
	getCourse,
} = require('../services/course-service');

const getCourseByIdHandler = asyncWrapper(async (req, res) => {
	const id = req.params.id;

	const course = await getCourse(id);

	res.json({
		success: true,
		data: { course },
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

module.exports = { getCourseByIdHandler, getCoursesHandler };
