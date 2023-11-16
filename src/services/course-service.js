const {
	getAllCourses,
	findCoursesByFilter,
} = require('../repositories/mysql/courses');
const { convertToLocalDatetime } = require('../utils/moment-timezone');

const getCourses = async () => {
	const courses = await getAllCourses();

	return courses.map(convertToLocalDatetime);
};

const getCoursesByFilter = async (filter) => {
	const courses = await findCoursesByFilter(filter);

	return courses.map(convertToLocalDatetime);
};

module.exports = { getCourses, getCoursesByFilter };
