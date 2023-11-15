const { AuthorizationError } = require('../errors');
const {
	getRole,
	updateUser,
	findById,
} = require('../repositories/mysql/users');
const { convertToLocalDatetime } = require('../utils/moment-timezone');
const { uploadImageProfile } = require('./upload-service');

const updateProfile = async ({ id, userId, payload, image }) => {
	const roleUserId = await getRole(userId);

	if (id !== userId && roleUserId !== 'admin') {
		throw new AuthorizationError(
			"Forbidden. You don't have access to update this profile.",
		);
	}

	const imagePath = await uploadImageProfile(id, image);

	await updateUser(id, {
		...payload,
		imageProfile: imagePath,
	});

	const profileUpdated = await findById(id);

	return convertToLocalDatetime(profileUpdated);
};

module.exports = { updateProfile };
