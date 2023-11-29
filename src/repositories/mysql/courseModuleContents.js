const CourseModuleContent = require('../../models/coursemodulecontent');

const getContents = async (moduleId) => {
	return await CourseModuleContent.findAll({
		where: { moduleId },
		attributes: [
			'id',
			'contentType',
			'contentDescription',
			'content',
			'contentSequence',
			'updatedAt',
		],
		order: [['contentSequence', 'ASC']],
	});
};

module.exports = { getContents };
