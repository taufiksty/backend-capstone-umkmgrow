const { Op } = require('sequelize');
const Course = require('../../models/course');

const findCoursesByFilter = async ({ category, search }) => {
	let where = {};

	if (category) {
		where = {
			categoryPath: { [Op.like]: `%${category}%` },
		};
	}

	if (search) {
		where[Op.or] = [
			{ courseName: { [Op.like]: `%${search}%` } },
			{ courseAbout: { [Op.like]: `%${search}%` } },
			{ forWho: { [Op.like]: `%${search}%` } },
		];
	}

	const courses = await Course.findAll({ where });

	return courses;
};

const getAllCourses = async () => {
	return await Course.findAll({});
};

module.exports = { findCoursesByFilter, getAllCourses };
