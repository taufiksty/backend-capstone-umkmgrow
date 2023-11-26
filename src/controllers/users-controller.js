const { asyncWrapper } = require('../middlewares');
const { getEnroll } = require('../services/enroll-service');
const { updateProfile } = require('../services/user-service');

const putUsersHandler = asyncWrapper(async (req, res) => {
	const { id } = req.params;
	const userId = req.auth.id;
	const payload = req.body;
	const image = req.file;

	const profileUpdated = await updateProfile({ id, userId, payload, image });
	const enrollments = await getEnroll({ userId: id });

	res.json({
		success: true,
		data: { user: { ...profileUpdated, enrollments } },
	});
});

module.exports = { putUsersHandler };
