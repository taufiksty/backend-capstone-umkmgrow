const {
	getAllCourses,
	findCoursesByFilter,
	getCourseById,
} = require('../repositories/mysql/courses');
const { convertToLocalDatetime } = require('../utils/moment-timezone');

const getCourse = async (id) => {
	const course = await getCourseById(id);

	return convertToLocalDatetime(course);
};

const getCourses = async () => {
	const courses = await getAllCourses();

	return courses.map(convertToLocalDatetime);
};

const getCoursesByFilter = async (filter) => {
	const courses = await findCoursesByFilter(filter);

	return courses.map(convertToLocalDatetime);
};

module.exports = { getCourse, getCourses, getCoursesByFilter };
