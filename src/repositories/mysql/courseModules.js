const CourseModule = require('../../models/coursemodule');

const getModulesByCourseId = async (courseId) => {
	return await CourseModule.findAll({
		where: { courseId },
		attributes: ['id', 'moduleName', 'moduleSequence', 'updatedAt'],
		order: [['moduleSequence', 'ASC']],
	});
};

module.exports = { getModulesByCourseId };
