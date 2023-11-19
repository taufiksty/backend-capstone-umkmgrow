const Certification = require('../../models/certification');

const addCertificate = async (payload) => {
	return await Certification.create(payload);
};

const getCertificationById = async (id) => {
	return await Certification.findByPk(id);
};

const getCertificationByUserIdAndCourseId = async (userId, courseId) => {
	return await Certification.findOne({ where: { userId, courseId } });
};

const updateCertification = async (payload, id) => {
	return await Certification.update(payload, { where: { id } });
};

module.exports = {
	addCertificate,
	getCertificationById,
	getCertificationByUserIdAndCourseId,
	updateCertification,
};
