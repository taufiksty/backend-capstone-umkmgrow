const { AuthorizationError } = require('../errors');
const {
	getRole,
	updateUser,
	findById,
} = require('../repositories/mysql/users');
const { stringify, parse } = require('../utils/common');
const { convertToLocalDatetime } = require('../utils/moment-timezone');
const { uploadImageProfile, deleteImageProfile } = require('./upload-service');

const updateProfile = async ({ id, userId, payload, image }) => {
	const roleUserId = await getRole(userId);

	if (id !== userId && roleUserId !== 'admin') {
		throw new AuthorizationError(
			"Forbidden. You don't have access to update this profile.",
		);
	}

	let imagePath = null;
	if (image) {
		imagePath = await uploadImageProfile(id, image);
	} else {
		await deleteImageProfile(id);
	}

	await updateUser(id, {
		...payload,
		businessFields: payload.businessFields
			? stringify(payload.businessFields)
			: null,
		skillsWant: payload.skillsWant ? stringify(payload.skillsWant) : null,
		imageProfile: imagePath,
	});

	const profileUpdated = await findById(id).then((result) =>
		convertToLocalDatetime(result),
	);

	return {
		...profileUpdated,
		businessFields: profileUpdated.businessFields
			? parse(payload.businessFields)
			: null,
		skillsWant: profileUpdated.skillsWant ? parse(payload.skillsWant) : null,
	};
};

module.exports = { updateProfile };
