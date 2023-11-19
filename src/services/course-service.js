const {
	getAllCourses,
	findCoursesByFilter,
	getCourseById,
} = require('../repositories/mysql/courses');
const { parse } = require('../utils/common');
const { convertToLocalDatetime } = require('../utils/moment-timezone');

const getCourse = async (id) => {
	const course = await getCourseById(id).then((result) =>
		convertToLocalDatetime(result),
	);

	return {
		...course,
		terms: parse(course.terms),
		materials: parse(course.materials),
		categoryPath: parse(course.categoryPath),
	};
};

const getCourses = async () => {
	const courses = await getAllCourses().then((result) =>
		result.map(convertToLocalDatetime),
	);

	return courses.map((course) => ({
		...course,
		terms: parse(course.terms),
		materials: parse(course.materials),
		categoryPath: parse(course.categoryPath),
	}));
};

const getCoursesByFilter = async (filter) => {
	const courses = await findCoursesByFilter(filter);

	return courses.map(convertToLocalDatetime);
};

module.exports = {
	getCourse,
	getCourses,
	getCoursesByFilter,
};
