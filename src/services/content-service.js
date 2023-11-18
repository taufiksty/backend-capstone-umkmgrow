const { getContents } = require('../repositories/mysql/courseModuleContents');
const { convertToLocalDatetime } = require('../utils/moment-timezone');

const getContentsByModuleId = async (moduleId) => {
	const contents = await getContents(moduleId);

	return contents.map(convertToLocalDatetime);
};

module.exports = { getContentsByModuleId };
