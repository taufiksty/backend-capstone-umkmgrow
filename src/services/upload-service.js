const path = require('path');
const fs = require('fs/promises');

const { InvariantError } = require('../errors');
const { getImageById } = require('../repositories/mysql/users');
const config = require('../config');

const DIR_IMAGES_PROFILE = path.join(
	__dirname,
	'..',
	'..',
	'public',
	'images',
	'profile',
);

const uploadImageProfile = async (id, image) => {
	const allowedImageTypes = [
		'image/jpeg',
		'image/jpg',
		'image/png',
		'image/svg+xml',
	];

	if (!allowedImageTypes.includes(image.mimetype)) {
		throw new InvariantError(
			'Image must be formatted as (image/jpeg, image/jpg, image/png, image/svg+xml).',
		);
	}

	await deleteImageProfile(id);

	const imageFileName = `${Date.now()}_${path.basename(image.originalname)}`;

	const imageFilePath = path.join(DIR_IMAGES_PROFILE, imageFileName);

	try {
		await fs.writeFile(imageFilePath, image.buffer);
	} catch (error) {
		throw new InvariantError(error.message);
	}

	return `${config.app.baseUrl}/images/profile/${imageFileName}`;
};

const deleteImageProfile = async (id) => {
	const oldImage = await getImageById(id);

	if (oldImage) {
		const oldImageSplit = oldImage.split('/');
		const oldImageName = oldImageSplit[oldImageSplit.length - 1];
		const oldImagePath = path.join(DIR_IMAGES_PROFILE, oldImageName);

		try {
			await fs.access(oldImagePath);
			await fs.unlink(oldImagePath);
		} catch (error) {
			throw new InvariantError(error.message);
		}
	}
};

module.exports = { deleteImageProfile, uploadImageProfile };
