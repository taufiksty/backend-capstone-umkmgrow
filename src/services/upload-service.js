const path = require('path');
const fs = require('fs/promises');

const { InvariantError } = require('../errors');
const { getImageById } = require('../repositories/mysql/users');
const config = require('../config');

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

	const dirImagesProfile = path.join(
		__dirname,
		'..',
		'..',
		'public',
		'images',
		'profile',
	);

	const oldImage = await getImageById(id);

	if (oldImage) {
		const oldImageSplit = oldImage.split('/');
		const oldImageName = oldImageSplit[oldImageSplit.length - 1];
		const oldImagePath = path.join(dirImagesProfile, oldImageName);

		try {
			await fs.access(oldImagePath);
			await fs.unlink(oldImagePath);
		} catch (error) {
			throw new InvariantError(error.message);
		}
	}

	const imageFileName = `${Date.now()}_${path.basename(image.originalname)}`;

	const imageFilePath = path.join(dirImagesProfile, imageFileName);

	try {
		await fs.writeFile(imageFilePath, image.buffer);
	} catch (error) {
		throw new InvariantError(error.message);
	}

	return `${config.app.baseUrl}/images/profile/${imageFileName}`;
};

module.exports = { uploadImageProfile };
