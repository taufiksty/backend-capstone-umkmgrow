const { getModulesByCourseId } = require('../repositories/mysql/courseModules');
const { convertToLocalDatetime } = require('../utils/moment-timezone');

const getCourseModulesByCourseId = async (id) => {
	const modules = await getModulesByCourseId(id);

	return modules.map(convertToLocalDatetime);
};

module.exports = { getCourseModulesByCourseId };
