const User = require('../../models/user');

const addUser = async (payload) => {
	return await User.create(payload);
};

const findByEmail = async (email) => {
	return await User.findOne({
		where: {
			email,
		},
	});
};

const findById = async (id) => {
	return await User.findOne({
		where: {
			id,
		},
	});
};

const getImageById = async (id) => {
	return await User.findOne({
		where: { id },
		attributes: ['image_profile'],
	}).then((user) => user.dataValues.image_profile);
};

const getRole = async (userId) => {
	return await User.findOne({
		where: { id: userId },
		attributes: ['role'],
	}).then((user) => user.dataValues.role);
};

const updateUser = async (id, payload) => {
	return await User.update({ ...payload }, { where: { id } });
};

module.exports = {
	addUser,
	findByEmail,
	findById,
	getImageById,
	getRole,
	updateUser,
};
