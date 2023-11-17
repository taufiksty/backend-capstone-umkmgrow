const CourseModule = require('../../models/coursemodule');

const getModulesByCourseId = async (courseId) => {
	return await CourseModule.findAll({
		where: { courseId },
		attributes: ['id', 'moduleName', 'moduleSequence', 'updatedAt'],
	});
};

module.exports = { getModulesByCourseId };
