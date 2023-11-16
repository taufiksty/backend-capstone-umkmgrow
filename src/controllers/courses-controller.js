const { asyncWrapper } = require('../middlewares');
const {
	getCourses,
	getCoursesByFilter,
} = require('../services/course-service');

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

module.exports = { getCoursesHandler };
