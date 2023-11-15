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

module.exports = { addUser, findByEmail };
