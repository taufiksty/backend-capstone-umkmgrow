const { asyncWrapper } = require('../middlewares');
const { updateProfile } = require('../services/user-service');

const putUsersHandler = asyncWrapper(async (req, res) => {
	const { id } = req.params;
	const userId = req.auth.id;
	const payload = req.body;
	const image = req.file;

	const profileUpdated = await updateProfile({ id, userId, payload, image });

	res.json({
		success: true,
		data: { user: profileUpdated },
	});
});

module.exports = { putUsersHandler };
