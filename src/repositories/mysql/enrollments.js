const { Op } = require('sequelize');
const Enrollment = require('../../models/enrollment');
const Course = require('../../models/course');

const addEnrollment = async (payload) => {
	return await Enrollment.create(payload);
};

const getEnrollment = async (where) => {
	return await Enrollment.findAll({
		where,
		attributes: ['id', 'courseId', 'enrollDate', 'status'],
	});
};

const getStatusEnrollment = async (userId, courseId) => {
	return await Enrollment.findOne({
		where: { [Op.and]: [{ userId, courseId }] },
		attributes: ['id', 'status'],
	}).then((result) => result?.dataValues);
};

const updateStatusAfterPurchase = async (id) => {
	return await Enrollment.update({ status: 'onlearning' }, { where: { id } });
};

const updateStatusAfterExamCompleted = async (id) => {
	return await Enrollment.update({ status: 'completed' }, { where: { id } });
};

module.exports = {
	addEnrollment,
	getEnrollment,
	getStatusEnrollment,
	updateStatusAfterPurchase,
	updateStatusAfterExamCompleted,
};
