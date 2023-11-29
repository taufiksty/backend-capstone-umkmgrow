const Authentication = require('../../models/authentication');

const addToken = async (payload) => {
	return await Authentication.create(payload);
};

const findToken = async (token) => {
	return await Authentication.findOne({ where: { token } }).then(
		(authentication) => authentication?.dataValues,
	);
};

const destroyToken = async (userId) => {
	return await Authentication.destroy({
		where: {
			userId,
		},
	});
};

module.exports = { addToken, findToken, destroyToken };
